'use strict';

(() => {
    angular
        .module('app')
        .factory('ProfileService', ProfileService);


    ProfileService.$inject = ['$scope', '$http', '$q', '$location'];

    function ProfileService($scope, $http, $q, $location) {

    	const getUser = () => {
    		let deferred = $q.defer();

            $http({
                method: 'GET',
                url: url.backend + route.getUser,
                headers: headers,
                withCredentials: true
            })
            .then((res) => {
                    deferred.resolve(res.data);
                    if (res.data.message === '') {                        
                    }
                },(error) => {
                    deferred.reject(error.data);
                });

            return deferred.promise;
    	}


    	let service = {};

        service.getUser = getUser;
        

        return service;

    }

    

 }) 