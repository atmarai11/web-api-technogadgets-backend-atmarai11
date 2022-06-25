const Product = require("../model/productModel");
const Customer = require("../model/customerModel");
const addProduct = async (req, res) => {
  const customerData = req.customer;
  console.log(customerData);

  const {
    name,
    description,
    quantity,
    price,
    writerName,
    publicationName,
    category,
    releaseYear,
  } = req.body;

  const nameExists = await Product.findOne({ name });

  try {
    if (!customerData) {
      throw new Error("User not authorized.");
    }

    // If book name already exists.
    if (nameExists) {
      throw new Error("Book name already exists.");
    }

    const imgFile = req.file;

    if (!imgFile) {
      throw new Error("Please upload image.");
    }

    if (imgFile) {
      const imgFileName = req.file.filename;

      let basePath;

      if (req.get("host").includes("10.0.2.2")) {
        basePath = `${req.protocol}://${req
          .get("host")
          .replace("10.0.2.2", "localhost")}/public/uploads/`;
      } else {
        basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
      }

      const imgUrl = basePath + imgFileName;

      const productData = await Product.create({
        name,
        description,
        price,
        quantity,
        writerName,
        publicationName,
        category,
        imgUrl,
        releaseYear,
        customerId: customerData._id,
      });

      if (productData) {
        res.send({ message: "Product added successfully." });
      } else {
        throw new Error("Product addition failed.");
      }
    }
  } catch (err) {
    res.json({ errorMessage: err.message, stack: err.stack });
  }
};

const getProduct = async (req, res) => {
  try {
    const { category } = req.params;

    const categoryWiseData = await Product.find({ category });

    if (categoryWiseData) {
      res.json({ data: categoryWiseData });
    } else {
      res.json({ message: `No any product found for category ${category}` });
    }
  } catch (err) {
    res.json({ errorMessage: err.message, stack: err.stack });
  }
};

module.exports = { addProduct, getProduct };
