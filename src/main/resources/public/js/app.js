var callCenterCRM=angular.module("callCenterCRM",["ngRoute"]);
callCenterCRM.config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'views/index/main.html',
            controller: 'CustomerData'
        })
        .when('/customers', {
            templateUrl: 'views/customers/main.html'
        })
        .when('/users', {
            templateUrl: 'views/users/main.html'
        })
        .when('/campaigns', {
            templateUrl: 'campaigns.html'
        })
        .when('/diallist', {
            templateUrl: 'diallist.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});