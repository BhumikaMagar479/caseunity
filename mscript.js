
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

 