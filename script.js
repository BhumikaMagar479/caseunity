
const filterButtons = document.querySelectorAll("#filter-buttons button");
const card = document.querySelectorAll("#item-container .card");

filterButtons.forEach(button =>{
    button.addEventListener("click",() =>{
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const filter = button.getAttribute("data-filter");
        card.forEach(card => {
            const category = card.getAttribute("data-category");
            if(filter ==="all" || category === filter){
                card.style.display ="block";
            }else{
                card.style.display ="none";
            }
        });
    });
});
const popular= [
  {
    image: "image/abstract.png",
    title: "Phone Cases",
    description: "ABSTRACT Rs 850 - Rs 1500",
  },
  {
    image: "image/abstract4.png",
    title: "Phone Cases",
    description: "ABSTRACT Rs 850 - Rs 1500"
  },
 { 
  image: "image/marbel.png",
  title: "Phone Cases",
  description: "MARBLE Rs 850 - Rs 1500"
},
 { 
  image: "image/marbel2.png",
  title: "Phone Cases",
  description: "MARBLE Rs 850 - Rs 1500"
},
];
const popularContainer = document.getElementById("popular-container");
popular.forEach(popular => { 
  const card = document.createElement("div");
  card.className="popular-card";

  card.innerHTML = `
    <img src="${popular.image}" alt="${popular.title}">
   <h3>${popular.title}</h3>
    <p>${popular.description}</p>
  
  `;
  popularContainer.appendChild(card);
}
);
const popular1=[
    {
  image: "image/god.png",
  title: "Phone Cases",
  description: "GOD Rs 850 - Rs 1100",
},

 { 
  image: "image/sports.png",
  title: "Phone Cases",
  description: "SPORTS Rs 850 - Rs 1500",
},

 { 
  image: "image/luxury.png",
  title: "Phone Cases",
  description: "ABSTRACT Rs 850 - Rs 1500",
},

 { 
  image: "image/abstract3.png",
  title: "Phone Cases",
  description: "ABSTRACT Rs 850 - Rs 1500",
},
];
const popular1Container = document.getElementById("popular1-container");
popular1.forEach(popular1 => { 
  const card = document.createElement("div");
  card.className="popular1-card";

  card.innerHTML = `
    <img src="${popular1.image}" alt="${popular1.title}">
   <h3>${popular1.title}</h3>
    <p>${popular1.description}</p>
  
  `;
  popular1Container.appendChild(card);
}
);

const bestselling=[
  {
  image: "image/abstract6.png",
  title: "Phone Cases",
  description: "ABSTRACT Rs 850 - Rs 1500",
},

 { 
  image: "image/sports1.png",
  title: "Phone Cases",
  description: "SPORTS Rs 850 - Rs 1500",
},
{ 
  image: "image/abstract5.png",
  title: "Phone Cases",
  description: "ABSTRACT Rs 850 - Rs 1500",
},
{ 
  image: "image/abstract8.png",
  title: "Phone Cases",
  description: "ABSTRACT Rs 850 - Rs 1500",
},
];
const bestsellingContainer = document.getElementById("bestselling-container");
bestselling.forEach(bestselling=> { 
  const card = document.createElement("div");
  card.className="bestselling-card";

  card.innerHTML = `
    <img src="${bestselling.image}" alt="${bestselling.title}">
   <h3>${bestselling.title}</h3>
    <p>${bestselling.description}</p>
  
  `;
  bestsellingContainer.appendChild(card);
}
);

const bestselling1=[
  {
  image: "image/abstract9.png",
  title: "Phone Cases",
  description: "ABSTRACT Rs 850 - Rs 1500",
},

 { 
  image: "image/sports2.png",
  title: "Phone Cases",
  description: "SPORTS - Rs 850 - Rs 1500",
},
{ 
  image: "image/sports3.png",
  title: "Phone Cases",
  description: "SPORTS Rs 850 - Rs 1500",
},
{ 
  image: "image/sports4.png",
  title: "Phone Cases",
  description: "SPORTS Rs 850 - Rs 1500",
},
];
const bestselling1Container = document.getElementById("bestselling1-container");
bestselling1.forEach(bestselling1=> { 
  const card = document.createElement("div");
  card.className="bestselling1-card";

  card.innerHTML = `
    <img src="${bestselling1.image}" alt="${bestselling1.title}">
   <h3>${bestselling1.title}</h3>
    <p>${bestselling1.description}</p>
  
  `;
  bestselling1Container.appendChild(card);
}
);