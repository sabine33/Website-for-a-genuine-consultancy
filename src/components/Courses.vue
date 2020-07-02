<template>
  <div>
    <Jumbotron
      title="Our Courses"
      leadText="Many people have arrived Australia with the dream of getting Permanent Residency here for better future and lifestyle. On the roadway to achieve this you need to gain a point barrier set by Australian government. If you need to get the enrolment in the university then also you need to present the score you obtained in english language standard maintained here in Australia. 
Are you overwhelmed with this? Well don't worry we offer you the renowned course for this. PTE and NAATI."
      data-aos="zoom-in"
      style=" background-image: url('../../static/img/banner_courses.jpg');background-size:cover;background-position:0% 0%"
    />
    <div class="container my-4">
      <div class="row my-2">
        <div class="card">
          <div class="row">
            <div class="col-lg-7 px-4">
              <h2 class="text-bold text-left">
                <span style="border-bottom:2px solid #3999FF;padding-bottom:5px;">P</span>TE
              </h2>
              <p class="text-justify my-3">
                Pearson Test of English Academic commonly known as PTE is language test to assess non-native English speakers ability who are seeking to study or work. Knowing that if you wish to get enroll for this course we offer the fantastic teaching environment.
                <br />
              </p>
              <div class="text-justify py-2">
                <h5>Why choose us?</h5>
                <br />
                <ul>
                  <li>Structured course content</li>
                  <li>Updated teaching material to meet the latest PTE test requirement</li>
                  <li>Flexible class hour</li>
                  <li>Friendly tutor to assists at each minor problem you get</li>
                  <li>Provides free mock test every week</li>
                  <li>Rewards for coming in group</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-5 my-auto">
              <img src="../../static/img/services/pte.jpg" class="img-responsive" width="70%" />
            </div>
          </div>
          <div class="bottom-box mx-auto my-4"></div>
        </div>
      </div>
      <div class="row">
        <div class="card">
          <div class="row">
            <div class="col-lg-5 my-auto">
              <img src="../../static/img/services/naati.jpg" class="img-responsive" width="70%" />
            </div>
            <div class="col-lg-7 px-2">
              <h2 class="text-bold text-left">
                <span style="border-bottom:2px solid #3999FF;padding-bottom:5px;">N</span>AATI
              </h2>
              <p class="text-justify my-3">
                National Accreditation Authority for Translators and Interpreters commonly known as NAATI adds extra points for PR and makes you confident as translator and interpreter accredited by Credentialed Community Language (CCL).
                <br />The course can land you off good job at various organizations like government agencies, airport, hospitals, law firms and many more.
                <br />So, why wait? Let's begin the venture and start the course earlier.
              </p>
              <div class="text-justify py-2">
                <h5>Why choose us?</h5>
                <br />
                <ul>
                  <li>Structured and well maintained course content</li>
                  <li>Up to date teaching materials</li>
                  <li>Flexible class hour</li>
                  <li>Friendly tutor to assists at each minor problem you get</li>
                  <li>Provides free mock test and practice materials</li>
                  <li>Rewards for coming in group</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "./Jumbotron";
import ServiceCard from "./ServiceCard";
export default {
  name: "Courses",
  components: { Jumbotron, ServiceCard }
};
</script>

<style scoped>
.card {
  position: relative;
  text-align: center;
  margin-bottom: 50px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border: 0px;
  padding: 0px 20px;
  /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16); */
  min-height: 350px;
}
.card h2 {
  color: #05a8f3;
}
.bottom-box {
  /* box-shadow: 1px 1px 1px 1px #3999ff; */
  width: 40%;
  height: 1px;
  background-color: #3999ff;
}
</style>
