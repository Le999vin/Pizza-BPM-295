const cart = [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(product) {
  // Nur dieses eine Produkt in den Warenkorb legen
  cart.length = 0;
  cart.push(product);
  saveCart();
  renderCart();
}

function renderCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalContainer = document.getElementById('cart-total');

  if (!cartItemsContainer || !cartTotalContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Dein Warenkorb ist leer.</p>';
    cartTotalContainer.innerHTML = '';
    return;
  }

  cartItemsContainer.innerHTML = '<ul>' + cart.map(item => `
    <li><strong>${item.name}</strong> x ${item.qty} – ${(item.price * item.qty).toFixed(2)} CHF</li>
  `).join('') + '</ul>';

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotalContainer.innerHTML = `<strong>Gesamt: ${total.toFixed(2)} CHF</strong>`;
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const el = document.getElementById('cart-count');
  if (el) el.textContent = count;
}

window.addEventListener('DOMContentLoaded', renderCart);