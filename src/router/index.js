import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contactus from "../views/Contactus.vue";
import Service from "../views/Service.vue";
import Book from "../views/Book.vue";
import Booking from "../views/Booking.vue";
import { fb } from "../firebaseConfig";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contactus",
      name: "contactus",
      component: Contactus
    },
    {
      path: "/service",
      name: "service",
      component: Service
    },
    {
      path: "/book",
      name: "book",
      component: Book,
      meta: { requiresAuth: true },
      children: [
        {
          path: "booking",
          name: "booking",
          component: Booking
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;

  if(requiresAuth && !currentUser){
    next("/");
  }
  else if(requiresAuth && currentUser){
    next()
  }
  else{
    next()
  }
});
// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });

export default router;
