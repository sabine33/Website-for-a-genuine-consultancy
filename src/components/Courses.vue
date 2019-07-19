<template>
  <div>
    <Jumbotron
      title="Our Courses"
      leadText="Many people have arrived Australia with the dream of getting Permanent Residency here for better future and lifestyle. On the roadway to achieve this you need to gain a point barrier set by Australian government. If you need to get the enrolment in the university then also you need to present the score you obtained in
 english language standard maintained here in Australia.  Are you overwhelmed with this? Well don't worry we offer you the renowned course for this. PTE and NAATI."
    />
    <ServiceCard />
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

<style>
</style>
