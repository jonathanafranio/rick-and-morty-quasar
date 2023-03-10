<template>
    <LayoutDefault>
        <SearchForm />

        <ListCharacter title="Lista de personagens" />
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
});
</script>
