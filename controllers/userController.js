const express = require('express');
const router = express.Router();
const User = require('../models/user');

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
	req.session.message = undefined;
	req.render('/user/login.ejs', {
		username: req.session.username,
		message: req.session.message
	});
});

// Register Post Route
router.post('/register', async (req, res) => {
	const password = req.body.password;
	const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSinc(10));
	const userEntry = {};
	userEntry.username = req.body.username;
	userEntry.password = passwordHash;
	const user = await User.create(userEntry);
	req.session.username = req.body.username;
	req.session.logged = true;
	req.session.message = undefined;
	res.redirect('/');
})

module.exports = router;