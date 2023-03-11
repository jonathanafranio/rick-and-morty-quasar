const routes = [
    {
        path: "/",
        component: () => import("pages/IndexPage.vue"),
    },

    {
        path: "/p/:p",
        component: () => import("pages/IndexPaginacao.vue"),
    },

    {
        path: "/search",
        component: () => import("pages/Search.vue"),
    },

    {
        path: "/search/p/:p",
        component: () => import("pages/SearchPaginacao.vue"),
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
