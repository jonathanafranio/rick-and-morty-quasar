<template>
    <LayoutDefault>
        <ListCharacter :title="title" :request_url="request_url" />
    </LayoutDefault>
</template>

<script>
import { defineComponent } from "vue";

import LayoutDefault from "components/Layouts/LayoutDefault.vue";
import ListCharacter from "components/ListCharacter/ListCharacter.vue";

export default defineComponent({
    name: "SearchPage",
    components: {
        LayoutDefault,
        ListCharacter,
    },
    setup() {
        return {
            request_url: "",
            title: "",
        };
    },
    methods: {
        sem_param() {
            return this.$router.push(`/`);
        },
        title_search(str) {
            const string_replaces = [
                {
                    text: "gender",
                    replace: "Gênero",
                },
                {
                    text: "status",
                    replace: "Status",
                },
                {
                    text: "name",
                    replace: "Nome",
                },
                {
                    text: "alive",
                    replace: "Vivo(a)",
                },
                {
                    text: "dead",
                    replace: "Morto(a)",
                },
                {
                    text: "unknown",
                    replace: "Desconhecido",
                },
                {
                    text: "female",
                    replace: "Feminino",
                },
                {
                    text: "male",
                    replace: "Masculino",
                },
                {
                    text: "genderless",
                    replace: "Sem Gênero",
                },
            ];
            let newStr = str.replace("?", "");
            newStr = newStr.replaceAll("=", ": ").replaceAll("&", " e ");

            string_replaces.forEach((item) => {
                newStr = newStr.replaceAll(item.text, item.replace);
            });

            this.title = `Resultado da busca: ${newStr}`;
        },
    },
    created() {
        if (process.browser) {
            const search_query = location.search;
            if (search_query.trim() === "") {
                this.sem_param();
            } else {
                this.request_url = `https://rickandmortyapi.com/api/character/${search_query}`;
                this.title_search(search_query);
            }
        }
    },
});
</script>

<style lang="scss" scoped></style>
