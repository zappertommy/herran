<!doctype html>
<html lang="en" data-ng-app="hbApp">
<head>
  <meta charset="utf-8">
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
  <meta content="en-US" http-equiv="content-language">
  <title>Herran Bread | Welcome to HerranBread.net</title>
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
  <meta content="Bakery, Bake Shop" name="description">
  <meta content="Herran, HerranBread, herran, herranbread, bakery, sta. ana bakery" name="keywords">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link href="/css/bootstrap.min.css" rel="stylesheet" />
  <link href="/css/styles.css" rel="stylesheet" />
  <script src="/js/jquery.min.js" type="text/javascript"></script>
  <script src="/js/bootstrap.min.js" type="text/javascript"></script>
  <script src="//maps.google.com/maps/api/js?sensor=false"></script>
  <script src="/js/angular.min.js"></script>
  <script src="/js/angular-route.min.js"></script>
  <script src="/js/angular-animate.min.js"></script>
  <script src="/js/angular-touch.min.js"></script>
  <script src="/js/lodash.compat.min.js"></script>
  <script src="/js/bluebird.js"></script>
  <script src="/js/angular-google-maps.min.js"></script>
  <script src="/js/app.js"></script>
  <script src="/js/services.js"></script>
  <script src="/js/controllers.js"></script>
  <script src="/js/filters.js"></script>
  <script src="/js/directives.js"></script>

</head>
<body>
  <div data-ng-include="'/templates/partials/header-logo.html'"></div>
  <div data-ng-include="'/templates/partials/header-menu.html'" data-ng-controller="headerController"></div>
  <div data-ng-include="'/templates/partials/slider.html'"></div>
  <div class="container">
    <div data-ng-view=""></div>
  </div>
  <div data-ng-include="'/templates/partials/footer-sections.html'"></div>
  <div data-ng-include="'/templates/partials/footer-copyright.html'"></div>
</body>
</html>