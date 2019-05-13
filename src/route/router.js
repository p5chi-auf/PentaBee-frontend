import Vue from "vue";
import Router from "vue-router";
import Second from "@/views/Second";
import Footer from "@/views/Footer";
import Home from "@/views/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/second",
      name: "second",
      component: Second
    },
    {
      path: "/footer",
      name: "footer",
      component: Footer
    }
  ]
});
