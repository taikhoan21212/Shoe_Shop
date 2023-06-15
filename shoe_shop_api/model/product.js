const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
       // img: { type: String, required: true },
        price: { type: Number, required:true},
        size: { type: Array },
        color: { type: Array },
        category:{ type: Array, required: true},
        reamaining: {type: Number, required:true },
},{ timestamps: true }
)

module.exports = mongoose.model("Product", productSchema );

