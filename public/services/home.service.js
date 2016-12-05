'use strict';

(() => {
    angular
        .module('app')
        .factory('HomeService', HomeService);


    HomeService.$inject = ['$rootScope', '$http', '$q', '$location', '$cookies', 'Base64'];

    function HomeService($rootScope, $http, $q, $location, $cookies, Base64) {
        let service = {};
        return service;
    };

})();
