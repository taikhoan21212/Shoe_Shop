const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const userRoute = require("./router/user");
const authRoute = require("./router/auth");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json(),cors());

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

mongoose
.connect(process.env.MONGODB_URL)
.then(() =>{
    console.log('Database connection successful');
    app.listen(9000,()=>{
        console.log('Server is runnning!')
    });
}).catch(()=>{
    console.log(error)
});