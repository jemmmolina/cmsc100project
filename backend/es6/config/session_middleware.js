'use strict'

module.exports = (req, res, next) => {
    console.log(req.session);
	if (typeof req.session !== 'undefined' && typeof req.session.user !== 'undefined') {
		next();
	}
	else {
		res.status(401).send({message: 'Access denied!'});
	}
}
