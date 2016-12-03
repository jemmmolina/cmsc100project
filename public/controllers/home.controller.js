'use strict';

(() => {
    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$location', '$cookies', 'AuthenticationService', 'HomeService'];

    function HomeCtrl($scope, $location, $cookies, AuthenticationService, HomeService) {


    }
})();
