<template>
  <div>
    <Jumbotron
      title="About Us"
      data-aos="zoom-in"
      style=" background-image: url('../../static/img/banner_aboutus.jpg');background-size:cover;background-position:center;"
    />
    <div class="highlight-phone py-5" data-aos="zoom-in">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="intro">
              <p class="lead" style="text-align:justify">
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
          <p class="text-center">Our team of professionals is ready to help you in your every steps.</p>
        </div>
        <div class="row people">
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <img class="rounded-circle" src="static/img/teams/suman_deuja.jpg" />
              <h3 class="name">Suman Deuja</h3>
              <p class="title">Managing Director</p>
              <div class="description">
                <p style>
                  REGISTERED MIGRATION AGENT (MARN No:1685956)
                  <br />QEAC No:L300
                  <br />MIA: 17219
                  <br />Professional Trainer:TAE40116
                  <br />Master of Laws,Bachelor of Business Administration, Graduate Diploma of Migration
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <img class="rounded-circle" src="static/img/teams/sambridhi_rijal.jpg" />
              <h3 class="name">Sambridhi Rijal</h3>
              <p
                class="title"
              >Business Development Manager/Education Consultant /NAATI (Nepali) Instructor</p>
              <div class="description">
                <p style>
                  QEAC No:Q530
                  <br />Professional Trainer:TAE40116
                  <br />Master of Arts in Political Science
                  <br />Master of Arts in Sociology
                  <br />Bachelor of Arts in Sociology / Major English
                </p>
              </div>
            </div>
          </div>
          <!--box start-->
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <img class="rounded-circle" src="static/img/teams/laxmi_khanal.jpg" />
              <h3 class="name">Laxmi Khanal</h3>
              <p class="title">International Director/Education Consultant</p>
              <div class="description">
                <p>
                  QEAC No:Q547
                  <br />MOE Education Counselor:2246
                  <br />Master of Information Technology, Bachelor of Business
                </p>
              </div>
            </div>
          </div>
          <!--box end-->

          <!--box start-->
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <img class="rounded-circle" src="static/img/teams/shesh_dahal.jpg" />
              <h3 class="name">Shesh Dahal</h3>
              <p class="title">Accountant</p>
              <div class="description">
                <p>MPA/MBA, Bachelor of Hotel Management</p>
              </div>
            </div>
          </div>
          <!--box end-->

          <!--box start-->
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <img class="rounded-circle" src="static/img/teams/saugat_karki.jpg" />
              <h3 class="name">Saugat Karki</h3>
              <p class="title">Education Counselor / PTE Instructor</p>
              <div class="description">
                <p>Bachelor of Accounting</p>
              </div>
            </div>
          </div>
          <!--box end-->
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
  /* min-height: 520px; */
  height: 520px;
  max-height: 520px;
}
.box .name {
  font-size: 1.1em;
  color: #222;
  text-transform: uppercase;
}
.box .name:hover {
  color: blueviolet;
}
.box .title {
  color: #555;
  padding-top: 20px;
}

.box .description p {
  color: #000;
  font-size: 1em;
  text-align: center justify;
  font-weight: 400;
}
.box img {
  max-height: 150px;
  width: 100%;
  object-fit: cover;
}
.box img:hover {
  transform: scale(1.2);
}
</style>
