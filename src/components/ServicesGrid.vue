<template>
  <div>
    <div class="row row-services" style="margin-top:40px;">
      <div class="col-xs-12 col-md-4">
        <div class="card card-services">
          <div class="card-body text-center">
            <img src="../../static/img/icons/migration.png" class="img-responsive" width="80px" />
            <h4 class="card-title">Migration</h4>
            <h6
              class="text-muted card-subtitle my-2"
            >Genuine gives you veritable and straightforward guidance, assists in documentation, makes you clear about every scenario, works sincerely and commits fully to understand each individual application and requirements.</h6>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-4">
        <div class="card card-services">
          <div class="card-body text-center">
            <img src="../../static/img/icons/skill.png" class="img-responsive" width="80px" />

            <!-- <i class="fas fa-globe fa-3x py-2"></i> -->
            <h4 class="card-title" style="font-size:1.6em;">Skill Assesment</h4>
            <h6
              class="text-muted card-subtitle my-3"
            >To make sure that you meet the requirement of the occupation that you intend to involve you need to show the proof that you acquire the sufficient knowledge, qualified and experienced.</h6>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-4">
        <div class="card card-services">
          <div class="card-body text-center">
            <img
              src="../../static/img/icons/course_offered.png"
              class="img-responsive"
              width="80px"
            />
            <h4 class="card-title" style="font-size:1.6em;">Different Courses</h4>
            <h6
              class="text-muted card-subtitle my-3"
            >Different courses like NATI , PTE , RPL have been offered by genuine to make you ready .</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="row row-services mt-5">
      <div class="col-xs-12 col-md-4">
        <div class="card card-services">
          <div class="card-body text-center">
            <img
              src="../../static/img/icons/health_insurance.png"
              class="img-responsive"
              width="80px"
            />
            <h4 class="card-title" style="font-size:1.6em;">Overseas Health Insurance</h4>
            <h6 class="text-muted card-subtitle my-3">
              Concerning healthcare, getting an OSHC for Australia is as important as it gets.
              Compare and buy between different plans and know what you pay for, get on the spot quotes etc. depending on the type of your visa cover.
            </h6>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-md-4">
        <div class="card card-services">
          <div class="card-body text-center">
            <img src="../../static/img/icons/course_change.png" class="img-responsive" width="80px" />
            <h4 class="card-title" style="font-size:1.6em;">Course Change</h4>
            <h6
              class="text-muted card-subtitle my-3"
            >Different courses like NATI , PTE , RPL have been offered by genuine to make you ready .</h6>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-4">
        <div class="card card-services">
          <div class="card-body text-center">
            <img
              src="../../static/img/icons/professional_year.png"
              class="img-responsive"
              width="80px"
            />
            <h4 class="card-title" style="font-size:1.6em;">Professional Year</h4>
            <h6 class="text-muted card-subtitle my-3">
              Concerning healthcare, getting an OSHC for Australia is as important as it gets.
              Compare and buy between different plans and know what you pay for, get on the spot quotes etc. depending on the type of your visa cover.
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  min-height: 350px;
  max-height: 350px;
}
.card-body {
  transition: color 0.25s;
}
.card-body:hover {
  /* box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.1); */

  /* box-shadow: 5px 5px 5px 5px #888888; */
}
.card-subtitle {
  font-size: 1em;
  font-weight: 100;
  line-height: inherit;
}

.card::before,
.card::after {
  border: 2px solid transparent;
  width: 0;
  height: 0;
}
.card::before {
  top: 0;
  left: 0;
}
.card::after {
  bottom: 0;
  right: 0;
}
.card:hover {
  color: #05a8f3;
}
.card:hover::before,
.card:hover::after {
  width: 100%;
  height: 100%;
}
.card:hover::before {
  border-top-color: #05a8f3;
  border-right-color: #05a8f3;
  transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
}
.card:hover::after {
  border-bottom-color: #05a8f3;
  border-left-color: #05a8f3;
  transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s,
    height 0.25s ease-out 0.75s;
}
</style>
