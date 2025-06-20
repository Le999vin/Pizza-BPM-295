const products = [
  { id: 1, name: 'Pizza Margherita', desc: 'Tomate, Mozzarella, Basilikum', price: 9.9, img: 'img/margherita.jpg', category: 'Pizza' },
  { id: 2, name: 'Pizza Salami', desc: 'Tomate, Mozzarella, Salami', price: 11.9, img: 'img/salami.jpg', category: 'Pizza' },
  { id: 3, name: 'Pasta Carbonara', desc: 'Mit Speck & Ei-Sahne', price: 12.5, img: 'img/carbonara.jpg', category: 'Pasta' },
  { id: 4, name: 'Pizza Prosciutto', desc: 'Tomate, Mozzarella, Schinken', price: 12.9, img: 'img/prosciutto.jpg', category: 'Pizza' },
  { id: 5, name: 'Insalata Mista', desc: 'Gemischter Salat mit Dressing', price: 6.9, img: 'img/salad.jpg', category: 'Salat' },
  { id: 6, name: 'Tiramisu', desc: 'Hausgemachtes Dessert mit Mascarpone', price: 5.5, img: 'img/tiramisu.jpg', category: 'Dessert' }
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