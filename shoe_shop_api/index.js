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
app.use(bodyParser.json({limit:"50mb"}));
app.use(helmet());
app.use(cors());

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
app.use("/v1/user", userRoute)
app.use("/v1/cart", cartRoute)

