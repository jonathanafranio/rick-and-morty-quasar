const routes = [
    {
        path: "/",
        component: () => import("pages/IndexPage.vue"),
    },

    {
        path: "/search",
        component: () => import("pages/Search.vue"),
    },

    {
        path: "/personagem/:personagem",
        component: () => import("pages/Personagem.vue"),
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue"),
    },
];

export default routes;
