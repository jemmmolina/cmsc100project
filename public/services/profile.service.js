'use strict';

(() => {

	angular
		.module('app')
		.factory('ProfileService', ProfileService);

	ProfileService.$inject = ['$http', '$q', '$location'];

	function ProfileService($http, $q, $location) {
		
		const getUser = () => {
    		let deferred = $q.defer();

            $http({
                method: 'GET',
                url: url.backend + route.getUser,
                headers: headers,
                withCredentials: true
            })
            .then((res) => {
                    deferred.resolve(res.data[0]);                    
                },(error) => {
                    deferred.reject(error.data);
                });

            return deferred.promise;
    	}


    	let service = {};

        service.getUser = getUser;
        

        return service;
	}

})();