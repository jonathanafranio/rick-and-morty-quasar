<template>
    <button class="card-list__pagination-btn" @click="next">
        Exibir Mais Personagens
    </button>
</template>

<script>
export default {
    setup() {
        return {};
    },
    methods: {
        next() {
            this.$emit("next-page");
        },
    },
};
</script>

<style lang="scss" scoped></style>
