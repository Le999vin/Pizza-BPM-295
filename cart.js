function getCart(){ return JSON.parse(localStorage.getItem('cart')||'[]'); }
function saveCart(c){ localStorage.setItem('cart',JSON.stringify(c)); }
function addToCart(id,qty=1){
  const cart=getCart(), item=cart.find(i=>i.id===id);
  if(item){item.qty+=qty;} else {cart.push({id,qty});}
  saveCart(cart); updateCartCount();
}
function updateCartCount(){
  const total=getCart().reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll('#cart-count').forEach(el=>el.textContent=total);
}
document.addEventListener('DOMContentLoaded', updateCartCount);