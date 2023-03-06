<template>
    <div class="character-info">
        <img
            :src="image"
            :alt="title"
            class="character-info__img"
            v-if="image"
        />

        <span class="character-info__txt">
            Nome: <strong>{{ title }}</strong>
        </span>
        <span class="character-info__txt">
            Status: <strong>{{ status_pt }}</strong>
        </span>
        <span class="character-info__txt">
            Espécie: <strong>{{ species }}</strong>
        </span>
        <span class="character-info__txt">
            Gênero: <strong>{{ genero }}</strong>
        </span>
        <span class="character-info__txt">
            Origem: <strong>{{ origin }}</strong>
        </span>
        <span class="character-info__txt">
            Localização: <strong>{{ location }}</strong>
        </span>
    </div>
</template>

<script>
export default {
    name: "CharacherInfo",
    props: {
        title: String,
        image: String,
        status: String,
        species: String,
        gender: String,
        origin: String,
        location: String,
    },
    setup() {
        return {};
    },
    computed: {
        genero() {
            const genders = {
                Female: "Feminino",
                Male: "Masculino",
                Genderless: "Sem Gênero",
                unknown: "Desconhecido",
                default: "",
            };

            return genders[this.gender] || genders.default;
        },
        status_pt() {
            const status = {
                Alive: "Vivo(a)",
                Dead: "Morto(a)",
                unknown: "Desconhecido",
                default: "",
            };
            return status[this.status] || this.default;
        },
    },
};
</script>

<style lang="scss" scoped></style>
