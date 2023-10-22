// JavaScript for the logo animation
document.addEventListener("DOMContentLoaded", function () {
  const logoContainer = document.getElementById("logo-container");
  const logo = document.getElementById("logo");

  // Hide the logo after animation
  logo.addEventListener("animationend", function () {
    logoContainer.style.opacity = 0;
    setTimeout(function () {
      logoContainer.style.display = "none";
    }, 1000); // Adjust this delay as needed
  });
});
