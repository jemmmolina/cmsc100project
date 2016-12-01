var accounts = require('../controllers/accounts');
var posts = require('../controllers/posts');
var circles = require('../controllers/circles');
var users = require('../controllers/users');
var authentication = require('../controllers/authentication');

module.exports = function(router) {	

	router.del = router.delete;

	//authentication routes
	router.post('/authentication/login', authentication.login);

	//circles routes
	router.get ('/circles/viewAllCircles', circles.viewAllCircles);
	router.post('/circles/createCircle', circles.createCircle);
	router.put ('/circles/updateCircle', circles.updateCircle);
	router.del( '/circles/deleteCircle', circles.deleteCircle);

	//posts routes
	router.get ('/posts/viewPosts', posts.viewAllPosts);
	router.get ('/posts/viewSpecificPosts', posts.viewSpecificPosts);
	router.get ('/posts/viewPostsByUser', posts.viewPostsByUser);
	router.post('/posts/createPost', posts.createPost);
	router.put ('/posts/updatePost', posts.updatePost);
	router.del ('/posts/deletePost', posts.deletePost);

	//users routes
	router.post('/users/searchUser', users.searchUser);

	//accounts routes
	router.post('/accounts/createAccount', accounts.createAccount);
	router.get ('/accounts/viewAccounts', accounts.viewAllAccounts);

	router.all('*', function (req, res, next) {
		res.send(404, {message : 'Nothing to do here.'});
	});
	
	return router;	
};
