'use strict';

(() => {
	angular
		.module('app')
		.controller('ProfileCtrl', ProfileCtrl);

	ProfileCtrl.$inject = ['$scope', '$location', '$cookies', 'AuthenticationService', 'ProfileService'];

    function ProfileCtrl($scope, $location, $cookies, AuthenticationService, ProfileService) {
    	$scope.user;

    	$scope.getUser = () => {
    		ProfileService
    		.getUser()
    			.then((res) => {
                    $scope.user = res;
                })
                .catch((error) => {
                    Materialize.toast(error, 3000);
                });
    	}
    }
})();