const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(

    {
        title: { type: String, required: true, unique: true },
        price: { type: String, required: true },
        brand: { type: String, required: true },
        color_size_remaining_img: [
          {
            color: { type: String },
            size: { type: Number },
            remaining: { type: Number },
            img: { type: Array },
          }
        ],
        category: { type: Array, required: true },
        description: { type: String },
      },{ timestamps: true })

module.exports = mongoose.model("Product", productSchema );

