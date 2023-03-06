<template>
    <LayoutDefault>
        <div
            class="page-section__fullscreen text-white text-center q-pa-md flex flex-center"
        >
            <div>
                <div style="font-size: 30vh">404</div>

                <div class="text-h2" style="opacity: 0.4">
                    Oops. Nada por aqui...
                </div>
            </div>
        </div>
    </LayoutDefault>
</template>

<script>
import { defineComponent } from "vue";
import LayoutDefault from "components/Layouts/LayoutDefault.vue";
export default defineComponent({
    name: "ErrorNotFound",
    components: {
        LayoutDefault,
    },
});
</script>
