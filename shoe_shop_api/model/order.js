const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        products: [{
            productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
            quantity: {type: Number},
            color: {type: String},
            size: {type: Number},
            img: {type: String},
            price: {type: Number},
            title: {type: String},
            gender: { type: String},
          }],
        amount: { type: Number, required: true },
        // address: { type: Object, required: true },
        information: { type: String},
        status: { type: String, default: "pending" },
      },
      { timestamps: true }
    );

module.exports = mongoose.model("Order", orderSchema );

