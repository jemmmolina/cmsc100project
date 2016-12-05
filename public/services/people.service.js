'use strict';

(() => {
    angular
        .module('app')
        .factory('PeopleService', PeopleService);


    PeopleService.$inject = ['$rootScope', '$http', '$q', '$location', '$cookies'];

    function PeopleService($rootScope, $http, $q, $location, $cookies) {
        let service = {};
        return service;
    };

})();
