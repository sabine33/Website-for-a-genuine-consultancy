<template>
  <section>
    <div
      id="fw_al_007"
      class="carousel ps_rotate_scale_c ps_indicators_l ps_control_rotate_f swipe_x ps_easeOutQuint"
      data-ride="carousel"
      data-pause="hover"
      data-interval="5000"
      data-duration="2000"
    >
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#fw_al_007" data-slide-to="0" class="active"></li>
        <li data-target="#fw_al_007" data-slide-to="1"></li>
        <li data-target="#fw_al_007" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner" role="listbox">
        <!-- First Slide -->
        <div class="carousel-item active">
          <!-- Slide Background -->
          <img src="static/img/banner1.jpg" alt="fw_al_007_01" />

          <!-- Slide Text Layer -->
          <div class="fw_al_007_slide">
            <h1 data-animation="animated flipInX ">Helping student to achieve their dream.</h1>
            <h3 class="py-2">WITH LESS STUFF, MORE MEANING</h3>
            <!-- 
            <a href="contact.html" data-animation="animated flipInX">GET FREE QUOTE</a>-->
          </div>
        </div>
        <!-- End of Slide -->

        <div class="carousel-item">
          <img src="static/img/banner2.jpg" alt="fw_al_007_02" />

          <div class="fw_al_007_slide">
            <h3 data-animation="animated flipInX">We are the leader in</h3>
            <h1 data-animation="animated flipInX py-2">
              <span>Consulting</span> and VISA Services
            </h1>
          </div>
        </div>

        <div class="carousel-item">
          <img src="static/img/banner3.jpg" alt="fw_al_007_03" />

          <div class="fw_al_007_slide">
            <h3 data-animation="animated flipInX">CHANGE YOUR VISA FROM VISITOR TO</h3>
            <h1 data-animation="animated flipInX py-2">
              <span>STUDENT</span> ONE
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="row aboutus" style="margin-right:0px;">
      <div
        class="col-xs-12 col-md-3 py-3 px-5"
        style="margin: 0px;min-height: 100vh;background-color: rgb(3,169,245);"
      >
        <h1 class="text-light aboutus-title py-3" style="font-size:2em;font-weight:normal">
          <span
            style="border-bottom: 2px solid #fff;margin-bottom: 5px;margin-right: 3px;padding-bottom:5px"
          >A</span>BOUT&nbsp;US
        </h1>
        <p class="aboutus-text text-white py-3 text-justify" style="font-size:1em">
          Since 2016, Genuine Education and Visa Services have been continuously providing the excellent service to clients to fulfill endeavor of living quality life in Australia. We offer great service standards by adhering to the OMARA's code of conduct and comprising the competent and skilled employee.
          <br />
          <br />&nbsp; We provide end-to-end counseling and application management services to students searching for affordable university and college for various course in Diploma, Bachelor, Master. Our expertise includes Migration Service, Course Change, University Change, Visa Change, Family Migration, Skill Assessments, Recognition of Prior Learning(RPL), Professional Year, Health Insurance. Furthermore, we have PTE and NAATI course to help you achieve that extra points for PR.
        </p>
      </div>
      <div class="col-xs-12 col-md-9 services pb-5 pt-4 px-5">
        <h1 class="text-primary services-title" style="font-size: 2em;font-weight:normal;">
          <span
            style="border-bottom: 2px solid #3999FF;margin-bottom: 5px;padding-right: 3px;padding-bottom:5px"
          >S</span>ERVICES
        </h1>
        <ServicesGrid />
      </div>
    </div>

    <div
      class="highlight-blues text-center py-5"
      style="background-color: #2D63C4;"
      data-aos="zoom-in"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-lg-12">
            <div class="intro">
              <h3 class="text-center text-white">WHY US</h3>
              <p class="text-center text-white py-3">
                Since 2016,Genuine Consultancy and Visa Services
                have been continuously providing the excellent service to clients to fulfill endeavor of living
                quality life in Australia.
                <br />We provide end-to-end counseling and application management services to students searching for affordable university and college for various course in Diploma, Bachelor, Master
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container-fluid"
      style="background-image:url('../../static/img/about_us.jpg');height:50vh;background-size:cover;background-position:0px;"
    >
      <!-- <div class="col-xs-12 col-lg-12">
        <img src class="img-responsive px-5" width="100%" />
      </div>-->
    </div>

    <div
      class="section container-fluid text-white pt-4 pb-5 text-center"
      style="background-color: rgb(3,169,245);"
    >
      <div class="container">
        <h2 class="my-1 mb-3 text-left" style="font-weight:400">
          <span
            style="border-bottom: 2px solid #000;margin-bottom: 5px;padding-right: 3px;padding-bottom:5px;"
          >A</span>CCREDIATIONS
        </h2>
        <div class="row py-4 recent-activities-images d-flex align-items-center">
          <div class="col-xs-12 col-lg-4">
            <img src="../../static/img/mara.png" class="img-fluid text-center" width="60%" />
          </div>
          <div class="col-xs-12 col-lg-4">
            <img src="../../static/img/mia.png" class="img-fluid text-center" width="60%" />
          </div>
          <div class="col-xs-12 col-lg-4">
            <img src="../../static/img/qeac.png" class="img-fluid text-center" width="60%" />
          </div>
        </div>
      </div>
    </div>

    <div class="section container mt-4 mb-5">
      <h2 class="my-2 text-left" style="font-weight:400">
        <span
          style="border-bottom: 2px solid #3999FF;margin-bottom: 5px;padding-right: 3px;padding-bottom:5px"
        >R</span>ECENT ACTIVITIES
      </h2>
      <div class="row py-5 recent-activities-images">
        <carousel autoplay="true" :nav="false" class="col-lg-12 col-xs-12">
          <div class="col-xs-12 col-lg-12">
            <img src="../../static/img/recents/1.jpg" class="img-fluid" />
          </div>
          <div class="col-xs-12 col-lg-12">
            <img src="../../static/img/recents/2.jpg" class="img-fluid" />
          </div>
          <div class="col-xs-12 col-lg-12">
            <img src="../../static/img/recents/3.jpg" class="img-fluid" />
          </div>
          <div class="col-xs-12 col-lg-12">
            <img src="../../static/img/recents/4.jpg" class="img-fluid" />
          </div>
          <div class="col-xs-12 col-lg-12">
            <img src="../../static/img/recents/5.jpg" class="img-fluid" />
          </div>
          <div class="col-xs-12 col-lg-12">
            <img src="../../static/img/recents/6.jpg" class="img-fluid" />
          </div>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import ServicesGrid from "./ServicesGrid";
