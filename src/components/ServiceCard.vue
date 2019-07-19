<template>
  <div class="mx-5">
    <div class="card">
      <div class="card-header">
        <ul class="nav nav-tabs justify-content-center" role="tablist">
          <!-- data-background-color="orange"-->
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#pte" role="tab">PTE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#naati" role="tab">NAATI</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#migration" role="tab">MIGRATION</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              href="#univ_change"
              role="tab"
            >COLLEGE UNIV. CHANGE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#prof_year" role="tab">PROFESSIONAL YEAR</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#rpl" role="tab">RPL</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#skill_assesment" role="tab">SKILL ASSESMENT</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <!-- Tab panes -->
        <div class="tab-content text-center">
          <div class="tab-pane active" id="pte" role="tabpanel">
            <p>
              Pearson Test of English Academic commonly known as PTE is language test to assess non-native English speakers ability who are seeking to study or work. Knowing that if you wish to get enroll for this course we offer the fantastic teaching environment.
              <br />
            </p>
            <div class="text-left py-2">
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
          <div class="tab-pane" id="naati" role="tabpanel">
            <p>
              National Accreditation Authority for Translators and Interpreters commonly known as NAATI adds extra points for PR and makes you confident as translator and interpreter accredited by Credentialed Community Language (CCL).
              The course can land you off good job at various organizations like government agencies, airport, hospitals, law firms and many more.
              <br />So, why wait? Let's begin the venture and start the course earlier.
            </p>
            <div class="text-left py-2">
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
          <div class="tab-pane" id="migration" role="tabpanel">
            <p>
              It's not an issue to have problem while applying for the study, live or work visa. Surely it involves the tedious and confusing work to go through multiple steps and keep the track of the process while doing the visa job. To get out of those nightmares we are always here to make you sit back and smile while we keep you inform about stage of application and not long wait to CONGRATS!!! with successful letter from Australian Home Affairs.
              <br />Genuine gives you veritable and straightforward guidance, assists in documentation, makes you clear about every scenario, works sincerely and commits fully to understand each individual application and requirements. Don't worry about frequent regulatory changes our agents are well-informed and up to date with the instant change in rules and laws. We do provide the authentic service on student visa, work visa, family migration, visitor visa as well as change of the current visa to the another one.
            </p>
          </div>
          <div class="tab-pane" id="univ_change" role="tabpanel">
            <p>
              Don't worry for having the change of mind, financial problem and difficulty in understanding commenced course. There is always the opportunity to change your course and shift to next one. In some case even your unit credit gets transferred making your life easy. Need guidance on the way then don't hesitate to be on the way with us. Dedicated team is ready to serve you by understanding your need, skill, degree and give the best advice to work upon. Over 1500 students are satisfied with us for changing their initial course to next like Cookery, Hospitality, IT, Engineering, Nursing, Accounting.
              <br />
              <br />Digging up the reputed, affordable, matching university is our job, you have some free time till new study period begins.
            </p>
          </div>
          <div class="tab-pane" id="prof_year" role="tabpanel">
            <p>
              The program builds you up professionally and opportune to acquire the industry level experience. This is suitable for student of Engineering/IT/Accounting to undertake and get feed with the knowledge to boost your career. The 44 weeks program comprising of 12 weeks of internship lets you learn how to cope with workplace environment and communicate efficiently.
              <br />
              <br />Get counseled by our enthusiastic team who help you choose the best firm that suits your interest and enhance your capabilities. Genuine wishes you all the best.
            </p>
          </div>
          <div class="tab-pane" id="rpl" role="tabpanel">
            <p>Recognition of Prior Learning is an assessment process which verifies relevant prior learning to decide the credit outcomes of an individual application for credit. This makes you easy to complete the course you have been doing. Yes, you can get marked with those precious past learning outcome to fruitful result. Be smart, recall your valuable time and let us know. Everybody's documents get thoroughly verified and managed to gain RPL credit.</p>
          </div>
          <div class="tab-pane" id="skill_assesment" role="tabpanel">
            <p>To make sure that you meet the requirement of the occupation that you intend to involve you need to show the proof that you acquire the sufficient knowledge, qualified and experienced. Guiding you to get your skill be evaluated correctly we give every second fully dedicated with the every eye on detail. Let not get your single gain on vain, we assure to make it count and lay you on the door of job that you nominated.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tab-pane {
  min-height: 50vh;
}
button,
input {
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
}

a {
  color: #f96332;
}

a:hover,
a:focus {
  color: #f96332;
}

p {
  line-height: 1.61em;
  font-weight: 300;
  font-size: 1.2em;
}

.category {
  text-transform: capitalize;
  font-weight: 700;
  color: #9a9a9a;
}

.nav-item .nav-link,
.nav-tabs .nav-link {
  -webkit-transition: all 300ms ease 0s;
  -moz-transition: all 300ms ease 0s;
  -o-transition: all 300ms ease 0s;
  -ms-transition: all 300ms ease 0s;
  transition: all 300ms ease 0s;
}

