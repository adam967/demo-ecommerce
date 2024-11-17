// Example of tracking "Add to Cart" events
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.previousElementSibling.textContent;
        console.log(`Added ${productName} to cart`);

        // Here you can push an event to GTM for tracking
        dataLayer.push({
            event: 'add_to_cart',
            product: productName
        });
    });
});

// Example of tracking "Checkout" event
document.getElementById('checkout').addEventListener('click', function() {
    console.log('Checkout clicked');
    dataLayer.push({
        event: 'begin_checkout'
    });
});
