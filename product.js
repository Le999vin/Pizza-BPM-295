// product.js – überarbeitet mit modernem Routing & Anzeige

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));
  const product = products.find(p => p.id === productId);

  const container = document.getElementById('product-detail');

  if (!product) {
    container.innerHTML = '<p>Produkt nicht gefunden.</p>';
    return;
  }

  container.innerHTML = `
    <img src="${product.img}" alt="${product.name}" />
    <h2>${product.name}</h2>
    <p>${product.desc}</p>
    <p><strong>${product.price.toFixed(2)} CHF</strong></p>
    <label for="qty">Menge:</label>
    <input type="number" id="qty" min="1" value="1" />
    <button class="btn" id="add-to-cart">In den Warenkorb</button>
  `;

  document.getElementById('add-to-cart').addEventListener('click', () => {
    const qty = parseInt(document.getElementById('qty').value);
    addToCart(product.id, qty);
    alert(`${qty}x ${product.name} zum Warenkorb hinzugefügt.`);
  });
});