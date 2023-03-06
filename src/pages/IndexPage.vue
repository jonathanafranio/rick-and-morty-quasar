<template>
    <LayoutDefault>
        <q-page class="flex flex-center">
            <img
                alt="Quasar logo"
                src="~assets/quasar-logo-vertical.svg"
                style="width: 200px; height: 200px"
            />
        </q-page>
    </LayoutDefault>
</template>

<script>
import { defineComponent } from "vue";

import LayoutDefault from "components/Layouts/LayoutDefault.vue";

export default defineComponent({
    name: "IndexPage",
    components: {
        LayoutDefault,
    },
});
</script>
