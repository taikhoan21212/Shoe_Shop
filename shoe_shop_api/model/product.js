const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
title: { type: String, required: true, unique: true },
price: { type: Number, required: true },
brand: { type: String, required: true },
img: [{ type: String }],
size_color_remaining: [
  {
    color: { type: String },
    size_remaining: [
      {
        size: { type: String },
        remaining: { type: Number },

      }
    ]
  }
],
category: { type: String, required: true },
description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema );

