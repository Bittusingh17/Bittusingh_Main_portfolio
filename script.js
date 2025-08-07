// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Header scroll effect
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Fade in animations
  const fadeIns = document.querySelectorAll('.fade-in-up');
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2,
  });

  fadeIns.forEach(el => fadeInObserver.observe(el));

  // Cards mouse effect
  const cards = document.querySelectorAll(".card");
  const cardsContainer = document.querySelector("#cards");
  
  if (cardsContainer) {
    cardsContainer.addEventListener("mousemove", e => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    });
  }

  // Hamburger Menu Toggle
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");
  const navLinks = document.querySelectorAll("#nav-links a");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // Hide menu after clicking a nav link (for mobile)
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      nav.classList.remove("active");
      
      // Smooth scroll with offset for fixed header
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      const offset = 80; // adjust based on your header height

      if (target) {
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: "smooth"
        });
      }
    });
  });

  // Hero Popup Hide
  const heroPopup = document.getElementById("hero-popup");
  const closeHeroBtn = document.getElementById("close-hero");

  if (closeHeroBtn && heroPopup) {
    closeHeroBtn.addEventListener("click", () => {
      heroPopup.classList.add("hide");
    });
  }

  // Navigation active link highlighting
  const sections = document.querySelectorAll("section");
  
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active class from all nav links
        navLinks.forEach(link => link.classList.remove("active"));
        
        // Add active class to current section's nav link
        const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }, { 
    threshold: 0.3,
    rootMargin: "-80px 0px -50% 0px"
  });

  sections.forEach(section => {
    navObserver.observe(section);
  });

  // Skill cards animation
  const skillCards = document.querySelectorAll('.skill-card');
  
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  skillCards.forEach(card => {
    skillObserver.observe(card);
  });

});
