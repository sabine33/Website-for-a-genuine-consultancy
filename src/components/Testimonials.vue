<template>
  <div>
    <Jumbotron
      title="Testimonials"
      leadText="Our customers love us! Read what they have to say below. "
      data-aos="fade-up"
    />
    <div class="testimonials-clean" data-aos="fade-up">
      <div class="container">
        <div class="row people">
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <p class="description">
                Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
              </p>
            </div>
            <div class="author">
              <img class="rounded-circle" src="static/img/1.jpg" />
              <h5 class="name">Jon Snow</h5>
              <p class="title">CEO of Company Inc.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <p class="description">
                Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et
                interdum justo suscipit id.
              </p>
            </div>
            <div class="author">
              <img class="rounded-circle" src="static/img/3.jpg" />
              <h5 class="name">Tyrion Lannister</h5>
              <p class="title">Founder of Style Co.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="box">
              <p class="description">
                Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis
                leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.
              </p>
            </div>
            <div class="author">
              <img class="rounded-circle" src="static/img/2.jpg" />
              <h5 class="name">Daenerys Targareyan</h5>
              <p class="title">Owner of Creative Ltd.</p>
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

<style>
</style>
