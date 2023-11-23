"use strict";

function PageTransitions() {
  var sectBtns = document.querySelectorAll('.control');
  var allSections = document.querySelector('.main-content');
  var sections = document.querySelectorAll('.section');
  sectBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // remove selected from the other buttons
      sectBtns.forEach(function (otherBtn) {
        otherBtn.classList.remove('active-btn');
      });
      this.classList.add('active-btn'); // hide sections

      sections.forEach(function (section) {
        section.classList.remove('active');
      });
      var id = this.dataset.id;
      var element = document.getElementById(id);
      element.classList.add('active');
    });
  }); // Set the initial active state for the first button and section

  sectBtns[0].classList.add('active-btn');
  sections[0].classList.add('active');
}

function sendEmail() {
  // Ottieni i valori dai campi del modulo
  var nameValue = document.getElementById("name").value;
  var emailValue = document.getElementById("email").value;
  var subjectValue = document.getElementById("subject").value;
  var messageValue = document.getElementById("message").value; // Controlla se uno dei campi è vuoto

  if (!nameValue || !emailValue || !messageValue) {
    alert("Please fill out all fields before submitting.");
    return; // Esce dalla funzione se un campo è vuoto
  }

  var params = {
    name: nameValue,
    email: emailValue,
    message: messageValue
  };
  var serviceID = "service_nrga72p";
  var templateID = "template_zin2jfi";
  emailjs.send(serviceID, templateID, params).then(function (res) {
    // Pulisce i campi del modulo dopo l'invio
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your message was sent successfully!");
  })["catch"](function (err) {
    console.log(err);
    alert("There was an error sending your message. Please try again later.");
  });
}

function flipCard(container) {
  container.classList.toggle('flipped');
}

document.addEventListener("DOMContentLoaded", function () {
  showPopup();
});

function showPopup() {
  var popup = document.getElementById("popup");
  var overlay = document.getElementById("popup-overlay");
  popup.style.display = "block";
  overlay.style.display = "block";
}

function openPopup() {
  var popup = document.getElementById("popup");
  var overlay = document.getElementById("popup-overlay");
  popup.classList.remove("popup-hidden");
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closePopup() {
  var popup = document.getElementById("popup");
  var overlay = document.getElementById("popup-overlay");
  popup.classList.add("popup-hidden");
  popup.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
}

PageTransitions();
//# sourceMappingURL=app.dev.js.map
