<template>
    <LayoutDefault>
        <Preload v-if="loading" />

        <div class="character">
            <h1 class="page-section__title">Personagem: {{ title }}</h1>

            <CharacterInfo
                :title="title"
                :image="image"
                :status="status"
                :species="species"
                :gender="gender"
                :origin="origin"
                :location="location_home"
            />

            <Episodes v-if="epsidios_arr" :listagem="epsidios_arr" />
        </div>
    </LayoutDefault>
</template>

<script>
import { isProxy, toRaw } from "vue";
import LayoutDefault from "components/Layouts/LayoutDefault.vue";
import Preload from "components/Preload.vue";
import CharacterInfo from "components/CharacterInfo.vue";
import Episodes from "components/Episodes.vue";

export default {
    name: "Personagem",
    components: {
        LayoutDefault,
        Preload,
        CharacterInfo,
        Episodes,
    },
    data() {
        return {
            loading: true,
            id: this.$route.params.personagem,
            title: "",
            image: "",
            status: "",
            species: "",
            gender: "",
            origin: "",
            location_home: "",
            episode: [],
        };
    },
    methods: {
        get_character() {
            fetch(`https://rickandmortyapi.com/api/character/${this.id}`)
                .then((r) => r.json())
                .then((r) => {
                    const { episode } = r;
                    this.title = r.name;
                    this.image = r.image;
                    this.status = r.status;
                    this.species = r.species;
                    this.gender = r.gender;
                    this.origin = r.origin.name;
                    this.location_home = r.location.name;
                    this.episode = episode;
                    this.loading = false;
                });
        },
    },
    computed: {
        epsidios_arr() {
            let episode = this.episode;
            return isProxy(episode) ? toRaw(episode) : episode;
        },
    },
    created() {
        this.get_character();
    },
};
</script>

<style lang="scss" scoped></style>
