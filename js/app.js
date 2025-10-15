// Sélectionne toutes les sections
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
  const header = section.querySelector('.section-header');

  header.addEventListener('click', () => {
    section.classList.toggle('active');
  });
});
