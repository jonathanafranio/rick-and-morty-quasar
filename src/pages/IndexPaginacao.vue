<template>
    <LayoutDefault>
        <SearchForm />

        <ListCharacter
            :title="title"
            :page="page"
            :page_url="prefix_url"
            search=""
        />
    </LayoutDefault>
</template>

<script>
import { defineComponent } from "vue";

import LayoutDefault from "components/Layouts/LayoutDefault.vue";
import SearchForm from "components/SearchForm.vue";
import ListCharacter from "components/ListCharacter/ListCharacter.vue";

export default defineComponent({
    name: "IndexPaginacao",
    components: {
        LayoutDefault,
        SearchForm,
        ListCharacter,
    },
    data() {
        return {
            title: `Lista de personagens - página: ${this.$route.params.p}`,
            page: this.$route.params.p,
        };
    },
    computed: {
        prefix_url() {
            return location.origin;
        },
    },
});
</script>
