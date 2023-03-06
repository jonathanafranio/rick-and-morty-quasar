<template>
    <article class="card-post mx-3 md-6 sm-6" :id="id_character">
        <div class="card-post__container">
            <figure class="card-post__figure">
                <img :src="thumb" alt="title" />
            </figure>

            <div class="card-post__text">
                <span class="card-post__categ">{{ species }}</span>
                <h3 class="card-post__title">{{ title }}</h3>
            </div>

            <a
                class="card-post__link"
                :href="`/personagem/${this.id_character}`"
                >Ver detalhes</a
            >
        </div>
    </article>
</template>

<script>
export default {
    setup() {
        return {};
    },
    props: {
        id_character: Number,
        title: String,
        species: String,
        thumb: String,
    },
    methods: {},
};
</script>

<style lang="scss" scoped></style>
