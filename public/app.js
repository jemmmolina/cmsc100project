'use strict';

(() => {
    angular
        .module('app',['ngRoute','ngCookies'])
        .config(config)

    config.$inject = ['$routeProvider','$locationProvider'];

    function config ($routeProvider,$locationProvider) {

        $routeProvider
            .when('/login', {
                'controller':'LoginCtrl',
                'templateUrl':'views/login.view.html',
                'caseInsensitiveMatch':true
            })
            .otherwise({
                'redirectTo':'/login'
            });



        $locationProvider.html5Mode({
            enabled:true,
            requireBase:false,
            rewriteLinks:false
        });
    }

})();
