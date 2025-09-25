// Find the button on the page
const cvButton = document.getElementById("cvbutton");

// Add an event listener for when it’s clicked
cvButton.addEventListener("click", function () {
  // Open the link in a new tab
  window.open(
    "https://docs.google.com/document/d/1On4Ykc8OQc1DClL5cLlFd9t1Vk4bnVyNG1KrRMDnm-Q/edit?usp=sharing",
    "_blank"
  );
});
