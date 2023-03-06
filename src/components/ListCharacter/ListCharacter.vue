<template>
    <div class="character-list">
        <h1 class="page-section__title">{{ title }}</h1>

        <p class="character-list__not-found" v-if="error">
            Nenhum resultado encontrado. :(
        </p>
        <div
            class="character-list__page"
            v-for="(page, i) in characters"
            v-bind:key="i"
            :id="`page-${i}`"
        >
            <CardCharacter
                v-for="character in page"
                v-bind:key="character.id"
                :id_character="character.id"
                :title="character.name"
                :species="character.species"
                :thumb="character.image"
            />
        </div>

        <PaginationNext
            v-if="pagination.next && !loading"
            :load="loading"
            v-on:next-page="next_page"
        />

        <Preload v-if="loading" />
    </div>
</template>

<script>
import CardCharacter from "./CardCharacter.vue";
import PaginationNext from "../PaginationNext.vue";
import Preload from "../Preload";
export default {
    name: "ListCharacter",
    components: {
        CardCharacter,
        PaginationNext,
        Preload,
    },
    props: {
        title: String,
        request_url: {
            type: String,
            default() {
                return "https://rickandmortyapi.com/api/character";
            },
        },
    },
    data() {
        return {
            characters: [],
            pagination: {
                next: null,
                prev: null,
            },
            loading: true,
            error: false,
        };
    },
    methods: {
        get_character(url) {
            if (!url) return;
            fetch(url)
                .then((r) => r.json())
                .then((res) => {
                    const { results, info } = res;
                    this.pagination.next = info.next;
                    this.pagination.prev = info.prev;
                    this.characters.push(results);

                    this.loading = false;
                })
                .catch((e) => {
                    this.loading = false;
                    this.error = true;
                });
        },
        next_page() {
            if (!this.pagination.next) return;
            this.loading = true;

            this.get_character(this.pagination.next);
        },
    },
    created() {
        this.get_character(this.request_url);
    },
};
</script>

<style lang="scss" scoped></style>
