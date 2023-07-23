const Cart = require("../model/cart");
const express = require('express').Router;

const router = require("express").Router();

router.post("/add", async (req, res) => {
    const newCart = new Cart(req.body);
  
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put("/:id",async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete("/:id",   async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/find/:userId", async (req, res) => {
    try {
      const carts = await Cart.find({ userId: req.params.userId });
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post("/find/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const { products } = req.body;
  
      // Find the cart by userId
      const cart = await Cart.findOne({ userId });
  
      if (!cart) {
        return res.status(404).json({ error: "Cart not found" });
      }
  
      cart.products = products;
  
      const savedCart = await cart.save();
  
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//all
  router.get("/",  async (req, res) => {
    try {
      const carts = await Cart.find({});
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

 
module.exports = router;