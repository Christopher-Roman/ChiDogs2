const express 	= require('express');
const router 	= express.Router();
const User 		= require('../models/user');

// Login Post Route
router.post('/', async (req, res) => {
	const userEntry = {};
	userEntry.username = req.body.username;
	userEntry.password = req.body.password;
	userEntry.comments = [];
	userEntry.photo = [];
	userEntry.pet = [];
	userEntry.reply = [];

	const user = User.create(userEntry)
	req.session.username = req.body.username
	req.session.logged = true;
	res.redirect('/');
});

const bcrypt = require('bcrypt');

//Login Page
router.get('/login', (req, res) => {
	console.log(req.session);
	req.session.message = undefined;
	res.render('/user/login.ejs', {
		username: req.session.username,
		message: req.session.message
	});
});

// Register Post Route
router.post('/register', async (req, res) => {
	const password = req.body.password;
	const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
	const userEntry = {};
	userEntry.username = req.body.username;
	userEntry.password = passwordHash;
	userEntry.comments = [];
	userEntry.photo = [];
	userEntry.pet = [];
	userEntry.reply = [];
	const user = await User.create(userEntry);
	console.log(user);
	req.session.username = req.body.username;
	req.session.logged = true;
	req.session.message = undefined;
	res.redirect('/');
});

// Login Post Route
router.post('/login', async (req, res) => {
	try {
		const foundUser = User.findOne({username: req.body.username});
		if(foundUser) {
			if(bcrypt.compareSync(req.body.password, foundUser.password)) {
				req.session.username = req.body.username;
				req.session.logged = true;
				req.session.message = undefined;
				res.redirect('/');
			} else {
				req.session.message = 'Username or Password not found. Please try again.'
				res.redirect('/users/login')
			}
		} else {
			req.session.message = 'Username or password not found. Please try again'
			res.redirect('/users/login');
		}
	} catch(err) {
		res.send(err);
	}
})

// Logout Route
router.get('/logout', (req, res) => {
	req.session.destroy((err) => {
		if(err) {
			res.send(err);
		} else {
			res.redirect('/');
		}
	})
})

module.exports = router;