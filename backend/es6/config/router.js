var users          = require('../controllers/users');
var posts          = require('../controllers/posts');
var circles        = require('../controllers/circles');
var accounts       = require('../controllers/accounts');
var authentication = require('../controllers/authentication');
var middleware	   = require('./session_middleware');

module.exports = function(router) {

	router.del = router.delete;

	//authentication routes
	router.post('/authentication/login', authentication.login);

	//circles routes
	router.get ('/circles/viewAllCircles', middleware, circles.viewAllCircles);
	router.post('/circles/createCircle', middleware, circles.createCircle);
	router.put ('/circles/updateCircle', middleware, circles.updateCircle);
	router.del ( '/circles/deleteCircle', middleware, circles.deleteCircle);

	//posts routes
	router.get ('/posts/viewPosts', middleware, posts.viewAllPosts);
	router.get ('/posts/viewSpecificPosts/:postId', middleware, posts.viewSpecificPosts);
	router.get ('/posts/viewPostsByUser/:userId', middleware, posts.viewPostsByUser);
	router.post('/posts/createPost', middleware, posts.createPost);
	router.put ('/posts/updatePost', middleware, posts.updatePost);
	router.del ('/posts/deletePost', middleware, posts.deletePost);

	//users routes
	router.get ('/users/searchUser/:name', middleware, users.searchUser);

	//accounts routes
	router.post('/accounts/createAccount', accounts.createAccount);
	router.get ('/accounts/viewAccounts', middleware, accounts.viewAllAccounts);

	router.all('*', function (req, res, next) {
		res.send(404, {message : 'Nothing to do here.'});
	});

	return router;
};
