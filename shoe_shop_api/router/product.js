
const router = require("express").Router();
const Product = require("../model/product");

//ADD A PRODUCT
router.post("/add", async (req, res) => {
    
    const newProduct = new Product(req.body);
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET ALL PRODUCTS
 router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find().sort({ createdAt: -1 });
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET ALL PRODUCTS BY GENDER

router.get("/gender/:gender", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  const gender = req.params.gender; // Lấy giới tính từ tham số đường dẫn

  let genderValues = []; // Danh sách các giá trị liên quan đến giới tính
  if (gender === "Man") {
    genderValues = ["M", "Male", "Unsex", "Man", "Men", "Nam"];
  } else if (gender === "Woman"){
    genderValues = ["F", "Female", "Unsex", "Women", "Woman", "Nữ"];
  }

  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
        gender: { $in: genderValues }, // Sử dụng $in để tìm kiếm các giá trị trong danh sách
      });
    } else {
      products = await Product.find({ gender: { $in: genderValues } }).sort({ createdAt: -1 }); // Tìm kiếm dựa trên giới tính
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});






// //GET A PRODUCT
 router.get("/:id", async (req, res) => {
    
    try {
      debugger
      const productId = req.params.id;
      const product = await Product.findById(productId);
       // Sắp xếp mảng size_color_remaining theo kích thước từ bé đến lớn
 
       const sortedSizes = product.size_color_remaining.sort((a, b) => {
        const sizeA = a.size_remaining[0].size;
        const sizeB = b.size_remaining[0].size;
        return sizeA.localeCompare(sizeB);
      });
  
    // Gán mảng size_color_remaining đã sắp xếp lại cho sản phẩm
    product.size_color_remaining = sortedSizes;

      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  

  //get ssize_color_remaining by _id sp, color
  // router.get("/:id/:sizeColorRemainingId", async (req, res) => {
  //   try {
  //     const product = await Product.findById(req.params.id);
  //     console.log(Product);
  //     if (!product) {
  //       return res.status(404).json({ message: "Sản phẩm không tồn tại" });
  //     }
  //     const size_color_remaining = product.size_color_remaining;
  //     const sizeColorRemainingId = req.params.sizeColorRemainingId;
  
  //     const sizeColorRemaining = size_color_remaining.find(
  //       (item) => item._id.toString() === sizeColorRemainingId
  //     );
  
  //     if (!sizeColorRemaining) {
  //       return res
  //         .status(404)
  //         .json({ message: "Không tìm thấy size_color_remaining ID" });
  //     }
  
  //     res.status(200).json(sizeColorRemaining);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
 //get size_remaining by _id product, color, size
  router.get("/:id/:color/:size", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Sản phẩm không tồn tại" });
      }
      const size_color_remaining = product.size_color_remaining;
      const color = req.params.color;
  
      const sizeColorRemaining = size_color_remaining.find(
        (item) => item.color.toString() === color
      );
  
      if (!sizeColorRemaining) {
        return res
          .status(404)
          .json({ message: "Màu không toàn tại" });
      }

      const size_remaining = sizeColorRemaining.size_remaining;
      const size = req.params.size;
  
      const sizeremaining = size_remaining.find(
        (item) => item.size === size
      );
  
      if (!sizeremaining) {
        return res
          .status(404)
          .json({ message: "Size không tồn tại" });
      }
  
      res.status(200).json(sizeremaining);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// //UPDATE A PRODUCT
 router.put("/:id", async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// //DELETE A PRODUCT
 router.delete("/del/:id", async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = router;