document.addEventListener('DOMContentLoaded', async () => {
  updateCartCount();

  // Dynamisch laden, um auf products[] zugreifen zu können
  const module = await import('./data.js');
  const products = module.products;
  const productsMap = new Map(products.map(p => [p.id, p]));

  const cart = getCart();
  const container = document.getElementById('cart-page');

  if (cart.length === 0) {
    container.innerHTML = '<p>Dein Warenkorb ist leer.</p>';
    return;
  }

  let total = 0;
  const table = document.createElement('table');
  table.innerHTML = `
    <thead><tr><th>Produkt</th><th>Menge</th><th>Preis</th></tr></thead>
    <tbody></tbody>
  `;
  const tbody = table.querySelector('tbody');

  cart.forEach(item => {
    const p = productsMap.get(item.id);
    if (!p) return;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${p.name}</td>
      <td>${item.qty}</td>
      <td>${(p.price * item.qty).toFixed(2)} CHF</td>
    `;
    total += p.price * item.qty;
    tbody.appendChild(row);
  });

  container.appendChild(table);

  const sumEl = document.createElement('p');
  sumEl.innerHTML = `<strong>Gesamt: ${total.toFixed(2)} CHF</strong>`;
  container.appendChild(sumEl);

  const form = document.createElement('form');
  form.className = 'checkout-form';
  form.innerHTML = `
    <h3>Lieferinformationen</h3>
    <label>Name:<input type="text" name="name" required></label>
    <label>Adresse:<input type="text" name="address" required></label>
    <label>Telefon:<input type="tel" name="phone" required></label>
    <button class="btn btn--primary" type="submit">Bestellung abschicken</button>
  `;
  container.appendChild(form);

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const payload = {
      name: form.name.value,
      address: form.address.value,
      phone: form.phone.value,
      items: getCart()
    };

    try {
      const res = await fetch('https://dein-backend-url/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await res.json();

      alert('Bestellung erfolgreich: ' + result.message);
      localStorage.removeItem('cart');
      updateCartCount();
      container.innerHTML = `<p>Deine Bestellung wurde erfolgreich übermittelt.</p>`;
    } catch (err) {
      alert('Fehler bei der Bestellung. Bitte erneut versuchen.');
    }
  });
});