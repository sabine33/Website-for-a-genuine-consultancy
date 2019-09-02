<template>
  <div id="app">
    <Header />
    <router-view />
    <vue-facebook-page
      data-href="https://www.facebook.com/GenuineEducationAustralia/"
      link-text="Genuine Consultancy"
    />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Header, Footer }
};
</script>

<style>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
}
#facebook-clicker {
  margin-top: 10vh;
}
</style>
