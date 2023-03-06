<template>
    <header class="header">
        <div class="container">
            <a href="/" class="header__logo" title="Rick And Morty">
                <img :src="logo" alt="Rick And Morty" />
            </a>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
    setup() {
        return {
            logo: require("src/assets/logo.png"),
        };
    },
};
</script>

<style lang="scss" scoped></style>
