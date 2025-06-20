// main.js – mit Kategoriefilter

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  const list = document.getElementById('product-list');
  const filterBar = document.createElement('div');
  filterBar.className = 'filter-bar';

  const categories = [...new Set(products.map(p => p.category || 'Alle'))];
  filterBar.innerHTML = `
    <label for="category">Kategorie:</label>
    <select id="category">
      <option value="Alle">Alle</option>
      ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
    </select>
  `;
  list.before(filterBar);

  const renderProducts = (category = 'Alle') => {
    list.innerHTML = '';
    products
      .filter(p => category === 'Alle' || p.category === category)
      .forEach(p => {
        const c = document.createElement('div');
        c.className = 'card';
        c.innerHTML = `
          <img src="${p.img}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <p>${p.price.toFixed(2)} CHF</p>
          <a href="product.html?id=${p.id}" class="btn">Ansehen</a>
        `;
        list.appendChild(c);
      });
  };

  document.getElementById('category').addEventListener('change', (e) => {
    renderProducts(e.target.value);
  });

  renderProducts();
});