<template>
    <LayoutDefault>
        <ListCharacter
            :title="title"
            :filtro_status="filtro_status"
            :filtro_gender="filtro_gender"
            :filtro_name="filtro_name"
        />
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
    data() {
        return {
            title: "",
            filtro_status: "",
            filtro_gender: "",
            filtro_name: "",
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
        filtro_search(str) {
            let newStr = str.replace("?", "");
            newStr = newStr.split("&");
            newStr = newStr.map((item) => {
                const split = item.split("=");
                const [key, value] = [split[0], split[1]];
                return { key, value };
            });
            const status_search = newStr.filter(
                (item) => item.key === "status"
            );
            const gender_search = newStr.filter(
                (item) => item.key === "gender"
            );
            const name_search = newStr.filter((item) => item.key === "name");

            this.filtro_status =
                status_search.length > 0 ? status_search[0].value : "";
            this.filtro_gender =
                gender_search.length > 0 ? gender_search[0].value : "";
            this.filtro_name =
                name_search.length > 0 ? name_search[0].value : "";
        },
    },
    created() {
        const search_query = location.search;
        if (search_query.trim() === "") {
            this.sem_param();
        } else {
            this.request_url = `https://rickandmortyapi.com/api/character/${search_query}`;
            this.title_search(search_query);
            this.filtro_search(search_query);
        }
    },
});
</script>

<style lang="scss" scoped></style>
