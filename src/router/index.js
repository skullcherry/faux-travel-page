import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Discover from "../views/TopLinks/Discover.vue";
import PlanTrip from "../views/TopLinks/PlanTrip.vue";
import CheckFlights from "../views/TopLinks/CheckFlights.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/plan-a-trip",
    name: "Plan a trip",
    component: PlanTrip,
  },
  {
    path: "/discover",
    name: "Discover",
    component: Discover,
  },
  {
    path: "/check-flights",
    name: "Check flights",
    component: CheckFlights,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
