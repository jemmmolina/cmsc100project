'use strict';

(() => {
    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$location', '$cookies', 'AuthenticationService', 'HomeService', 'ProfileService'];

    function HomeCtrl($scope, $location, $cookies, AuthenticationService, HomeService, ProfileService) {

        $scope.postData = {
            postContent: '',
        };
        $scope.user;

        $scope.startPost = (data) => { // login(formData)

        	ProfileService
        	.getUser()
	        	.then((res) => {
	        		$scope.user = res;
	        		data.userId = res.userid;
	        		console.log(data);
	        		HomeService.createPost(data);
	        	})
	        	.catch((error) => {
	        		Materialize.toast(error, 3000);
	        	});
        };
    }
})();
