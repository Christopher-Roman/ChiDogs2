const mongoose = require('mongoose');
const Comment = require('./comment');
const Pet = require('./pet');
const Like = require('./like');
const Photo = require('./photo');
const Reply = require('./reply');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	comments: [Comment.schema],
	photos: [Photo.schema],
	pets: [Pet.schema],
	likes: [Like.schema],
	reply: [Reply.schema]
});

module.exports = mongoose.model('User', userSchema);