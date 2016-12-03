'use strict';

(() => {
    angular
        .module('app')
        .factory('Base64', Base64)
        .factory('AuthenticationService', AuthenticationService);


    AuthenticationService.$inject = ['$rootScope', '$http', '$q', '$location', '$cookies', 'Base64'];

    function AuthenticationService($rootScope, $http, $q, $location, $cookies, Base64) {

        const clearCredentials = () => {

            $rootScope.globals = {};
            $cookies.remove('globals');
            $cookies.remove('role');
            $cookies.remove('data');

        };



        const setCredentials = (username, role) => {

            let expires  = new Date();
            expires.setHours(expires.getHours() + 2);

            $rootScope.globals = {
                current_user: {
                    username: username
                }
            };

            $cookies.putObject('globals', $rootScope.globals, { expires: expires });
            $cookies.putObject('role', role[1], { expires: expires });

        }



        const login = (data) => {
            //console.log("logging in");
            let deferred = $q.defer();
            //console.log($.param(data));
            $http({
                method: 'POST',
                url: url.backend + route.login,
                data: $.param(data),
                headers: headers,
                withCredentials: true
            })
            .then((res) => {
                    deferred.resolve(res.data.message);
                    if (res.data.status === 'Succesfully Logged In!') {
                        $cookies.putObject('data', JSON.stringify(res.data));
                        setCredentials(data.username, res.data.roles);
                    }
                    else if (res.status === 404) {
                        Materialize.toast('User does not exist', 3000);
                    }
                },(error) => {
                    deferred.reject(error.data.message);
                });

            return deferred.promise;

        };
        const signUp = (data) => {
            //console.log("signing up");
            let deferred = $q.defer();
            console.log($.param(data));
            $http({
                method: 'POST',
                url: url.backend + route.signup,
                data: $.param(data),
                headers: headers,
                withCredentials: true
            })
            .then((res) => {
                    //console.log("1");
                    deferred.resolve(res.data.message);
                    if (res.data.status === 'account successfully created!') {
                        $cookies.putObject('data', JSON.stringify(res.data));
                        setCredentials(data.username, res.data.roles);
                    }
                    else if (res.data.status === 'Password exists!') {
                        Materialize.toast('Password exists', 3000);
                    }
                    else if(res.status === 404){
                        Materialize.toast('User already exists', 3000);
                    }
                },(error) => {
                    deferred.reject(error.data.message);
                });

            return deferred.promise;

        };


        const logout = () => {
            //console.log("LOG OUT");
            let deferred = $q.defer();

            $http({
                method: 'GET',
                url: url.backend + route.logout,
                headers: headers,
                withCredentials: true
            })
            .then((res) => {
                    deferred.resolve(res.data);
                    if (res.data.message === 'Successfully logged out') {
                        clearCredentials();
                    }
                },(error) => {
                    deferred.reject(error.data);
                });

            return deferred.promise;

        }



        let service = {};

        service.clearCredentials = clearCredentials;
        service.setCredentials   = setCredentials;
        service.login            = login;
        service.logout           = logout;
        service.signUp           = signUp;

        return service;
    };



    function Base64() {
        let keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

        return {
            encode: (input) => {
                let output = '';
                let chr1, chr2, chr3 = '';
                let enc1, enc2, enc3, enc4 = '';
                let i = 0;

                do {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);

                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;

                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }

                    output = output +
                        keyStr.charAt(enc1) +
                        keyStr.charAt(enc2) +
                        keyStr.charAt(enc3) +
                        keyStr.charAt(enc4);
                    chr1 = chr2 = chr3 = '';
                    enc1 = enc2 = enc3 = enc4 = '';
                } while (i < input.length);

                return output;
            },

            decode: (input) => {
                let output = '';
                let chr1, chr2, chr3 = '';
                let enc1, enc2, enc3, enc4 = '';
                let i = 0;

                // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
                let base64test = /[^A-Za-z0-9\+\/\=]/g;
                if (base64test.exec(input)) {
                    alert('There were invalid base64 characters in the input text.\n' +
                        'Valid base64 characters are A-Z, a-z, 0-9, "+", "/",and "="\n' +
                        'Expect errors in decoding.');
                }
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

                do {
                    enc1 = keyStr.indexOf(input.charAt(i++));
                    enc2 = keyStr.indexOf(input.charAt(i++));
                    enc3 = keyStr.indexOf(input.charAt(i++));
                    enc4 = keyStr.indexOf(input.charAt(i++));

                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;

                    output = output + String.fromCharCode(chr1);

                    if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3);
                    }

                    chr1 = chr2 = chr3 = '';
                    enc1 = enc2 = enc3 = enc4 = '';

                } while (i < input.length);

                return output;
            }
        }
    };

})();
