function PageTransitions() {
    const sectBtns = document.querySelectorAll('.control');
    const allSections = document.querySelector('.main-content');
    const sections = document.querySelectorAll('.section');

    sectBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            // remove selected from the other buttons
            sectBtns.forEach((otherBtn) => {
                otherBtn.classList.remove('active-btn');
            });

            this.classList.add('active-btn');

            // hide sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            const id = this.dataset.id;
            const element = document.getElementById(id);
            element.classList.add('active');
        });
    });
   

    // Set the initial active state for the first button and section
    sectBtns[0].classList.add('active-btn');
    sections[0].classList.add('active');
}




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
function flipCard(container) {
    // Verifica se la larghezza della finestra è maggiore di 768 pixel (puoi regolare questo valore in base alle tue esigenze)
    if (window.innerWidth > 768) {
        container.classList.toggle('flipped');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Verifica se la larghezza della finestra è maggiore di 768 pixel prima di chiamare la funzione showPopup()
    if (window.innerWidth > 768) {
        showPopup();
    }
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
