<template>
    <nav class="pagination">
        <a class="pagination__first" :href="first_page" v-if="active > 1">
            Primeira
        </a>
        <span v-else class="pagination__first -disable">Primeira</span>

        <a class="pagination__prev" :href="prev_page" v-if="active > 1">
            Anterior
        </a>
        <span v-else class="pagination__prev -disable">Anterior</span>

        <ul class="pagination__ul">
            <li class="pagination__li" v-for="p in pages_num" v-bind:key="p">
                <a
                    class="pagination__link"
                    :href="p.link"
                    :class="p.number == active ? '-active' : ''"
                >
                    {{ p.number }}
                </a>
            </li>
        </ul>

        <a class="pagination__next" :href="next_page" v-if="active < last">
            Próxima
        </a>
        <span v-else class="pagination__next -disable">Próxima</span>

        <a class="pagination__last" :href="last_page" v-if="active < last">
            Última
        </a>
        <span v-else class="pagination__last -disable">Última</span>
    </nav>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        next: Number,
        prev: Number,
        active: Number,
        last: Number,
        prefix_url: String,
        search: {
            type: String,
            default() {
                return "";
            },
        },
    },
    computed: {
        prev_page() {
            const url =
                this.prev < 2
                    ? this.prefix_url
                    : `${this.prefix_url}/p/${this.prev}`;
            return `${url}/${this.search}`;
        },
        next_page() {
            const url =
                this.next < this.last
                    ? `${this.prefix_url}/p/${this.next}`
                    : `${this.prefix_url}/p/${this.last}`;
            return `${url}/${this.search}`;
        },
        first_page() {
            const url = `${this.prefix_url}`;
            return `${url}/${this.search}`;
        },
        last_page() {
            const url = `${this.prefix_url}/p/${this.last}`;
            return `${url}/${this.search}`;
        },
        pages_num() {
            const array_pages = [];
            if (this.prev) {
                const obj_prev = {
                    number: this.prev,
                    link: this.prev_page,
                };
                array_pages.push(obj_prev);
            }
            const active_page = {
                number: this.active,
                link: "",
            };
            array_pages.push(active_page);

            if (this.next) {
                const obj_next = {
                    number: this.next,
                    link: this.next_page,
                };
                array_pages.push(obj_next);
            }

            if (this.active == 1 && this.last > 2) {
                const third = {
                    number: 3,
                    link: `${this.prefix_url}/p/3/${this.search}`,
                };
                array_pages.push(third);
            }

            return array_pages;
        },
    },
};
</script>
