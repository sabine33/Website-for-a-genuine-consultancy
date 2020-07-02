import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/Homepage";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import ServiceElement from "@/components/ServiceElement";
Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/about",
      name: "About",
      component: About
    },

    {
      path: "/services/:name",
      name: "services",
      component: Services,
      props: true,
      children: [
        {
          path: "",
          component: ServiceElement,
          props: true
        }
      ]
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/courses",
      name: "Courses",
      component: Courses
    },
    {
      path: "/testimonials",
      name: "Testimonials",
      component: Testimonials
    }
  ]
});
