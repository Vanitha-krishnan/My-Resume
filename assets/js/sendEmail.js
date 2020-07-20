function sendMail(contactForm) {
    emailjs.send("muthuvanitha_gmail_com", "vanitha", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    },"user_5KExuU3XUBpBZd0ZMo3JQ")
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}