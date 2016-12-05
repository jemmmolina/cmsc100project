'use strict';

(() => {
	angular
		.module('app')
		.controller('ProfileCtrl', ProfileCtrl);

	ProfileCtrl.$inject = ['$scope', '$location', '$cookies', 'AuthenticationService', 'ProfileService'];

    function ProfileCtrl($scope, $location, $cookies, AuthenticationService, ProfileService) {
    	$scope.user;
        $scope.posts = [];
        $scope.postLikers = [];
        $scope.comments = [];
        $scope.commentLikers = [];

    	const getUserData = () => {
    		ProfileService
    		.getUser()
    			.then((res) => {
                    $scope.user = res;   
                    loadOwnPosts(res.userId);
                    loadPostLikers(res.userId);
                    loadComments(res.userId);
                    loadCommentLikers(res.userId);
                })
                .catch((error) => {
                    Materialize.toast(error, 3000);
                });
        }

        const loadOwnPosts = (userId) => {
            ProfileService
            .getPosts(userId)
                .then((res) => {
                    $scope.posts = res;
                })
                .catch((error) => {
                    Materialize.toast(error, 3000);
                });
        }

        const loadPostLikers = (userId) => {
            ProfileService
            .getPostLikers(userId)
                .then((res) => {
                    $scope.postLikers = res;
                })
                .catch((error) => {
                    Materialize.toast(error, 3000);
                });
        }

        $scope.onLoad = () => {
            getUserData();
        }
    }
})();