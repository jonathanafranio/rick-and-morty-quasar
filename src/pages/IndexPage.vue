<template>
    <LayoutDefault>
        <SearchForm />

        <ListCharacter
            title="Lista de personagens"
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
    name: "IndexPage",
    components: {
        LayoutDefault,
        SearchForm,
        ListCharacter,
    },
    computed: {
        prefix_url() {
            return location.origin;
        },
    },
});
</script>
