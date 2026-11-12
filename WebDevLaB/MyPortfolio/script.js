// 1. Mobile Menu Toggle
function toggleMenu() {
  var nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

// 3. Highlight Active Navigation Link on Click and Scroll
var navLinks = document.querySelectorAll(".nav-link");

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("nav-links").classList.remove("show");
  });
}

window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll("section");
  var scrollPos = window.scrollY + 120;

  for (var i = 0; i < sections.length; i++) {
    var top = sections[i].offsetTop;
    var height = sections[i].offsetHeight;
    var id = sections[i].getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      for (var j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove("active");
        if (navLinks[j].getAttribute("href") === "#" + id) {
          navLinks[j].classList.add("active");
        }
      }
    }
  }
});

// 4. Show / Close Project Details
function showDetails(text) {
  var box = document.getElementById("project-detail-box");
  var detailText = document.getElementById("project-detail-text");
  detailText.textContent = text;
  box.style.display = "block";
}

function closeDetails() {
  document.getElementById("project-detail-box").style.display = "none";
}

// 5. Contact Form Validation
function validateForm(event) {
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var formMsg = document.getElementById("form-msg");

  if (name === "" || email === "" || message === "") {
    formMsg.style.color = "red";
    formMsg.textContent = "Please fill in all fields.";
    return false;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    formMsg.style.color = "red";
    formMsg.textContent = "Please enter a valid email address.";
    return false;
  }

  if (message.length < 10) {
    formMsg.style.color = "red";
    formMsg.textContent = "Message should be at least 10 characters long.";
    return false;
  }

  formMsg.style.color = "green";
  formMsg.textContent = "Thank you, " + name + "! Your message has been submitted.";
  document.getElementById("contact-form").reset();
  return true;
}
