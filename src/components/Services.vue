<template>
  <div>
    <Jumbotron
      title="Services"
      leadText=" We provide end-to-end counseling and application management services to students searching for affordable university and college for various course in Diploma, Bachelor, Master."
      data-aos="zoom-in"
      style=" background-image: url('../../static/img/banner_services.jpg');background-size:cover;background-position:0% 0%"
    />
    <vue-facebook-page
      data-href="https://www.facebook.com/techbytesonline/"
      link-text="Genuine Consultancy"
      class="col-lg-12"
    />
    <section class="services pt-2 pb-100" id="services" data-aos="zoom-in">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import Jumbotron from "./Jumbotron";
export default {
  components: { Jumbotron }
};
</script>

<style scoped>
.section-title {
  position: relative;
}
.section-title p {
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 400;
}
.section-title h4 {
  font-size: 40px;
  font-weight: 600;
  text-transform: capitalize;
  position: relative;
  padding-bottom: 20px;
  display: inline-block;
}
.section-title h4:before {
  position: absolute;
  content: "";
  width: 80px;
  height: 2px;
  background-color: #d8d8d8;
  bottom: 0;
  left: 50%;
  margin-left: -40px;
}
.section-title h4:after {
  position: absolute;
  content: "";
  width: 50px;
  height: 2px;
  background-color: #ff7200;
  left: 0;
  bottom: 0;
  left: 50%;
  margin-left: -25px;
}
.pt-100 {
  padding-top: 100px;
}
.pb-100 {
  padding-bottom: 100px;
}
.mb-100 {
  margin-bottom: 100px;
}
.services {
  background-color: #fbfbfb;
}
.single-service {
  position: relative;
  text-align: center;
  margin-bottom: 50px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 30px 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
  min-height: 350px;
}
.single-service:before {
  position: absolute;
  width: 0;
  height: 0;
  background-color: #ff7200;
  left: 0;
  top: 0;
  content: "";
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.single-service:after {
  position: absolute;
  width: 0;
  height: 0;
  background-color: #ff7200;
  right: 0;
  bottom: 0;
  content: "";
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.single-service:hover:after,
.single-service:hover:before {
  width: 50%;
  height: 2px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.single-service:hover {
  box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.1);
}
.single-service i.fa {
  font-size: 20px;
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  line-height: 60px;
  margin-bottom: 30px;
  border-radius: 50%;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.single-service:hover i.fa {
  background-color: #ff7200;
  color: #fff;
  border-color: #ff7200;
  border-radius: 0;
}
.single-service h4 {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 15px;
  text-transform: capitalize;
}
.single-service p {
  font-size: 15px;
  line-height: 1.8;
}
.bottom-box {
  /* box-shadow: 1px 1px 1px 1px #1c9dd4; */
  width: 30%;
  height: 1px;
  background-color: #1c9dd4;
}
</style>
