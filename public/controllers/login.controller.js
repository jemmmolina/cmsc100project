'use strict';

(() => {
    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$location', '$cookies', 'AuthenticationService'];

    function LoginCtrl($scope, $location, $cookies, AuthenticationService) {

        $scope.formData = {
            email: '',
            password: ''
        };

        $scope.login = (data) => { // login(formData)
            AuthenticationService
            .login(data)
                .then((res) => {
                    Materialize.toast(res, 3000);
                    if (res === 'Succesfully logged in!') {
                        $location.url('/home');
                    }
                })
                .catch((error) => {
                    Materialize.toast(error, 3000);
                });

        };

        $scope.signUp = (data) => { // login(formData)
            //console.log("SIGN FIRST");
            AuthenticationService
            .signUp(data)
                .then((res) => {
                    Materialize.toast(res, 3000);
                    /*if (res === 'Account successfully created!') {
                        $location.url('/home');
                    }*/
                    if (res !== 'Incomplete data!') {
                        $scope.newUserData = {};
                    }
                })
                .catch((error) => {
                    Materialize.toast(error, 3000);
                    if (res !== 'Incomplete data!') {
                        $scope.newUserData = {};
                    }
                });

        };

    }
})();
