<template>
  <div id="app">
    <Header />
    <LightBox :media="media"></LightBox>

    <router-view />
    <vue-facebook-page
      data-href="https://www.facebook.com/GenuineEducationAustralia/"
      link-text="Genuine Consultancy"
    />
    <Footer />
  </div>
</template>

<script>
require("vue-image-lightbox/dist/vue-image-lightbox.min.css");

import Header from "./components/Header";
import Footer from "./components/Footer";
import LightBox from "vue-image-lightbox";
export default {
  name: "App",
  components: { Header, Footer, LightBox },
  data() {
    return {
      media: [
        {
          thumb: "static/img/promo.jpg",
          src: "static/img/promo.jpg"
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {});
  }
};
</script>

<style>
body {
  font-family: "Poppins", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
}
#facebook-clicker {
  margin-top: 10vh;
}
</style>
