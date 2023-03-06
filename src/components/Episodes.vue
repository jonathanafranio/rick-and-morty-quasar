<template>
    <div class="mx-8 episodes" v-if="listagem">
        <h2 class="episodes__title">Lista de episódios:</h2>

        <table class="episodes__table" v-if="episodios">
            <tr class="episodes__tr">
                <th>Código</th>
                <th>Nome:</th>
            </tr>
            <tr
                class="episodes__tr"
                v-for="e in episodios"
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
    data() {
        return {
            episodios: [],
        };
    },
    methods: {
        get_epsode(url) {
            if (!url) return;

            fetch(url)
                .then((r) => r.json())
                .then((r) => {
                    if (this.listagem.length > 1) {
                        console.log({ r, url });
                        const epsodios = r.map((e) => {
                            const { name, episode } = e;
                            return { name, episode };
                        });
                        this.episodios = epsodios;
                    } else {
                        const { name, episode } = r;
                        this.episodios = [{ name, episode }];
                    }
                })
                .catch((e) => console.log("erro", e));
        },
        for_listagem() {
            if (!this.listagem) return;
            const listagem = this.listagem
                .map((e) => e.replace(/[^0-9]/g, ""))
                .join(",");
            this.get_epsode(
                `https://rickandmortyapi.com/api/episode/${listagem}`
            );
        },
        checka_listagem() {
            const interval = setInterval(() => {
                if (this.listagem.length > 0) {
                    this.for_listagem();
                    stop();
                }
            }, 10);
            const stop = () => clearInterval(interval);
        },
    },
    created() {
        this.checka_listagem();
    },
};
</script>

<style lang="scss" scoped></style>
