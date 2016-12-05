'use strict';

(() => {
    angular
        .module('app')
        .controller('SignupCtrl', SignupCtrl);

    SignupCtrl.$inject = ['$scope', '$location', '$cookies', 'SignupService'];

    function SignupCtrl($scope, $filter, SignupService) {

        $scope.formData = {
            email: '',
            password: '',
            name: ''
        };


        $scope.signup = (data) => { // login(formData)
            SignupService
            .signup(data)
                .then((res) => {
                    Materialize.toast(res, 3000);
                })
                .catch((error) => {
                    Materialize.toast(error, 3000);
                });
        };
    }
})();
