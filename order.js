const hamburger=document.querySelector('.hamburger');
const nav=document.querySelector('.nav');

hamburger.addEventListener ('click' ,()=>{
  hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});
   
   
   document.getElementById('trackForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const orderId = document.getElementById('orderId').value.trim();
      const phoneNumber = document.getElementById('phoneNumber').value.trim();

      // You can replace this with your own backend tracking logic
      alert(`Tracking Order:\nOrder ID: ${orderId}\nPhone Number: ${phoneNumber}`);
    });
