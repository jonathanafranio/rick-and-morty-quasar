<template>
    <div>
        <HeaderComponent />
        <main class="container">
            <section class="page-section">
                <slot />
            </section>
        </main>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from "./Header.vue";
import FooterComponent from "./Footer.vue";

export default {
    name: "LayoutDefault",
    components: {
        HeaderComponent,
        FooterComponent,
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped></style>
