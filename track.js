const hamburger=document.querySelector('.hamburger');
const nav=document.querySelector('.nav');

hamburger.addEventListener ('click' ,()=>{
  hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

document.getElementById("checkoutForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your order has been placed successfully!");
});