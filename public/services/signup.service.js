'use strict';

(() => {
    angular
        .module('app')
        .factory('SignupService', SignupService);


    SignupService.$inject = ['$rootScope', '$http', '$q', '$location', '$cookies', 'Base64'];

    function SignupService($rootScope, $http, $q, $location, $cookies, Base64) {

        const signup = (data) => {

            let deferred = $q.defer();

            $http({
                method: 'POST',
                url: url.backend + route.signup,
                data: $.param(data),
                headers: headers,
                withCredentials: true
            })
            .then((res) => {
                    deferred.resolve(res.data.message);                    
                },(error) => {
                    deferred.reject(error.data.message);
                });

            return deferred.promise;
        };

        let service = {};
                
        service.signup           = signup;

        return service;
    };
})();