.card a {
  -webkit-transition: all 150ms ease 0s;
  -moz-transition: all 150ms ease 0s;
  -o-transition: all 150ms ease 0s;
  -ms-transition: all 150ms ease 0s;
  transition: all 150ms ease 0s;
}

[data-toggle="collapse"][data-parent="#accordion"] i {
  -webkit-transition: transform 150ms ease 0s;
  -moz-transition: transform 150ms ease 0s;
  -o-transition: transform 150ms ease 0s;
  -ms-transition: all 150ms ease 0s;
  transition: transform 150ms ease 0s;
}

[data-toggle="collapse"][data-parent="#accordion"][aria-expanded="true"] i {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.now-ui-icons {
  display: inline-block;
  font: normal normal normal 14px/1 "Nucleo Outline";
  font-size: inherit;
  speak: none;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@-webkit-keyframes nc-icon-spin {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes nc-icon-spin {
  0% {
    -moz-transform: rotate(0deg);
  }

  100% {
    -moz-transform: rotate(360deg);
  }
}

@keyframes nc-icon-spin {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.now-ui-icons.objects_umbrella-13:before {
  content: "\ea5f";
}

.now-ui-icons.shopping_cart-simple:before {
  content: "\ea1d";
}

.now-ui-icons.shopping_shop:before {
  content: "\ea50";
}

.now-ui-icons.ui-2_settings-90:before {
  content: "\ea4b";
}

.nav-tabs {
  border: 0;
  padding: 15px 0.7rem;
}

.nav-tabs:not(.nav-tabs-neutral) > .nav-item > .nav-link.active {
  box-shadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.3);
}

.card .nav-tabs {
  border-top-right-radius: 0.1875rem;
  border-top-left-radius: 0.1875rem;
}

.nav-tabs > .nav-item > .nav-link {
  color: #888888;
  margin: 0;
  margin-right: 5px;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 30px;
  font-size: 1.2em;
  font-weight: 400;
  padding: 11px 23px;
}

.nav-tabs > .nav-item > .nav-link:hover {
  background-color: transparent;
}

.nav-tabs > .nav-item > .nav-link.active {
  background-color: #444;
  border-radius: 30px;
  color: #ffffff;
}

.nav-tabs > .nav-item > .nav-link i.now-ui-icons {
  font-size: 1.5em;
  position: relative;
  top: 1px;
  margin-right: 3px;
}

.nav-tabs.nav-tabs-neutral > .nav-item > .nav-link {
  color: #ffffff;
}

.nav-tabs.nav-tabs-neutral > .nav-item > .nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.card {
  border: 0;
  border-radius: 0.1875rem;
  display: inline-block;
  position: relative;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
}

.card .card-header {
  background-color: transparent;
  border-bottom: 0;
  background-color: transparent;
  border-radius: 0;
  padding: 0;
}

.card[data-background-color="orange"] {
  background-color: #f96332;
}

.card[data-background-color="red"] {
  background-color: #ff3636;
}

.card[data-background-color="yellow"] {
  background-color: #ffb236;
}

.card[data-background-color="blue"] {
  background-color: #2ca8ff;
}

.card[data-background-color="green"] {
  background-color: #15b60d;
}

[data-background-color="orange"] {
  background-color: #e95e38;
}

[data-background-color="black"] {
  background-color: #2c2c2c;
}

[data-background-color]:not([data-background-color="gray"]) {
  color: #ffffff;
}

[data-background-color]:not([data-background-color="gray"]) p {
  color: #ffffff;
}

[data-background-color]:not([data-background-color="gray"])
  a:not(.btn):not(.dropdown-item) {
  color: #ffffff;
}

[data-background-color]:not([data-background-color="gray"])
  .nav-tabs
  > .nav-item
  > .nav-link
  i.now-ui-icons {
  color: #ffffff;
}

@font-face {
  font-family: "Nucleo Outline";
  src: url("https://github.com/creativetimofficial/now-ui-kit/blob/master/assets/fonts/nucleo-outline.eot");
  src: url("https://github.com/creativetimofficial/now-ui-kit/blob/master/assets/fonts/nucleo-outline.eot")
    format("embedded-opentype");
  src: url("https://raw.githack.com/creativetimofficial/now-ui-kit/master/assets/fonts/nucleo-outline.woff2");
  font-weight: normal;
  font-style: normal;
}

.now-ui-icons {
  display: inline-block;
  font: normal normal normal 14px/1 "Nucleo Outline";
  font-size: inherit;
  speak: none;
  text-transform: none;
  /* Better Font Rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

footer {
  margin-top: 50px;
  color: #555;
  background: #fff;
  padding: 25px;
  font-weight: 300;
  background: #f7f7f7;
}
.footer p {
  margin-bottom: 0;
}
footer p a {
  color: #555;
  font-weight: 400;
}

footer p a:hover {
  color: #e86c42;
}

@media screen and (max-width: 768px) {
  .nav-tabs {
    display: inline-block;
    width: 100%;
    padding-left: 100px;
    padding-right: 100px;
    text-align: center;
  }

  .nav-tabs .nav-item > .nav-link {
    margin-bottom: 5px;
  }
}
</style>
