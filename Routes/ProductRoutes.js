const express = require("express");
const router = express.Router();

const checkAuth = require("../middlewares/check-auth");
const productController = require("../Controller/Product");
const upload = require("../Middleware/Upload");

router.get("/", productController.fetchProducts);
router.get("/fetch-product/:productId", productController.fetchProduct);
router.post("/add-product", upload.single("image"), productController.addProduct);
router.post("/edit-product", upload.single("image"), productController.editProduct);
router.delete("/delete-product", productController.deleteProduct);

module.exports = router;
