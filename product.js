const hamburger=document.querySelector('.hamburger');
const nav=document.querySelector('.nav');

hamburger.addEventListener ('click' ,()=>{
  hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});



const filterButtons = document.querySelectorAll("#filter-buttons button");
const card = document.querySelectorAll("#container .product-card");
filterButtons.forEach(button =>{
    button.addEventListener("click",() =>{
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const filter = button.getAttribute("data-filter");
        card.forEach(card =>{
            const category = card.getAttribute("data-category");
            if(filter ==="all" || category === filter){
                card.style.display ="block";
            }else{
                card.style.display ="none";
            }
        });
    });
});