window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

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

const cards = document.querySelectorAll(".card");

document.querySelector("#cards").addEventListener("mousemove", e => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
const navLinks = document.querySelectorAll("#nav-links a");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
