'use strict';


const url = {
    backend: 'http://localhost:8000/api'
}


const route = {
	getPosts: '/posts/viewPosts',
	createPost: '/posts/createPost',
    login: '/authentication/login',
    logout: '/account/logout',
    signup: '/accounts/createAccount',
    getUser: '/users/getCurrentUser',
    getsName: '/users/getUserName/:userId'
    //signuplogin: 'accounts/signUpPlusLogin'
}
 

const headers = {
    'content-type': 'application/x-www-form-urlencoded'
}