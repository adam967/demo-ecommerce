document.addEventListener('DOMContentLoaded', () => {
    // Rozwijanie i zwijanie opisu
    const expandButton = document.querySelector('.expand-description');
    const hiddenDescription = document.querySelector('.hidden-description');

    if (expandButton && hiddenDescription) {
        expandButton.addEventListener('click', () => {
            hiddenDescription.style.display = hiddenDescription.style.display === 'inline' ? 'none' : 'inline';
            expandButton.textContent = hiddenDescription.style.display === 'inline' ? 'Zwiń opis' : 'Rozwiń opis';
        });
    }

    // Obsługa linków (zakomentowane)
    /*
    const links = document.querySelectorAll('a'); // Selekcja wszystkich linków na stronie
  
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Zapobiega domyślnemu zachowaniu linku
            const url = link.getAttribute('href');
            if (url) {
                window.location.href = url; // Przejście do linku z twardym przeładowaniem
            }
        });
    });
    */
});
