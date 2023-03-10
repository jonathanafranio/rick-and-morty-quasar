<template>
    <div class="mx-8 episodes" v-if="listagem">
        <h2 class="episodes__title">Lista de episódios:</h2>

        <table class="episodes__table">
            <tr class="episodes__tr">
                <th>Código</th>
                <th>Nome:</th>
            </tr>
            <tr
                class="episodes__tr"
                v-for="e in listagem"
                v-bind:key="e.episode"
            >
                <td>{{ e.episode }}</td>
                <td>
                    <strong>{{ e.name }}</strong>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "Episodes",
    props: {
        listagem: Array,
    },
};
</script>

<style lang="scss" scoped></style>
