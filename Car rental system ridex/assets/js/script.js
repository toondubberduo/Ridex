'use strict';

/**
 * NAVBAR TOGGLE FUNCTIONALITY
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  // Toggle active classes for mobile menu
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  
  // Toggle body scroll when menu is open
  if (navbar.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

// Event listeners for navbar toggle
navToggleBtn.addEventListener("click", toggleNavbar);
overlay.addEventListener("click", toggleNavbar);

// Close navbar when clicking on any nav link
navbarLinks.forEach(link => {
  link.addEventListener("click", toggleNavbar);
});


/**
 * HEADER SCROLL EFFECT
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  // Add shadow to header when scrolling down
  if (window.scrollY >= 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


/**
 * SMOOTH SCROLLING FOR ANCHOR LINKS
 */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Skip smooth scroll for elements that shouldn't scroll
    if (this.getAttribute('href') === '#') return;
    
    const targetElement = document.querySelector(this.getAttribute('href'));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


/**
 * ACTIVE NAV LINK BASED ON SCROLL POSITION
 */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= (sectionTop - 300)) {
      current = section.getAttribute('id');
    }
  });
  
  navbarLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add("active");
    }
  });
});


/**
 * FORM SUBMISSION HANDLER
 */

const contactForm = document.querySelector(".hero-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get form values
    const carModel = document.getElementById("input-1").value;
    const monthlyPay = document.getElementById("input-2").value;
    const makeYear = document.getElementById("input-3").value;
    
    // Basic validation
    if (!carModel || !monthlyPay || !makeYear) {
      alert("Please fill in all fields");
      return;
    }
    
    // Here you would typically send this data to a server
    console.log("Form submitted:", { carModel, monthlyPay, makeYear });
    
    // Show success message
    alert("Thank you! We'll help you find your perfect car.");
    
    // Reset form
    contactForm.reset();
  });
}


/**
 * FAVORITE BUTTON FUNCTIONALITY
 */

const favButtons = document.querySelectorAll(".fav-btn");

favButtons.forEach(button => {
  button.addEventListener("click", function() {
    this.classList.toggle("active");
    const icon = this.querySelector("ion-icon");
    
    if (this.classList.contains("active")) {
      icon.setAttribute("name", "heart");
    } else {
      icon.setAttribute("name", "heart-outline");
    }
  });
});