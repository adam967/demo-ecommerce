// Dodanie produktu do koszyka
document.querySelectorAll('#add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produkt dodany do koszyka!');
        // Przykład dodawania produktu do koszyka
        // Możesz tu dodać kod do aktualizacji koszyka w lokalnej pamięci lub sesji
    });
});

// Obsługa przycisku "Zakup"
document.getElementById('checkout').addEventListener('click', () => {
    // Logika zakupu
    alert('Zamówienie złożone!');
    window.location.href = 'thank-you.html'; // Przekierowanie na stronę podziękowania
});
