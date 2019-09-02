import sgMail from "@sendgrid/mail"
export const SendMail = function (fromMail, subject, message) {
  const API_KEY =
    "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";
  sgMail.setApiKey(API_KEY);
  const msg = {
    //'info@genuineconsultancy.com.au'
    to: "sabin.khanal.33@gmail.com",
    from: fromMail,
    subject: subject,
    text: message
  };
  sgMail
    .send(msg)
    .then(result => {
      alert(JSON.stringify(result));
    })
    .catch(error => {
      alert(JSON.stringify(error));
    });

}
