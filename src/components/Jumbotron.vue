<template>
  <b-jumbotron :header="title" :lead="leadText" fluid="false"></b-jumbotron>
</template>

<script>
export default {
  name: "Jumbotron",
  data() {
    return {};
  },
  props: ["title", "leadText"]
};
</script>

<style scoped>
.jumbotron {
  background-image: url("https://www.aeccglobal.com.au/wp-content/uploads/2018/03/img-pop-cours-bcm-af-banner.jpg");
  background-size: cover;
  color: #fff;
  padding: 5rem 0px;
  margin-bottom: 0px;
}
.jumbotron h1 {
  font-weight: bold;
  font-size: 2em;
}
.jumbotron .lead {
  padding-top: 1rem;
}
</style>
