import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';


const app= express();


app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(cors()); 
app.use('/posts',postRoutes);
app.use('/user',userRoutes);

const CONNECTION_URL = 'mongodb+srv://SubratSahai:subrat29@cluster0.corzcwq.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);
