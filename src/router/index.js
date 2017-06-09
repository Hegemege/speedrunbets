import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        { // Default fallback back to front page
            path: "*",
            redirect: "/"
        }
    ]
});
