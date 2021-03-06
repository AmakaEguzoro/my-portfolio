import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "jquery/src/jquery.js";
import "popper.js/dist/popper.min.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({ el: "#app", router, render: (h) => h(App) });
