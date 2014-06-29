var yamatoApp = angular.module('yamatoApp', [
  'ngRoute',
  'propertyControllers'
]);

yamatoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/property-list', {
        templateUrl: 'partials/property-list.html',
        controller: 'PropertyListCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]
);