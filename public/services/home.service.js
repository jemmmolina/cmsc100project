'use strict';

(() => {
    angular
        .module('app')
        .factory('HomeService', HomeService);


    HomeService.$inject = ['$rootScope', '$http', '$q', '$location', '$cookies'];

    function HomeService($rootScope, $http, $q, $location, $cookies) {

        const createPost = (data) => {
            
            let deferred = $q.defer();

            $http({
                method: 'POST',
                url: url.backend + route.createPost,
                data: $.param(data),
                headers: headers,
                withCredentials: true
            })
            .then((res) => {
                    deferred.resolve(res.data.message);
                    if (res.data.message === 'post successfully created') {
                        Materialize.toast(res.data.message, 3000);
                    }
                },(error) => {
                    deferred.reject(error.data.message);
                });

            return deferred.promise;
        }

        let service = {};
        service.createPost = createPost;
        return service;
    };

})();
