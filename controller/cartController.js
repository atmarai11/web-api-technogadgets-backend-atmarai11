const Product = require("../model/productModel");
const Cart = require("../model/cartModel");

const getCart = async (req, res) => {
  try {
    const userId = req.customer._id;

    if (!userId) throw new Error("No user found!");

    const cartData = await Cart.find({ userId });

    if (cartData) res.json({ data: cartData });
    else throw new Error("Error while getting cart details!");
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
};

const addCart = async (req, res) => {
  try {
    const userId = req.customer._id;
    const productId = req.params.productId;
    const quantity = req.body.quantity;

    if (!userId) throw new Error("No user found!");
    if (!productId) throw new Error("No any product found!");
    if (!quantity) throw new Error("Please fill all the fields!");

    // const authorizedUser = await Product.find({ userId });

    // if (!authorizedUser) throw new Error("User not authorized!");

    const { price: unitPrice, name: productName } = await Product.findById(
      productId
    );

    const total = +quantity * +unitPrice;

    const data = await Cart.create({
      userId,
      productId,
      quantity,
      total,
      productName,
    });

    if (data) res.json({ message: "Cart added successfully!", data });
    else throw new Error("Cart addition failed!");
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
};

module.exports = { getCart, addCart };
