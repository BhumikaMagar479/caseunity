
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

 document.querySelectorAll('.button-group').forEach(group => {
      group.addEventListener('click', e => {
        if (e.target.classList.contains('button')) {
          [...group.children].forEach(btn => btn.classList.remove('active'));
          e.target.classList.add('active');
        }
      });
    });


    const modelSelect = document.getElementById('model');
    const variantSelect = document.getElementById('variant');
    const brandSelect = document.getElementById('brand');

    const models = {
      Apple: ['iphone 11','iphone 12','iphone 13 ','iphone 14','iphone 15','iPhone 16','iphone 6/6s','iphone 7','iphone 8','iphone 7plus/8plus','iphone 11 pro'],

      Samsung: ['samsung a02s/mo2s','samsung a03s','samsung 10','samsung a10s/mo10','samsung a14','samsung 16','samsung a20/a30','samsung a22 5g/f22 5g','samsung a70/a70s'],
      Huwaei: ['huwaei nova 4','huawei y5 2019','huawei y6 2019','huawei honor 10 lite','huawei nova 2l','huawei nova 3e','huwaei p30 pro','huwaei y9s'],
      OnePlus: ['onplus 10 pro','onplus 11 r','oneplus 12','oneplus 12 r',' oneplus 5','oneplus 5t','oneplus 6t/7','oneplus 7 pro','oneplus 7t','oneplus 8','oneplus 8 pro','oneplus 9','oneplus nord']
    
    
    
    };

    const variants = {
      'iPhone 13': ['Matte', 'Glossy'],
      'iPhone 14': ['Glossy', 'Transparent'],
      'Macbook Pro': ['15-inch', '13-inch'],
      'Galaxy S22': ['Black', 'White'],
      'Galaxy Note 20': ['Blue', 'Green'],
      'XPS 13': ['Touch', 'Non-Touch'],
      'Inspiron 15': ['Plastic', 'Metal']
    };

    brandSelect.addEventListener('change', function () {
      const selectedBrand = this.value;
      modelSelect.innerHTML = `<option value="">Select Model...</option>`;
      if (selectedBrand && models[selectedBrand]) {
        models[selectedBrand].forEach(model => {
          modelSelect.innerHTML += `<option value="${model}">${model}</option>`;
        });
      }
      variantSelect.innerHTML = `<option value="">Choose Variant...</option>`;
    });

    modelSelect.addEventListener('change', function () {
      const selectedModel = this.value;
      variantSelect.innerHTML = `<option value="">Choose Variant...</option>`;
      if (selectedModel && variants[selectedModel]) {
        variants[selectedModel].forEach(variant => {
          variantSelect.innerHTML += `<option value="${variant}">${variant}</option>`;
        });
      }
    });

    
    document.querySelectorAll('.category-buttons button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.category-buttons button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    
const categorybuttons = document.querySelectorAll("#categorybuttons button");
const card1 = document.querySelectorAll("#item-container .card1");

