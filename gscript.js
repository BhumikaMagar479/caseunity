const hamburger=document.querySelector('.hamburger');
const nav=document.querySelector('.nav');

hamburger.addEventListener ('click' ,()=>{
  hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});
    
    const modelSelect = document.getElementById('model');
    const variantSelect = document.getElementById('variant');
    const brandSelect = document.getElementById('brand');

    const models = {
      Apple: ['IPHONE 11','IPHONE 12','IPHONE 13 ','IPHONE 14','IPHONE 15','IPHONE 16','IPHONE 6/6s','IPHONE 7','IPHONE 8','IPHONE 7PLUS/8PLUS','IPHONE 11 PRO'],

      Samsung: ['SAMSUNG A02S/MO2S','SAMSUNG A03S','SAMSUNG 10','SAMSUNG A10S/MO10','SAMSUNG A14','SAMSUNG 16','SAMSUNG A20/A30','SAMSUNG A22 5G/f22 5G','SAMSUNG a70/a70s'],
      Huwaei: ['HUAWEI NOVA 4','HUAWEI Y5 2019','HUAWEI Y6 2019','HUAWEI HONOR 10 LITE',' NOVA 2l','HUAWEI NOVA 3E','HUAWEI P30 pro','HUAWEI Y9S'],
      OnePlus: ['ONEPLUS 10 PRO','ONEPLUS 11 R','ONEPLUS 12','ONEPLUS 12 R','ONEPLUS 5','ONEPLUS 5T','ONEPLUS 6T/7','ONEPLUS 7 PRO','ONEPLUS 7T','ONEPLUS 8','ONEPLUS 8 PRO','ONEPLUS 9','ONEPLUS NORD'],
      Oppo: ['OPPO 15/F14 PRO','OPPO A15','OPPO A1K','OPPO A31','OPPO F3','OPPO F7','OPPO F9 PRO/F9','OPPO RENO 6','OPPO A83','OPPO A59/F1S'],
      Realme: ['REALME X','REALME XT','REALME NARXO 50 5G','REALME C3','REALME C31','REALME C35','REALME C2','REALME C20','REALME C21','REALME 91',' REALME 9 PRO','REALME 9 PRO PLUS','REALME 3/31',' REALME 5 PRO',' REALME 5/51/5S','REALME 6 PRO',' REALME 6/61' ,' REALME 7 ','REALME 7 PRO'],
      Redmi: ['REDMI 10 2022',' REDMI 10 PRIME','REDMI 10PRO/MAX','REDMI 7A','REDMI 8','REDMI PRO','REDMI 8A DUAL','REDMI 9C/9 IMDIAN','REDMI C3','REDMI 10/10S','REDMI NOTE 11/PRO','REDMI POCO M4 PRO','REDMI X3'],
      Vivo: ['VIVO Y9S/S1 PRO','VIVO Y73/V21E','VIVO Y55','VIVO Y53S','VIVO Y1S','VIVO V7','VIVO V23 E','VIVO 11/PRO','VIVO 17/PRO'],
    
    };

    const variants = {
      'IPHONE 11': ['NORMAL', 'FULL COVERAGE'],
      'IPHONE 12': ['NORMAL', 'FULL COVERAGE','DOUBLE LAYER'],
      'IPHONE 14': ['NORMAL', 'BLACK GLOSSY','DOUBLE LAYER'],
      'IPHONE 15': ['NORMAL', 'BLACK GLOSSY','DOUBLE LAYER'],
      'SAMSUNG A03S': ['NORMAL','BLACK GLOSSY'],
      'SAMSUNG A02S/MO2S': ['NORMAL','BLACK GLOSSY'],
      'SAMSUNG 10': ['NORMAL','BLACK GLOSSY'],
      'SAMSUNG A10S/MO10 ': ['NORMAL','BLACK GLOSSY'],
      'SAMSUNG A14': ['NORMAL','BLACK GLOSSY'],
      'HUAWEI NOVA 4': ['NORMAL','BLACK GLOSSY'],
      'HUAWEI Y5 2019': ['NORMAL','BLACK GLOSSY'],
      'HUAWEI Y6 2019': ['NORMAL','BLACK GLOSSY'],
      'HUAWEI HONOR 10 LITE': ['NORMAL','BLACK GLOSSY'],
      'NOVA 2l': ['NORMAL','BLACK GLOSSY'],
      'ONEPLUS 10 PRO': ['NORMAL','BLACK GLOSSY'],
      'ONEPLUS 11 R': ['NORMAL','BLACK GLOSSY'],
      'ONEPLUS 12': ['NORMAL','BLACK GLOSSY'],
      'ONEPLUS 5': ['NORMAL','BLACK GLOSSY'],
      'ONEPLUS 5T': ['NORMAL','BLACK GLOSSY'],
      'OPPO 15/F14 PRO': ['NORMAL','BLACK GLOSSY'],
      'OPPO A15': ['NORMAL','BLACK GLOSSY'],
      'OPPO A1K': ['NORMAL','BLACK GLOSSY'],
      'OPPO A31': ['NORMAL','BLACK GLOSSY'],
      'REALME X': ['NORMAL','BLACK GLOSSY'],
      'REALME XT': ['NORMAL','BLACK GLOSSY'],
      'REALME NARXO 50 5G': ['NORMAL','BLACK GLOSSY'],
      'REALME C3': ['NORMAL','BLACK GLOSSY'],
      'REALME C31': ['NORMAL','BLACK GLOSSY'],
      'REDMI 10 2022': ['NORMAL','BLACK GLOSSY'],
      'REDMI 10 PRIME': ['NORMAL','BLACK GLOSSY'],
      'REDMI 10PRO/MAX': ['NORMAL','BLACK GLOSSY'],
      'REDMI 7A': ['NORMAL','BLACK GLOSSY'],
      'VIVO Y9S/S1 PRO': ['NORMAL','BLACK GLOSSY'],
      'VIVO Y73/V21E': ['NORMAL','BLACK GLOSSY'],
      'VIVO Y55': ['NORMAL','BLACK GLOSSY'],
      'VIVO Y53S': ['NORMAL','BLACK GLOSSY'],
      'VIVO Y1S': ['NORMAL','BLACK GLOSSY'],

      

      

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

