const mongoose = require('mongoose');
const Like = require('./like');

const photoSchema = new mongoose.Schema({
	url: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	likes: [Like.schema]
})

module.exports = mongoose.model('Photo', photoSchema);