const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "desc is required"],
      trim: true,
    },
    imgUrl: {
      type: String,
      required: [true, "imgUrl is required"],
      trim: true,
    },
    category: {
        type: String,
        required: [true, "category is required"],
        trim: true,
    },
    productUrl: {
        type: String,
        required: [true, "category is required"],
        trim: true,
    }
  },
  { timestamps: true }
);

const allProducts = mongoose.model("Product", ProductsSchema);

module.exports = allProducts;
