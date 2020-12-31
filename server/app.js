const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

//middleWare
app.use(cors());
app.use(express.json());

//route
app.use('/api/job', require('./route/jobRoute'));

app.listen((process.env.PORT), () => {
    console.log(`server connected on port ${process.env.PORT}`);
});

mongoose.connect((process.env.MONGODB), {useNewUrlParser:true, useUnifiedTopology:true}, (err) => {
    if(!err){
        console.log('Database connected');
    }else{
        console.log(err);
    }
});

