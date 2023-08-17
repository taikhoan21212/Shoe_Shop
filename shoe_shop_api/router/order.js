const Order = require("../model/order");
const Product = require('../model/product');
const router = require("express").Router();
const Cart = require("../model/cart");

// router.post("/add", async (req, res) => {
//     const newOrder = new Order(req.body);
  
//     try {
//       const savedOrder = await newOrder.save();
//       res.status(200).json(savedOrder);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// thêm đơn hàng ,trừ số lượng sp đã được nhập sẵn bên product đồng thời xóa giỏ hàng
router.post("/add", async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    for (const productItem of req.body.products) {
      const product = await Product.findById(productItem.productId);
      if (!product) {
        return res.status(404).json({ message: "Sản phẩm không tồn tại" });
      }
      const size_color_remaining = product.size_color_remaining;
      const color = productItem.color;
  
      const sizeColorRemaining = size_color_remaining.find(
        (item) => item.color.toString() === color
      );
  
      if (!sizeColorRemaining) {
        return res.status(404).json({ message: "Màu không tồn tại" });
      }
  
      for (const sizeRemainingItem of sizeColorRemaining.size_remaining) {
        const size = sizeRemainingItem.size;
  
        if (size === productItem.size) {
          if (sizeRemainingItem.remaining < productItem.quantity) {
            return res.status(400).json({
              message: "Số lượng không đủ",
              remainingQuantity: sizeRemainingItem.quantity,
            });
          }
  
          sizeRemainingItem.remaining -= productItem.quantity;
          break; // Khi tìm thấy size phù hợp, thoát khỏi vòng lặp
        }
      }
  
      try {
        const updatedProduct = await product.save();
        console.log("Sản phẩm đã được cập nhật thành công");
      } catch (err) {
        console.log("Lỗi khi cập nhật sản phẩm:", err);
      }
    }
  
    try {
      const deletedCart = await Cart.findOneAndDelete({ userId: req.body.userId });
      if (!deletedCart) {
        return res.status(404).json({ message: "Cart không tồn tại" });
      }
      console.log("Cart đã bị xóa thành công");
    } catch (err) {
      console.log("Lỗi khi xóa Cart:", err);
    }
  
    const savedOrder = await newOrder.save();
    console.log("Order đã được lưu thành công");
    res.status(200).json(savedOrder);
  } catch (err) {
    console.log("Lỗi chung:", err);
    res.status(500).json(err);
  }});

  router.put("/:id",   async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete("/:id",   async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/find/:userId", async (req, res) => {
    try {
      const orders = await Order.find({ userId: req.params.userId });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/",   async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/income",   async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;