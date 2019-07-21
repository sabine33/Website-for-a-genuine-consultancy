<template>
  <div>
    <Jumbotron title="About Us" data-aos="zoom-in" />
    <div class="highlight-phone py-5" data-aos="zoom-in">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="intro">
              <p class="lead text-center" style="text-align:justify">
                Since 2016,Genuine Education and Visa Services have been continuously providing the excellent service to clients to fulfill endeavor of living quality life in Australia. We offer great service standards by adhering to the OMARA's code of conduct and comprising the competent and skilled employee.
                <br />
                <br />We provide end-to-end counseling and application management services to students searching for affordable university and college for various course in Diploma, Bachelor, Master. Our expertise includes Migration Service, Course Change, University Change, Visa Change, Family Migration, Skill Assessments, Recognition of Prior Learning(RPL), Professional Year, Health Insurance. Furthermore, we have PTE and NAATI course to help you achieve that extra points for PR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team-boxed" data-aos="zoom-in">
      <div class="container">
        <div class="intro">
          <h2 class="text-center">Our Team</h2>
          <p class="text-center">
            Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum
            nibh
            erat, pellentesque ut laoreet vitae.
          </p>
        </div>
        <div class="row people">
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <img class="rounded-circle" src="static/img/1.jpg" />
              <h3 class="name">Ben Johnson</h3>
              <p class="title">Musician</p>
              <p class="description">
                Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo
                suscipit id. Etiam dictum feugiat tellus, a semper massa.
              </p>
              <!-- <div class="social">
                <a href="#">
                  <i class="fa fa-facebook-official"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </div>-->
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <img class="rounded-circle" src="static/img/2.jpg" />
              <h3 class="name">Emily Clark</h3>
              <p class="title">Artist</p>
              <p class="description">
                Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo
                suscipit id. Etiam dictum feugiat tellus, a semper massa.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <img class="rounded-circle" src="static/img/3.jpg" />
              <h3 class="name">Carl Kent</h3>
              <p class="title">Stylist</p>
              <p class="description">
                Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo
                suscipit id. Etiam dictum feugiat tellus, a semper massa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "./Jumbotron";
export default {
  components: { Jumbotron }
};
</script>




<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
}
.team-boxed .intro {
  font-size: 1.2em;
}
.box {
  font-size: 1.2em;
}
.name {
  font-size: 1.2em;
  color: #ddd;
}
</style>
