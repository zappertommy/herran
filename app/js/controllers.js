'use strict';

/* Controllers */

angular.module('hbApp.controllers', [])
  .controller('menuController', ['$scope', '$location','productsFactory', function($scope, $location, productsFactory) {
    $scope.product_menus = [];
    $scope.product_type = '';

    $scope.init = function(type){
      $scope.product_menus = productsFactory.getProducts();
      $scope.product_type = type;
    }
  }])
  .controller('homeController', ['$scope', 'sliderFactory', function($scope, sliderFactory) {
    $scope.slider_images = [];

    init();

    function init(){
      $scope.slider_images = sliderFactory.getImages();
    }
  }])
  .controller('PromoController', ['$scope', 'promoFactory', function($scope, promoFactory) {
    $scope.promo_images = [];

    init();

    function init(){
      $scope.promo_images = promoFactory.getImages();
    }
  }])
  .controller('locationController', ['$scope', function($scope){
    $scope.map = {center: {latitude: 14.579828765139261, longitude: 121.00649709106023}, zoom: 14};
    $scope.options = {scrollwheel: false};

    $scope.marker = {
      id: 0,
      coords: {
        latitude: 14.579828765139261,
        longitude: 121.00649709106023
      },
      options: { draggable: false },
      events: {
        dragend: function (marker, eventName, args) {
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();

          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
  }])
  .controller('formController', ['$scope', '$http', function($scope, $http){
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

    $scope.submitForm = function(){
      var field_name = "";
      var error_msg = "";

      if ($scope.contactForm.$invalid) {
        if ($scope.contactForm.$error.required) {
          $scope.contactForm.$error.required.forEach(function(val, key){
            field_name = val.$name;
            field_name = field_name.substring(8);
            field_name = field_name.charAt(0).toUpperCase() + field_name.slice(1);
            error_msg = error_msg + field_name + " is Required.<br />";
          });
        }

        if ($scope.contactForm.$error.email) {
          $scope.contactForm.$error.email.forEach(function(val, key){
            field_name = val.$name;
            field_name = field_name.substring(8);
            field_name = field_name.charAt(0).toUpperCase() + field_name.slice(1);
            error_msg = error_msg + field_name + " is Invalid.<br />";
          });
        }

        $('#contactMessage div').addClass('alert-warning');
        $('#contactMessage div').html(error_msg);
        $('#contactMessage').removeClass('hide');
      } else {
        var data = {
          name    : $scope.contact.name,
          email   : $scope.contact.email,
          number  : $scope.contact.number,
          comment : $scope.contact.comment
        };
        $http.post('resources/email.php', data)
          .success(function(data){
              $('#contactMessage div').addClass('alert-success');
              $('#contactMessage div').html(data.message);
              $('#contactMessage').removeClass('hide');
          })
          .error(function(data, status, headers, config){
            $('#contactMessage div').addClass('alert-danger');
            $('#contactMessage div').html(data.message);
            $('#contactMessage').removeClass('hide');
          });
      }
    }
  }])
  .controller('productsController', ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams) {
    $scope.active_menu = $routeParams.type;

    $scope.go = function (path) {
      $location.url(path);
    };
  }])
  .controller('itemsController', ['$scope', '$location', '$routeParams', 'productsFactory', function($scope, $location, $routeParams, productsFactory) {
    $scope.items = [];
    $scope.item_type = '';
    $scope.item_slug = '';

    $scope.init = function(type){
      $scope.items = productsFactory.getProducts();
      $scope.item_type = $routeParams.type;
      $scope.item_slug = $routeParams.slug;
    }

    $scope.getSrcSlug = function(src){
      var str = src.split('/');
      return str[2];
    }
  }]);