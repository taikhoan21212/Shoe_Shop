const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const userRoute = require("./routes/user");
const cartRoute = require("./routes/cart");
const authRoute = require("./routes/auth");
app.use(bodyParser.json({limit:"50mb"}));
app.use(helmet());
app.use(cors());

const imageRoute = require('./routes/imageLoad');
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true, parameterLimit: 50000}));

dotenv.config();
//CONNECT DATABASE
const MONGODB_URL = process.env.DB_URL;
mongoose
.connect(MONGODB_URL)
.then(() =>{
    console.log('Database connection successful');
    app.listen(process.env.PORT || 8000,()=>{
        console.log('Server is runnning!')
    });
}).catch((error)=>{
    console.error(error)
});



//ROUTES
app.use("/v1/products", productRoute);
app.use("/v1/order", orderRoute);
app.use("/v1/user", userRoute);
app.use("/v1/cart", cartRoute);
app.use('/v1/auth', authRoute);
app.use('/v1/image', imageRoute);
