/* 'use strict';
var myApp = angular.module('myApp',['ngRoute'])
.config(['$routeProvider' , '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'templates/home.html',
    controller : 'homeCtrl'
  })
  .when('/service', {
    templateUrl : 'templates/service.html',
    controller : 'serviceCtrl'
  })
  .when('/price', {
    templateUrl : 'templates/price.html',
    controller : 'priceCtrl'
  })
  .when('/team', {
    templateUrl : 'templates/team.html',
    controller : 'teamCtrl'
  })
  .when('/client', {
    templateUrl : 'templates/client.html',
    controller : 'clientCtrl'
  })
  .when('/contac', {
        templateUrl : 'templates/contact.html',
        controller : 'contactCtrl'
        })
  .otherwise({redirectTo : '/'});
}]);
*/
'use strict';
var myApp = angular.module('myApp', ['ngRoute'])
  .config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'templates/home.html'
       // controller : 'homeCtrl'
    })
    .when('/client', {
        templateUrl : 'templates/client.html'
        //controller : 'clientCtrl'
    })
    .when('/contact', {
        templateUrl : 'templates/contact.html'
        //controller : 'contactCtrl'
    })
    .when('/price', {
        templateUrl : 'templates/price.html'
       // controller : 'priceCtrl'
    })
    .when('/service', {
        templateUrl : 'templates/service.html'
       // controller : 'serviceCtrl'
    })
    .when('/team', {
        templateUrl : 'templates/team.html'
        //controller : 'teamCtrl'
    })
    .otherwise({redirectTo : '/'});

    $locationProvider.html5Mode(true);

  }])

  .service('RestaurantService', function() {
    var cart = [];
  });

