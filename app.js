$(document).ready(function() {

  //sticky header
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $(".header-area").addClass("sticky");
      } else {
        $(".header-area").removeClass("sticky");
      }
  
      // Update the active section in the header
      updateActiveSection();
    });
  
    $(".header ul li a").click(function(e) {
      e.preventDefault(); 
  
      var target = $(this).attr("href");
  
      if ($(target).hasClass("active-section")) {
        return; 
      }
  
      if (target === "#home") {
        $("html, body").animate(
          {
            scrollTop: 0 
          },
          500
        );
      } else {
        var offset = $(target).offset().top - 40; 
  
        $("html, body").animate(
          {
            scrollTop: offset
          },
          500
        );
      }
  
      $(".header ul li a").removeClass("active");
      $(this).addClass("active");
    });
  

    //Initial content revealing js
    ScrollReveal({
      distance: "100px",
      duration: 2000,
      delay: 200
    });
  
    ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {
      origin: "left"
    });
    ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {
      origin: "right"
    });
    ScrollReveal().reveal(".project-title, .contact-title", {
      origin: "top"
    });
    ScrollReveal().reveal(".projects, .contact", {
      origin: "bottom"
    });

 
  
  function updateActiveSection() {
    var scrollPosition = $(window).scrollTop();
  
    // Checking if scroll position is at the top of the page
    if (scrollPosition === 0) {
      $(".header ul li a").removeClass("active");
      $(".header ul li a[href='#home']").addClass("active");
      return;
    }
  
    // Iterate through each section and update the active class in the header
    $("section").each(function() {
      var target = $(this).attr("id");
      var offset = $(this).offset().top;
      var height = $(this).outerHeight();
  
      if (
        scrollPosition >= offset - 40 &&
        scrollPosition < offset + height - 40
      ) {
        $(".header ul li a").removeClass("active");
        $(".header ul li a[href='#" + target + "']").addClass("active");
      }
    });
  }
  
})

function sendEmail() {
  // Ottieni i valori dai campi del modulo
  var nameValue = document.getElementById("name").value;
  var emailValue = document.getElementById("email").value;
  var subjectValue= document.getElementById("subject").value;
  var messageValue = document.getElementById("message").value;

  // Controlla se uno dei campi è vuoto
  if (!nameValue || !emailValue || !messageValue) {
      alert("Please fill out all fields before submitting.");
      return; // Esce dalla funzione se un campo è vuoto
  }

  var params = {
      name: nameValue,
      email: emailValue,
      message: messageValue
  };

  const serviceID = "service_nrga72p";
  const templateID = "template_zin2jfi";

  emailjs.send(serviceID, templateID, params)
      .then((res) => {
          // Pulisce i campi del modulo dopo l'invio
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("subject").value= "";
          document.getElementById("message").value = "";

          console.log(res);
          alert("Your message was sent successfully!");
      })
      .catch((err) => {
          console.log(err);
          alert("There was an error sending your message. Please try again later.");
      });
}

function openPopup() {
  var overlay = document.getElementById("popup-overlay");
  var popup = document.getElementById("popup-container");

  overlay.classList.add("popup-opened");
  popup.classList.add("popup-opened");

  document.body.style.overflow = "hidden";
}


function closePopup() {
  var popup = document.getElementById("popup");
  var overlay = document.getElementById("popup-overlay");
  popup.classList.add("popup-hidden");
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
}
