'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('hbApp.services', [])
  .value('version', '0.1')
  .factory('sliderFactory', [function() {
    var sliders = [
      {src: 'slide sample.png', title: 'Good & Tasty'},
      {src: 'kababayan_ed.jpg', title: 'Pic 2'},
      {src: 'special_mamon_ed.jpg', title: 'Pic 3'},
      {src: 'taisan_cake.jpg', title: 'Pic 4'},
      {src: 'slide sample.png', title: 'Pic 5'},
      {src: 'kababayan_ed.jpg', title: 'Pic 6'},
      {src: 'special_mamon_ed.jpg', title: 'Pic 7'},
      {src: 'taisan_cake.jpg', title: 'Pic 8'},
      {src: 'taisan_cake.jpg', title: 'Pic 9'}
    ];

    var factory = {};
    factory.getImages = function(){
      return sliders;
    };

    return factory;
  }])
  .factory('promoFactory', [function() {
    var promos = [
      {src: 'taisan_cake.jpg', title: 'Pic 4'},
      {src: 'slide sample.png', title: 'Pic 5'},
      {src: 'kababayan_ed.jpg', title: 'Pic 6'},
      {src: 'special_mamon_ed.jpg', title: 'Pic 7'},
      {src: 'taisan_cake.jpg', title: 'Pic 8'},
      {src: 'taisan_cake.jpg', title: 'Pic 9'}
    ];

    var factory = {};
    factory.getImages = function(){
      return promos;
    };

    return factory;
  }])
  .factory('productsFactory', [function() {
    var products = [
      {
        src: 'products/bread',
        title: 'Bread',
        type: 'header'
      },
      {
        src: 'products/bread/american-bread',
        title: 'American Bread',
        type: 'bread',
        pic: 'american_bread.jpg',
        price: 'P.42.00',
        hint: 3
      },
      {
        src: 'products/bread/cinamon-ring',
        title: 'Cinamon Ring',
        type: 'bread',
        pic: 'cinamon_ring.jpg',
        price: 'P.53.00',
        hint: 1
      },
      {
        src: 'products/bread/french-bagutte',
        title: 'French Bagutte',
        type: 'bread',
        pic: 'french_bagutte.jpg',
        price: 'P.64.00',
        hint: 2
      },
      {
        src: 'products/bread/half-bagutte',
        title: 'Half Bagutte',
        type: 'bread',
        pic: 'half_bagutte.jpg',
        price: 'P.75.00',
        hint: 0
      },

      {
        src: 'products/cakes',
        title: 'Cakes',
        type: 'header'
      },
      {
        src: 'products/cakes/birthday-cakes',
        title: 'Birthday Cakes',
        type: 'cakes'
      },
      {
        src: 'products/cakes/christening-cakes',
        title: 'Christening Cakes',
        type: 'cakes'
      },
      {
        src: 'products/cakes/debut-cakes',
        title: 'Debut Cakes',
        type: 'cakes'
      },
      {
        src: 'products/cakes/male-birthday-cakes',
        title: 'Male Birthday Cakes',
        type: 'cakes'
      },
      {
        src: 'products/cakes/female-birthday-cakes',
        title: 'Female Birthday Cakes',
        type: 'cakes'
      },
      {
        src: 'products/cakes/wedding-cakes',
        title: 'Wedding Cakes',
        type: 'cakes'
      },
      {
        src: 'products/cakes/other-cakes',
        title: 'Other Cakes',
        type: 'cakes'
      },

      {
        src: 'products/chinese-deli',
        title: 'Chinese Deli',
        type: 'header'
      },
      {
        src: 'products/chinese-deli/test-chinese-deli',
        title: 'Test Chinese Deli',
        type: 'chinese-deli'
      },

      {
        src: 'products/hopia',
        title: 'Hopia',
        type: 'header'
      },
      {
        src: 'products/hopia/test-hopia',
        title: 'Test Hopia',
        type: 'hopia'
      },

      {
        src: 'products/pastries',
        title: 'Pastries',
        type: 'header'
      },
      {
        src: 'products/pastries/test-pastries',
        title: 'Test Pastries',
        type: 'pastries'
      }
    ];

    var factory = {};
    factory.getProducts = function(){
      return products;
    };

    return factory;
  }]);