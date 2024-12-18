document.addEventListener('DOMContentLoaded', () => {
    const expandButton = document.querySelector('.expand-description');
    const hiddenDescription = document.querySelector('.hidden-description');

    expandButton.addEventListener('click', () => {
        hiddenDescription.style.display = hiddenDescription.style.display === 'inline' ? 'none' : 'inline';
        expandButton.textContent = hiddenDescription.style.display === 'inline' ? 'Zwiń opis' : 'Rozwiń opis';
    });
});





document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a'); // Selekcja wszystkich linków na stronie
  
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Zapobiega domyślnemu zachowaniu linku
      const url = this.getAttribute('href');
      window.location.href = url; // Przejście do linku z twardym przeładowaniem
    });
  });
});
