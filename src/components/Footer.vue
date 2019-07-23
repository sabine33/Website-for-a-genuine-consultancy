<template>
  <div class="footer-dark">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-4 item text-left">
            <ul>
              <li class="py-1">
                <router-link to="/">Home</router-link>
              </li>
              <li class="py-1">
                <router-link to="/about">About Us</router-link>
              </li>
              <li class="py-1">
                <router-link to="/courses">Courses</router-link>
              </li>
              <li class="py-1">
                <router-link to="/contact">Contact Us</router-link>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-md-4 item social text-center d-flex justify-content-center">
            <ul style="text-align: left">
              <li class="py-1">
                <a href="#">
                  <i class="fa fa-phone" style="font-size:1em;"></i>
                  <span>(03) 9670 1660</span>
                </a>
              </li>
              <li class="py-1">
                <a href="#">
                  <i class="fa fa-envelope" style="font-size:1em;"></i>
                  <span>info@genuineconsultancy.com.au</span>
                </a>
              </li>
              <li class="py-1">
                <a href="#">
                  <i class="fa fa-map" style="font-size:1em;"></i>
                  <span class>
                    Level 2, Suite 2.14, 365 Little Collins street
                    <span
                      class="px-1"
                    >(288.78 mi) Melbourne, Victoria, Australia 3000</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div
            class="col-xs-12 col-md-4 item social text-center d-flex justify-content-center"
            style
          >
            <ul style="text-align: center;display:flex;justify-content:center;">
              <li class="px-3">
                <a href="#">
                  <i class="fab fa-facebook fa-3x"></i>
                </a>
              </li>
              <li class="px-3">
                <a href="#">
                  <i class="fab fa-twitter fa-3x"></i>
                </a>
              </li>
              <li class="px-3">
                <a href="#">
                  <i class="fab fa-instagram fa-3x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p class="copyright">Genuine Consultancy © 2019</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* .social ul li a i {
  font-size: 1.5em;
} */
.footer-dark {
  padding: 40px 0px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
}
.social ul li a span {
  font-size: 1em;
}
</style>
