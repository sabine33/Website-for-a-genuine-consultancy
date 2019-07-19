<template>
  <div>
    <div class="index-top-info topbar py-1" style="background-color: rgb(43,99,147);">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6 social-links">
            <div class="float-left">
              <ul>
                <li>
                  <a href="#">
                    <i class="icon ion-social-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icon ion-social-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icon ion-social-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 contact-information">
            <div class="pull-right">
              <span>
                <i class="fa fa-phone"></i>&nbsp;0312 333 22 11
              </span>
              <span>
                <i class="fa fa-envelope"></i>&nbsp;info@genuineconsultancy.au
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-light bt-white navbar-expand-md" id="app-navbar">
      <div class="container">
        <router-link to="/" class="navbar-brand" style="padding:15px 0px">
          <span style="font-weight: bold;font-family:arial;">GENUINE CONSULTANCY</span>
        </router-link>

        <button data-toggle="collapse" data-target="#navcol-1" class="navbar-toggler">
          <span class="sr-only">
            Toggle
            navigation
          </span>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navcol-1" ref="collapse">
          <ul class="nav navbar-nav ml-auto">
            <li role="presentation" class="nav-item">
              <router-link to="/" class="nav-link active">HOME</router-link>
            </li>
            <li role="presentation" class="nav-item">
              <router-link to="/about" class="nav-link">ABOUT US</router-link>
            </li>
            <li role="presentation" class="nav-item">
              <router-link to="/services" class="nav-link">SERVICES</router-link>
            </li>
            <li role="presentation" class="nav-item">
              <router-link to="/courses" class="nav-link">COURSES</router-link>
            </li>
            <li role="presentation" class="nav-item">
              <router-link to="/testimonials" class="nav-link">TESTIMONIALS</router-link>
            </li>
            <li role="presentation" class="nav-item">
              <router-link to="/contact" class="nav-link">CONTACT US</router-link>
            </li>
            <li>
              <b-button
                v-b-modal.modal-prevent-closing
                class="btn btn-secondary navbar-btn"
                @click="onAskQuestion"
              >ASK A QUESTION</b-button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Query"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
        </b-form-group>
        <b-form-group
          :state="nameState"
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      toggledNav: false,
      name: "",
      nameState: null,
      submittedNames: []
    };
  },
  methods: {
    onAskQuestion() {
      this.$refs.collapse.classList.toggle("show");
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid ? "valid" : "invalid";
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  },
  watch: {
    $route() {
      this.$refs.collapse.classList.toggle("show");
    }
  }
};
</script>

<style scoped>
ul li {
  margin-left: 1rem;
}
ul li a {
  font-weight: 400;
}
.topbar {
}
.navbar-btn {
  float: right;
}
</style>
