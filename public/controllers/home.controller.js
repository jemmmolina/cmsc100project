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
        $scope.posts = [];
        $scope.name = [];

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

        $scope.viewPost = () => { // login(formData)
        	HomeService
        	.viewAllPosts()
	        	.then((res) => {
	        		$scope.posts = res;
	        		//HomeService.getName(res.userid);
	        	})
	        	.catch((error) => {
	        		Materialize.toast(error, 3000);
	        	});
        };

        $scope.getName = (userId) => {
        	HomeService
        	.getUserName(userId)
        		.then((res) => {
	        		$scope.name = res;
	        	})
	        	.catch((error) => {
	        		Materialize.toast(error, 3000);
	        	});
        }
    }
})();
