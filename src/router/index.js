import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ResultsPage from "../views/ResultsPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/results",
        name: "Results",
        component: ResultsPage,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
