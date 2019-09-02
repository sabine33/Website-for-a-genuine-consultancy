import sgMail from "@sendgrid/mail";
const API_KEY =
  "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";

sgMail.setApiKey(API_KEY);
const msg = {
  //'info@genuineconsultancy.com.au'
  to: "sabin.khanal.33@gmail.com",
  from: "ak00413@gmail.com",
  subject: "CONTACT US",
  text: `FullName : Sabin Khanal Phone:898989898 , Message: Yo yeuta message ho...`
};

sgMail.send(msg).then(result => {
  alert(result);
}).catch(error => {
  console.log(error)
})
