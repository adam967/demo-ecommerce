document.addEventListener('DOMContentLoaded', () => {
    const expandButton = document.querySelector('.expand-description');
    const hiddenDescription = document.querySelector('.hidden-description');

    expandButton.addEventListener('click', () => {
        hiddenDescription.style.display = hiddenDescription.style.display === 'inline' ? 'none' : 'inline';
        expandButton.textContent = hiddenDescription.style.display === 'inline' ? 'Zwiń opis' : 'Rozwiń opis';
    });
});
