import express from 'express'
import { MONGODB_URI, SESSION_SECRET } from './util/secrets'
import mongoose from 'mongoose'
import cors from 'cors'

import * as exerciseController from './controllers/exercise'
import * as userController from './controllers/users'
import * as loginController from './controllers/login'

const app = express();

// connect to MongoDB
const uri = MONGODB_URI;
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
	autoIndex: false, // Don't build indexes
	poolSize: 10, // Maintain up to 10 socket connections
};
mongoose.connect(uri, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
	console.log('succesfully connected to mongodb')
})



// Express Configuration
app.set("port", process.env.PORT || 3000);
app.use(cors());
app.use(express.json());

/**
	* Primary API Routes
	*/
app.get('/', (_req, res) => {
	console.log('someone pinged here');
	res.send('pong')
})

///////////////////////////////////////////////////////////////////////////////
//                                Exercise Api                               //
///////////////////////////////////////////////////////////////////////////////

app.get('/api/exercises', exerciseController.getExercisesApi);
app.post('/api/exercises', exerciseController.addExerciseApi);

///////////////////////////////////////////////////////////////////////////////
//                                 Users Api                                 //
///////////////////////////////////////////////////////////////////////////////


app.get('/api/users', userController.getUsersApi);
app.post('/api/users', userController.addUserApi);

///////////////////////////////////////////////////////////////////////////////
//                                   Login                                   //
///////////////////////////////////////////////////////////////////////////////

app.post('/api/login', loginController.loginUserApi)







export default app;
