const express 	= require('express');
const router 	= express.Router();
const Reply 	= require('../models/reply');
const User 		= require('../models/user')
const Comment 	= require('../models/comment');
const Pet 		= require('../models/pet')
const Photo 	= require('../models/photo')
const Like 		= require('../models/like')

//Pet Get Route
router.get('/:index/new', async (req, res) => {
	try {
		if(req.session.logged) {
			const allPets = await Pet.find();
			res.json({
				status: 200,
				data: foundPet
			});
		} else {
			req.session.message = 'You must be logged in to view your pets.'
		}
	} catch(err) {
		console.log(err);
	}
});

// Pet Create Route
router.post('/:')


module.exports = router;