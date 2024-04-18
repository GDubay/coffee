document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));

            // Aqui você pode adicionar lógica para adicionar o item ao carrinho
            console.log(`Item adicionado ao carrinho: ${name} - Preço: R$${price.toFixed(2)}`);
        });
    });
});