<template>
  <div>
    <Jumbotron
      title="Contact Us"
      leadText=" We provide end-to-end counseling and application management services to students searching for affordable university and college for various course in Diploma, Bachelor, Master."
         data-aos="zoom-in"
               style=" background-image: url('../../static/img/banner_contactus.jpg');background-size:cover;background-position:0% 0%"


    />
       <div class="py-5" style="margin-top: 0px;background-color: #EEF4F7;"       data-aos="zoom-in">
        <div class="container my-0">
            <form id="contactForm" action="javascript:void(0);" method="get"><input class="form-control" type="hidden" name="Introduction" value="This email was sent from www.awebsite.com"><input class="form-control" type="hidden" name="subject" value="Awebsite.com Contact Form"><input class="form-control" type="hidden"
                    name="to" value="email@awebsite.com">
                <div class="form-row">
                    <div class="col-md-6">
                        <div id="successfail"></div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-12 col-md-6 px-4" id="message">
                        <!-- <h2 class="h4"><i class="icon ion-ios-email-outline py-2"></i> Contact Us</h2> -->
                        <div class="form-group"><label for="from-name">Name</label><span class="required-input">*</span>
                            <div class="input-group">
                                <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-user-o"></i></span></div><input class="form-control" type="text" id="from-name" required=""></div>
                        </div>
                        <div class="form-group"><label for="from-email">Email</label><span class="required-input">*</span>
                            <div class="input-group">
                                <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-envelope-o"></i></span></div><input class="form-control" type="text" id="from-email" name="email" required="" placeholder="Email Address"></div>
                        </div>
                        <div class="form-row">
                            <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                                <div class="form-group"><label for="from-phone">Phone</label><span class="required-input">*</span>
                                    <div class="input-group">
                                        <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-phone"></i></span></div><input class="form-control" type="text" id="from-phone" name="phone" required="" placeholder="Primary Phone"></div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                                <div class="form-group"><label for="from-calltime">Best Time to Call</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-clock-o"></i></span></div><select class="form-control" id="from-calltime" name="call time"><optgroup label="Best Time to Call"><option value="Morning" selected="">Morning</option><option value="Afternoon">Afternoon</option><option value="Evening">Evening</option></optgroup></select></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group"><label for="from-comments">Comments</label><textarea class="form-control" id="from-comments" name="comments" placeholder="Enter Comments" rows="5"></textarea></div>
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col"><button class="btn btn-primary btn-block" type="reset"><i class="fa fa-undo"></i> Reset</button></div>
                                <div class="col"><button class="btn btn-primary btn-block" type="submit">Submit <i class="fa fa-chevron-circle-right"></i></button></div>
                            </div>
                        </div>
                        <hr class="d-flex d-md-none">

                             <div class="col-12 col-md-8 px-4">
                                                                 <h2 class="h4 my-2"><i class="icon ion-ios-clock-outline"></i> Opening Hours</h2>

   <p>

                                                  09:00 AM - 05:00 PM Monday<br>
09:00 AM - 05:00 PM Tuesday<br>
09:00 AM - 05:00 PM Wednesday<br>
09:00 AM - 05:00 PM Thursday<br>
09:00 AM - 05:00 PM Friday-Saturday<br>
09:00 AM - 05:00 PM Sunday<br></p>
                        </div>
                    </div>
                
                    <div class="col-12 col-md-6 px-4">
                        <h2 class="h4"><i class="icon ion-ios-location-outline py-2"></i>&nbsp;Address</h2>
                        <div class="form-row">
                            <div class="col-12">
                                <div class="static-map py-3"><iframe allowfullscreen="" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC1tTFOMrN3H3lHD9x7mbKI9Zbii5HSOD4+&amp;q=Sydney%2CAustralia&amp;zoom=11" width="100%" height="400"></iframe><a rel="noopener"
                                        href="https://www.google.com/maps/place/Daytona+International+Speedway/@29.1815062,-81.0744275,15z/data=!4m13!1m7!3m6!1s0x88e6d935da1cced3:0xa6b3e1bc0f2fc83a!2s1801+W+International+Speedway+Blvd,+Daytona+Beach,+FL+32114!3b1!8m2!3d29.187028!4d-81.0703076!3m4!1s0x88e6d949a4cb8593:0x1387c6c0b5c8cc97!8m2!3d29.1851681!4d-81.0705292"
                                        target="_blank"> </a></div>
                            </div>
                            <div class="col-sm-6 col-md-12 col-lg-6 py-4">
                                <h2 class="h4 my-2"><i class="icon ion-ios-people-outline"></i> Our Info</h2>
                                <div class="py-2"><span><strong>Name</strong></span></div>
                                <div><span>email@awebsite.com</span></div>
                                <div><span>www.awebsite.com</span></div>
                                <hr class="d-sm-none d-md-block d-lg-none">
                            </div>
                            <div class="col-sm-6 col-md-12 col-lg-6 py-4">
                                <h2 class="h4 my-2"><i class="icon ion-ios-location-outline"></i>&nbsp;Location</h2>
                                <div class="py-2"><span><strong>Office Name</strong></span></div>
                                <div><span>55 Icannot Dr</span></div>
                                <div><span>Daytone Beach, FL 85150</span></div>
                                <div><abbr data-toggle="tooltip" data-placement="top" title="Office Phone: 555-867-5309">O:</abbr> 555-867-5309</div>
                                <hr class="d-sm-none">
                            </div>
                        </div>
                    </div>
                   
                </div>
            </form>
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
