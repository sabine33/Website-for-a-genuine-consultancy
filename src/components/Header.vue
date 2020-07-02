<template>
  <div>
    <div class="index-top-info topbar py-1" style="background-color: rgb(43,99,147);">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6 social-links">
            <div class="float-left">
              <ul>
                <li>
                  <a href="https://www.facebook.com/GenuineEducationAustralia/">
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
                <i class="fa fa-phone"></i>&nbsp;(03) 9670 1660
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
        <router-link to="/" class="navbar-brand" style="padding:0px 0px">
          <img src="../../static/img/logo.png" width="200px" height="70px" />
          <!-- <span style="font-weight: bold;font-family:arial;">GENUINE CONSULTANCY</span> -->
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
              <router-link to="/" class="nav-link">HOME</router-link>
            </li>
            <li role="presentation" class="nav-item">
              <router-link to="/about" class="nav-link">ABOUT US</router-link>
            </li>
            <li class="nav-item services_menu" role="presentation">
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >SERVICES</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <router-link class="dropdown-item" to="/services/migration">Migration</router-link>
                  <router-link
                    class="dropdown-item"
                    to="/services/university_change"
                  >Course/University Change</router-link>
                  <router-link
                    class="dropdown-item"
                    to="/services/professional_year"
                  >Professional Year</router-link>
                  <router-link class="dropdown-item" to="/services/rpl">RPL</router-link>
                  <router-link class="dropdown-item" to="/services/skill_assesment">Skill Assesment</router-link>
                  <router-link
                    class="dropdown-item"
                    to="/services/health_insurance"
                  >Health Insurance</router-link>
                </div>
              </div>
            </li>
            <!-- <li role="presentation" class="nav-item">
              <router-link to="/services" class="nav-link">SERVICES</router-link>
            </li>-->
            <li role="presentation" class="nav-item">
              <router-link to="/courses" class="nav-link">NAATI/PTE</router-link>
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
      <div>
        <b-form-group label="Name" label-for="name-input" invalid-feedback="Name is required">
          <b-form-input id="name-input" v-model="form.fullName" required></b-form-input>
        </b-form-group>
        <b-form-group label="Email" label-for="email-input" invalid-feedback="Email is required">
          <b-form-input id="email-input" v-model="form.email" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group
          label="Message"
          label-for="message-input"
          invalid-feedback="Message is required"
        >
          <b-form-textarea
            id="message"
            v-model="form.message"
            placeholder="Enter your message..."
            rows="3"
            max-rows="3"
            required
          ></b-form-textarea>
        </b-form-group>
      </div>
    </b-modal>
  </div>
</template>
 
<script>
import sgMail from "@sendgrid/mail";
import axios from "axios";
import { SendMail } from "../SendMail";
export default {
  data() {
    return {
      toggledNav: false,
      form: { fullName: "", email: "", message: "" },
      credentials: {}
    };
  },
  methods: {
    onAskQuestion() {
      this.$refs.collapse.classList.toggle("show");
    },
    checkFormValidity() {
      return (
        this.form.email.length > 5 &&
        this.form.email.indexOf("@") > 0 &&
        this.form.message.length > 10 &&
        this.form.fullName.length > 2
      );
    },
    resetModal() {
      this.form.fullName = "";
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        alert("Please fill the details carefully");
      } else {
        let message = {
          name: this.form.fullName,
          email: this.form.email,
          message: this.form.message
        };
        let msg = `${message.name} said ${message.message}`;
        SendMail(message.email, "Asking a question", message.message);
        this.$refs.modal.hide();
      }
    },
    sendMail() {}
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

.navbar-btn {
  float: right;
}

.nav li a:hover {
  border-bottom: 4px solid #7337f4;
}

/* .router-link-active {
  font-weight: normal;
} */
.services_menu,
.dropdown button {
  color: rgba(0, 0, 0, 0.5) !important;
}
</style>
