const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors')
const session = require('express-session');

//Models
const User = require('./models/user');
const Pet = require('./models/pet');
const Photo = require('./models/photo');
const Comment = require('./models/comment');
const Reply = require('./models/reply');
const Like = require('./models/like');

//Controllers
const userController = require('./controllers/userController');
const petController = require('./controllers/petController');
const photoController = require('./controllers/photoController');
const commentController = require('./controllers/commentController');
const replyController = require('./controllers/replyController');

//Database
require('./db/db');
app.use(session({
	secret: 'secret question information stuff.',
	resave: false,
	saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json())

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	optionsSussessStatus: 200
};
app.use(cors(corsOptions));

// Required Controller
app.use('/user', userController);
app.use('/pet', petController);
app.use('/comment', commentController);
app.use('/reply', replyController);
app.use('/photo', photoController);

app.listen(PORT || 3000, () => {
	console.log('Server listening ' + PORT);
})