'use strict'

(() => {
	angular
		.module('app')
		.controller('ProfileCtrl', ProfileCtrl);

	ProfileCtrl.$inject = ['$scope', '$location', '$cookies', 'AuthenticationService', 'ProfileService'];

    function ProfileCtrl($scope, $location, $cookies, AuthenticationService, ProfileService) {
    	$scope.user = [];

    	$scope.getUser = () => {
    		ProfileService
    		.getUser()
    			.then((res) => {
                    Materialize.toast(res, 3000);
                    if (res === 'Succesfully logged in!') {                        
                    }
                })
                .catch((error) => {
                    Materialize.toast(error, 3000);
                });
    	}
    }
})