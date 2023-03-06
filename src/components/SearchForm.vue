<template>
    <form class="form-search" @submit.prevent="search_action">
        <label class="form-search__label" for="">Buscar personagem:</label>

        <div class="form-search__wrap">
            <select class="form-search__select" name="status" v-model="status">
                <option value="">Status de vida</option>
                <option value="alive">Vivo(a)</option>
                <option value="dead">Morto(a)</option>
                <option value="unknown">Desconhecido</option>
            </select>
        </div>
        <div class="form-search__wrap">
            <select class="form-search__select" name="gender" v-model="gender">
                <option value="">Todos os Gêneros</option>
                <option value="female">Feminino</option>
                <option value="male">Masculino</option>
                <option value="genderless">Sem Gênero</option>
                <option value="unknown">Desconhecido</option>
            </select>
        </div>
        <div class="form-search__wrap">
            <input
                type="text"
                name="name"
                placeholder="Por nome"
                v-model="name"
                class="form-search__input"
            />
            <button class="form-search__btn">
                <svg
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="form-search__svg"
                >
                    <path
                        d="M9.75007 18.5001C14.5826 18.5001 18.5001 14.5826 18.5001 9.75007C18.5001 4.91754 14.5826 1 9.75007 1C4.91754 1 1 4.91754 1 9.75007C1 14.5826 4.91754 18.5001 9.75007 18.5001Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M15.9374 15.9377L21 21.0002"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
    </form>
</template>

<script>
export default {
    setup() {
        return {
            name: "",
            gender: "",
            status: "",
        };
    },
    methods: {
        search_action() {
            const { name, gender, status } = this;
            let search_query = [];
            if (gender.trim() !== "") {
                search_query.push(`gender=${gender}`);
            }
            if (status.trim() !== "") {
                search_query.push(`status=${status}`);
            }
            if (name.trim() !== "") {
                search_query.push(`name=${name}`);
            }
            search_query = search_query.join("&");
            //return this.$router.push(`/search/?${search_query}`);
            location.href = `${location.origin}/search/?${search_query}`;
        },
    },
};
</script>

<style lang="scss" scoped></style>
