const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
	console.log(`MongoDB database connection established successfully`);
});

// Routes
const excercisesRouter = require('./routes/excercises');
const userRouter = require('./routes/users');
// use the routes
app.use('/excercises', excercisesRouter);
app.use('/users', userRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
