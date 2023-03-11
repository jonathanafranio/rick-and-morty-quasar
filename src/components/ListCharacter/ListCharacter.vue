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

        <Pagination
            v-if="!loading && pagination.last > 1"
            :next="pagination.next"
            :prev="pagination.prev"
            :active="page"
            :last="pagination.last"
            :prefix_url="page_url"
            :search="search"
        />

        <Preload v-if="loading" />
    </div>
</template>

<script>
import CardCharacter from "./CardCharacter.vue";
import Pagination from "../Pagination.vue";
import Preload from "../Preload";
export default {
    name: "ListCharacter",
    components: {
        CardCharacter,
        Pagination,
        Preload,
    },
    props: {
        title: String,
        filtro_status: {
            type: String,
            default() {
                return "";
            },
        },
        filtro_gender: {
            type: String,
            default() {
                return "";
            },
        },
        filtro_name: {
            type: String,
            default() {
                return "";
            },
        },
        page: {
            type: Number,
            default() {
                return 1;
            },
        },
        search: {
            type: String,
            default() {
                return "";
            },
        },
        page_url: String,
    },
    data() {
        return {
            request_url: "https://rickandmortyapi.com/graphql",
            characters: [],
            pagination: {
                next: null,
                prev: null,
                last: null,
            },
            loading: true,
            error: false,
        };
    },
    methods: {
        async get_character(query, variables = {}) {
            const option = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query, variables }),
            };
            await fetch(this.request_url, option)
                .then((r) => r.json())
                .then((res) => {
                    const { results, info } = res.data.characters;
                    this.pagination.next = info.next;
                    this.pagination.prev = info.prev;
                    this.pagination.last = info.pages;
                    this.characters.push(results);
                    this.loading = false;

                    console.log({ results, info });
                })
                .catch((e) => {
                    this.loading = false;
                    this.error = true;
                });
        },
    },
    watch: {
        page() {
            this.get_character(this.queryGraphql);
        },
    },
    computed: {
        queryGraphql() {
            return `{\n
                characters(page: ${this.page}, filter: {status: \"${this.filtro_status}\" gender: \"${this.filtro_gender}\" name: \"${this.filtro_name}\"}) {\n
                    info {\n
                        pages\n
                        count\n
                        next\n
                        prev\n
                    }\n
                    results {\n
                        id\n
                        name\n
                        species\n
                        image\n
                    }\n
                }\n
            }`;
        },
    },
    created() {
        this.get_character(this.queryGraphql);
    },
};
</script>

<style lang="scss" scoped></style>
