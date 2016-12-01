'use strict';

(() => {
    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$location', '$cookies', 'AuthenticationService'];

    function LoginCtrl($scope, $location, $cookies, AuthenticationService) {

        $scope.formData = {
            username: '',
            password: ''
        };



        $scope.login = (data) => {

            AuthenticationService
            .login(data)
                .then((res) => {
                    
                })
                .catch((error) => {
                    
                });

        };

    }
})();
