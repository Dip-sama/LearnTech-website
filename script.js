document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
