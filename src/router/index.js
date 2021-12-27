import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/home.vue";
import Articles from "../pages/articles.vue";
import Process from "../pages/process.vue";
import About from "../pages/about.vue";
import Covid from "../pages/covid.vue";
import Casestudy from "../pages/casestudy.vue";
import Fetsmobile from "../pages/fetsmobile.vue";
import Powerdeal from "../pages/powerdeal.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/articles",
      name: "Articles",
      component: Articles,
    },
    {
      path: "/process",
      name: "Process",
      component: Process,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/covid",
      name: "Covid",
      component: Covid,
    },
    {
      path: "/casestudy",
      name: "Casestudy",
      component: Casestudy,
    },
    {
      path: "/fetsmobile",
      name: "Fetsmobile",
      component: Fetsmobile,
    },
    {
      path: "/powerdeal",
      name: "Powerdeal",
      component: Powerdeal,
    },
  ],
});
