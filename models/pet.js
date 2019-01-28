const mongoose = require('mongoose');
const User = require('./user');

const petSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	breed: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	weight: {
		type: Number,
		required: true
	},
	favTreat: {
		type: String,
		required: true
	},
	likesPeople: {
		type: String,
		required: true
	},
	likesDogs: {
		type: String,
		required: true
	},
	fixed: {
		type: String,
		required: true
	},
	favActivity: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Pet', petSchema);