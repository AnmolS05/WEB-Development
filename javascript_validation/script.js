document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let isValid = true;

  // Reset errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMsg").textContent = "";

  // Name check
  if (name === "") {
    document.getElementById("nameError").textContent = "Name cannot be empty!";
    isValid = false;
  }

  // Email check
  let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email!";
    isValid = false;
  }

  // Message check
  if (message === "") {
    document.getElementById("messageError").textContent = "Message cannot be empty!";
    isValid = false;
  }

  // Success
  if (isValid) {
    document.getElementById("successMsg").textContent = "Form submitted successfully 🎉 ";
  }
});
