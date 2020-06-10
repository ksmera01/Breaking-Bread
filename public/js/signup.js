$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("#email-input");
  var passwordInput = $("#password-input");
  var orgTypeInput = $("#orgType-input");
  var orgNameInput = $("#orgName-input");
  var orgAddInput = $("#orgAdd-input");
  var contactNameInput = $("#contactName-input");
  var contactPhoneInput = $("#contactPhone-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      orgType: orgTypeInput.val().trim(),
      orgName: orgNameInput.val().trim(),
      orgAdd: orgAddInput.val().trim(),
      contactName: contactNameInput.val().trim(),
      contactPhone: contactPhoneInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.orgType, userData.orgName, userData.orgAdd, userData.contactName, userData.contactPhone);
    emailInput.val("");
    passwordInput.val("");
    orgTypeInput.val("");
    orgAddInput.val("");
    orgNameInput.val("");
    contactNameInput.val("");
    contactPhoneInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, orgType, orgName, orgAdd, contactName, contactPhone) {
    $.post("/api/signup", {
      email: email,
      password: password,
      orgType: orgType,
      orgName: orgName,
      orgAdd: orgAdd,
      contactName: contactName,
      contactPhone: contactPhone
    })
      .then(function (data) {
        console.log(data);
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
