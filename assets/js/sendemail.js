function sendMail(contactForm) {
   emailjs.send("gmail", "nick", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "project_request": contactForm.projectsummary.value
   })
      .then(
         function (respone) {
            console.log("SUCCESS", repsonse);
         },
         function (error) {
            console.log("FAILED", error);
         });
   return false;
}