import carousel from "vue-owl-carousel";

export default {
  components: { ServicesGrid, carousel }
};
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.mt-60 {
  margin-top: 60px;
}

.section-block-grey {
  padding: 90px 0px 130px 0px;
  background-color: #f9f9f9;
}

.card-title {
  font-size: 1.6em;
  font-weight: normal;
  margin: 15px;
}

.serv-section-2 {
  position: relative;
  border: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 10px 30px 0px rgba(50, 50, 50, 0.16);
  border-radius: 5px;
  overflow: hidden;
  padding: 30px;
}

.serv-section-2:before {
  position: absolute;
  top: 0;
  right: 0px;
  z-index: 0;
  content: " ";
  width: 120px;
  height: 120px;
  background: #f5f5f5;
  border-bottom-left-radius: 136px;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
}

.serv-section-2-icon {
  position: absolute;
  top: 18px;
  right: 22px;
  max-width: 100px;
  z-index: 1;
  text-align: center;
}

.serv-section-2-icon i {
  color: #5f27cd;
  font-size: 48px;
  line-height: 65px;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
}

.serv-section-desc {
  position: relative;
}

.serv-section-2 h4 {
  color: #333;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
}

.serv-section-2 h5 {
  color: #333;
  font-size: 17px;
  font-weight: 400;
  line-height: 1;
  margin-top: 5px;
}

.section-heading-line-left {
  content: "";
  display: block;
  width: 100px;
  height: 3px;
  background: #5f27cd;
  border-radius: 25%;
  margin-top: 15px;
  margin-bottom: 5px;
}

.serv-section-2 p {
  margin-top: 25px;
  padding-right: 50px;
}

.serv-section-2:hover .serv-section-2-icon i {
  color: #fff;
}

.serv-section-2:hover:before {
  background: #5f27cd;
}

.clients-title {
  font-size: 28px;
  font-weight: 200;
  color: #777;
  background-color: #f5f5f5;
  margin-top: -2.3rem;
  box-shadow: 1px #bdbbbb;
}
.carousel {
  height: 85vh;
}
.fw_al_007_slide h1 {
  margin: 80px auto;
  font-size: 2.5em;
}

@media screen and (max-width: 800px) {
  .carousel {
    height: 50vh;
  }
  .carousel-item {
    height: 50vh;
  }
  .carousel-item img {
    height: 50vh;
  }
  .fw_al_007_slide {
    margin: auto 50px;
    font-size: 0.5em;
  }
  .recent-activities-images img {
    margin-top: 10px;
  }
  .serv-section-2 {
    margin-top: 10px;
  }
}
</style>
