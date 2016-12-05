'use strict';

(() => {
    angular
        .module('app')
        .factory('HomeService', HomeService);


    HomeService.$inject = ['$rootScope', '$http', '$q', '$location', '$cookies'];

    function HomeService($rootScope, $http, $q, $location, $cookies) {
        let service = {};
        return service;
    };

})();
