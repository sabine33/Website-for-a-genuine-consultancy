<template>
  <div>
    <div class="row my-5" id="migration" v-if="name=='migration'">
      <div class="cards col-lg-12">
        <div class="row">
          <div class="col-lg-7 px-5 my-3">
            <h2 class="text-bold text-left" style="color:#1C9DD4">
              <span style="border-bottom:2px solid #1C9DD4;padding-bottom:5px;">M</span>igration
            </h2>
            <p class="text-justify my-4">
              It's not an issue to have problem while applying for the study, live or work visa. Surely it involves the tedious and confusing work to go through multiple steps and keep the track of the process while doing the visa job. To get out of those nightmares we are always here to make you sit back and smile while we keep you inform about stage of application and not long wait to CONGRATS!!! with successful letter from Australian Home Affairs.
              <br />Genuine gives you veritable and straightforward guidance, assists in documentation, makes you clear about every scenario, works sincerely and commits fully to understand each individual application and requirements. Don't worry about frequent regulatory changes our agents are well-informed and up to date with the instant change in rules and laws.
              <br />We do provide the authentic service on student visa, work visa, family migration, visitor visa as well as change of the current visa to the another one.
              <br />
            </p>
          </div>
          <div class="col-lg-5 my-auto text-center">
            <img src="../../static/img/services/migration.jpg" class="img-responsive" width="90%" />
          </div>
        </div>
        <div class="bottom-box mx-auto my-4"></div>
      </div>
    </div>
    <div class="row my-5" id="course_university_change" v-if="name=='university_change'">
      <div class="cards col-lg-12">
        <div class="row">
          <div class="col-lg-7 px-5 my-3">
            <h2 class="text-bold text-left" style="color:#1C9DD4">
              <span style="border-bottom:2px solid #1C9DD4;padding-bottom:5px;">C</span>ourse/University change
            </h2>
            <p class="text-justify my-4">
              Don't worry for having the change of mind, financial problem and difficulty in understanding commenced course. There is always the opportunity to change your course and shift to next one. In some case even your unit credit gets transferred making your life easy. Need guidance on the way then don't hesitate to be on the way with us. Dedicated team is ready to serve you by understanding your need, skill, degree and give the best advice to work upon. Over 1500 students are satisfied with us for changing their initial course to next like Cookery, Hospitality, IT, Engineering, Nursing, Accounting.
              <br />Digging up the reputed, affordable, matching university is our job, you have some free time till new study period begins.
            </p>
          </div>
          <div class="col-lg-5 my-auto text-center">
            <img
              src="../../static/img/services/course_change.jpg"
              class="img-responsive"
              width="90%"
            />
          </div>
        </div>
        <div class="bottom-box mx-auto my-4"></div>
      </div>
    </div>
    <div class="row my-5" id="professional_year" v-if="name=='professional_year'">
      <div class="cards col-lg-12">
        <div class="row">
          <div class="col-lg-7 px-5 my-3">
            <h2 class="text-bold text-left" style="color:#1C9DD4">
              <span style="border-bottom:2px solid #1C9DD4;padding-bottom:5px;">P</span>rofessional Year
            </h2>
            <p class="text-justify my-4">
              The program builds you up professionally and opportune to acquire the industry level experience. This is suitable for student of Engineering/IT/Accounting to undertake and get feed with the knowledge to boost your career. The 44 weeks program comprising of 12 weeks of internship lets you learn how to cope with workplace environment and communicate efficiently.
              <br />Get counseled by our enthusiastic team who help you choose the best firm that suits your interest and enhance your capabilities. Genuine wishes you all the best.
            </p>
          </div>
          <div class="col-lg-5 my-auto text-center">
            <img
              src="../../static/img/services/professional_year.jpg"
              class="img-responsive"
              width="90%"
            />
          </div>
        </div>
        <div class="bottom-box mx-auto my-4"></div>
      </div>
    </div>
    <div class="row my-5" id="rpl" v-if="name=='rpl'">
      <div class="cards col-lg-12">
        <div class="row">
          <div class="col-lg-7 px-5 my-3">
            <h2 class="text-bold text-left" style="color:#1C9DD4">
              <span style="border-bottom:2px solid #1C9DD4;padding-bottom:5px;">R</span>PL
            </h2>
            <p
              class="text-justify my-4"
            >Recognition of Prior Learning is an assessment process which verifies relevant prior learning to decide the credit outcomes of an individual application for credit. This makes you easy to complete the course you have been doing. Yes, you can get marked with those precious past learning outcome to fruitful result. Be smart, recall your valuable time and let us know. Everybody's documents get thoroughly verified and managed to gain RPL credit.</p>
          </div>
          <div class="col-lg-5 my-auto text-center">
            <img src="../../static/img/services/rpl.jpg" class="img-responsive" width="90%" />
          </div>
        </div>
        <div class="bottom-box mx-auto my-4"></div>
      </div>
    </div>

    <div class="row my-5" id="skill_assesment" v-if="name=='skill_assesment'">
      <div class="cards col-lg-12">
        <div class="row">
          <div class="col-lg-7 px-5 my-3">
            <h2 class="text-bold text-left" style="color:#1C9DD4">
              <span style="border-bottom:2px solid #1C9DD4;padding-bottom:5px;">S</span>kill Assesment
            </h2>
            <p
              class="text-justify my-4"
            >To make sure that you meet the requirement of the occupation that you intend to involve you need to show the proof that you acquire the sufficient knowledge, qualified and experienced. Guiding you to get your skill be evaluated correctly we give every second fully dedicated with the every eye on detail. Let not get your single gain on vain, we assure to make it count and lay you on the door of job that you nominated.</p>
          </div>
          <div class="col-lg-5 my-auto text-center">
            <img
              src="../../static/img/services/skill_assesment.jpg"
              class="img-responsive"
              width="90%"
            />
          </div>
        </div>
        <div class="bottom-box mx-auto my-4"></div>
      </div>
    </div>

    <div class="row my-5" id="health_insurance" v-if="name=='health_insurance'">
      <div class="cards col-lg-12">
        <div class="row">
          <div class="col-lg-7 px-5 my-3">
            <h2 class="text-bold text-left" style="color:#1C9DD4">
              <span style="border-bottom:2px solid #1C9DD4;padding-bottom:5px;">H</span>ealth Insurance
            </h2>
            <p
              class="text-justify my-4"
            >It's natural to get sick or caught by diseases, but we even have something pleasurable for you to hear. Guess what? Right we do benefit you with the calm health insurance facility. No need to panic thinking to get in disaster of health loan, working out to make sure you get the right health insurance and let you have sound sleep is our responsibility.</p>
          </div>
          <div class="col-lg-5 my-auto text-center">
            <img
              src="../../static/img/services/health_insurance.jpg"
              class="img-responsive"
              width="90%"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServiceElement",
  props: ["name"],
  data() {
    return {
      //   name: this.$route.params.name
    };
  },
  mounted() {},
  updated() {
    // this.name = this.$route.params.name;
  },
  watch: {
    $route(to, from) {
      alert(JSON.stringify(to));
    }
  }
};
</script>