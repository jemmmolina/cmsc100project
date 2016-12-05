'use strict';

(() => {
    angular
        .module('app')
        .controller('PeopleCtrl', PeopleCtrl);

    PeopleCtrl.$inject = ['$scope', '$location', '$cookies', 'AuthenticationService', 'PeopleService'];

    function PeopleCtrl($scope, $location, $cookies, AuthenticationService, PeopleService) {


    }
})();
