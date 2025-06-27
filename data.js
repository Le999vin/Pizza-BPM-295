const products = [
  { id: 1, name: 'Pizza Margherita', desc: 'Tomate, Mozzarella, Basilikum', price: 9.9, img: 'images/Unknown-6.jpg', category: 'Pizza' },
  { id: 2, name: 'Pizza Salami', desc: 'Tomate, Mozzarella, Salami', price: 11.9, img: 'images/ .jpg', category: 'Pizza' },
  { id: 3, name: 'Pasta Carbonara', desc: 'Mit Speck & Ei-Sahne', price: 12.5, img: 'images/Classic Italian Carbonara With Bacon Recipe.jpg', category: 'Pasta' },
  { id: 4, name: 'Pizza Prosciutto', desc: 'Tomate, Mozzarella, Schinken', price: 12.9, img: 'images/Unknown-7.jpg', category: 'Pizza' },
  { id: 5, name: 'Insalata Mista', desc: 'Gemischter Salat mit Dressing', price: 6.9, img: 'images/Unknown-8.jpg', category: 'Salat' },
  { id: 6, name: 'Tiramisu', desc: 'Hausgemachtes Dessert mit Mascarpone', price: 5.5, img: 'images/Ultimate Chocolate Tiramisu.jpg', category: 'Dessert' }
];

// Dark Mode Umschalter
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
  }
});