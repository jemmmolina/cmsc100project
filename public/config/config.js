'use strict';


const url = {
    backend: 'http://localhost:8000/api'
}


const route = {
    login: '/authentication/login',
    logout: '/account/logout',
    signup: '/accounts/createAccount',
    getUser: '/users/getCurrentUser',
    getPosts: '/posts/viewPostsByUser/',
    getPostLikers: '/posts/viewPostLikers/:userId',

    //signuplogin: 'accounts/signUpPlusLogin'
}
 

const headers = {
    'content-type': 'application/x-www-form-urlencoded'
}