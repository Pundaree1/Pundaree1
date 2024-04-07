document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const product = button.closest('.product');
        const name = product.querySelector('h3').innerText;
        const price = product.querySelector('p').innerText;
  
        // Add to cart logic here
        console.log(`Added ${name} to cart for $${price}`);
      });
    });
  
    // Pop-up animation
    const popupButtons = document.querySelectorAll('.popup-button');
    const popups = document.querySelectorAll('.popup');
  
    popupButtons.forEach(button => {
      button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        popup.classList.add('show');
      });
    });
  
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.popup.show')) {
        popups.forEach(popup => {
          popup.classList.remove('show');
        });
      }
    });
  });
  