
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
      Apple: ['IPHONE 11','IPHONE 12','IPHONE 13 ','IPHONE 14','IPHONE 15','IPHONE 16','IPHONE 6/6s','IPHONE 7','IPHONE 8','IPHONE 7plus/8plus','IPHONE 11 pro'],

      Samsung: ['SAMSUNG a02s/mo2s','SAMSUNG a03s','SAMSUNG 10','SAMSUNGa10s/mo10','SAMSUNG a14','SAMSUNG 16','SAMSUNG a20/a30','SAMSUNG a22 5g/f22 5g','SAMSUNG a70/a70s'],
      Huwaei: ['HUAWEI nova 4','HUAWEI y5 2019','HUAWEI y6 2019','HUAWEI honor 10 lite',' nova 2l','HUAWEI nova 3e','HUAWEI p30 pro','HUAWEI y9s'],
      OnePlus: ['ONEPLUS 10 PRO','ONEPLUS 11 R','ONEPLUS 12','ONEPLUS 12 R','ONEPLUS 5','ONEPLUS 5T','ONEPLUS 6T/7','ONEPLUS 7 PRO','ONEPLUS 7T','ONEPLUS 8','ONEPLUS 8 PRO','ONEPLUS 9','ONEPLUS NORD'],
      Oppo: ['OPPO 15/F14 PRO','OPPO A15','OPPO A1K','OPPO A31','OPPO F3','OPPO F7','OPPO F9 PRO/F9','OPPO RENO 6','OPPO A83','OPPO A59/F1S'],
      Realme: ['REALME X','REALME XT','REALME NARXO 50 5G','REALME C3','REALME C31','REALME C35','REALME C2','REALME C20','REALME C21','REALME 91',' REALME 9 PRO','REALME 9 PRO PLUS','REALME 3/31',' REALME 5 PRO',' REALME 5/51/5S','REALME 6 PRO',' REALME 6/61' ,' REALME 7 ','REALME 7 PRO'],
      Redmi: ['REDMI 10 2022',' REDMI 10 PRIME','REDMI 10PRO/MAX','REDMI 7A','REDMI 8','REDMI PRO','REDMI 8A DUAL','REDMI 9C/9 IMDIAN','REDMI C3','REDMI 10/10S','REDMI NOTE 11/PRO','REDMI POCO M4 PRO','REDMI X3'],
      Vivo: ['VIVO Y9S/S1 PRO','VIVO Y73/V21E','VIVO Y55','VIVO Y53S','VIVO Y1S','VIVO V7','VIVO V23 E','VIVO 11/PRO','VIVO 17/PRO'],
    
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

    


let currentIndex = 0;
const slides = document.getElementsByClassName("slide");

// Show the first slide
showSlide(currentIndex);

// Function to show a specific slide
function showSlide(index) {
  // Loop back if out of bounds
  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length -1;
  else currentIndex = index;

  // Hide all slides
  for (let slide of slides) {
    slide.style.display = "none";
  }

  // Show the current slide
  slides[currentIndex].style.display = "block";
}

// Function to change slide on button click
function changeSlide(step) {
  showSlide(currentIndex + step);
}
