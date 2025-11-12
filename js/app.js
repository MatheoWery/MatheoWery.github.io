// Animation d'ouverture/fermeture des sections
document.querySelectorAll('.section').forEach(section => {
  const header = section.querySelector('.section-header');

  header.addEventListener('click', () => {
    section.classList.toggle('active');
  });
});

// Effet d'apparition au scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section').forEach(section => observer.observe(section));
