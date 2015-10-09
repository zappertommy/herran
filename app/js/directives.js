'use strict';

/* Directives */


angular.module('hbApp.directives', [])
  .directive('slider', ['$timeout', function($timeout) {
    return {
      restrict: 'AE',
      replace : true,
      scope: {
        images: '='
      },
      link    : function(scope, elm, attrs) {
        var timer;

        var sliderFunc = function() {
          timer = $timeout(function() {
            scope.next();
            timer = $timeout(sliderFunc, 5000);
          }, 5000);
        };

        scope.currentIndex = 0; // Initially the index is at the first image

        scope.next = function() {
          scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
        };

        scope.prev = function() {
          scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
        };

        scope.goPic = function(cnt) {
          scope.currentIndex = cnt;
          $('.hb-slider-point span').removeClass('active');
          $('.slide-circle'+cnt).addClass('active');
        };

        scope.$watch('currentIndex', function() {
          scope.images.forEach(function(image) {
            image.visible = false; // make every image invisible
            $('.hb-slider-point span').removeClass('active');
          });

          scope.images[scope.currentIndex].visible = true; // make the current image visible
          $('.slide-circle'+scope.currentIndex).addClass('active');
        });

        /* Start: For Automatic slideshow*/
        sliderFunc();

        scope.$on('$destroy',function(){
          $timeout.cancel(timer);
        });

        /* End : For Automatic slideshow*/
        angular.element(document.querySelectorAll('.hb-slider-point')).one('click',function() {
          $timeout.cancel(timer);
        });
      },
      templateUrl: 'partials/slider.html'
    };
  }])
  .directive('promos', [function() {
    return {
      restrict: 'AE',
      replace : true,
      scope: {
        images: '='
      },
      link    : function(scope, elm, attrs) {
        scope.moveLeft = function(){
          var obj = $('.promos ul');
          var pos = parseInt(obj.css('left'));
          if (pos < 0) {
            obj.animate({
              left: pos + 200
            },500);

          }
        };

        scope.moveRight = function(){
          var obj = $('.promos ul');
          var box_width = 0;
          $('.promos ul li').each(function(i,v){
            if (i > 1)
              box_width = box_width + $(this).outerWidth();
          });
          var pos = parseInt(obj.css('left'));
          if ((box_width * -1) < pos) {
            obj.animate({
              left: pos - 200
            },500);
          }
        };
      },
      templateUrl: 'partials/promo.html'
    };
  }]);