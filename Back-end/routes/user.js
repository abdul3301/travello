const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUsers,
  saveContactUs,
  getAllProducts,
  getWishListProducts,
  addProductToWishList,
  removeFromWishList,
} = require("../controllers/users");

const router = express.Router();

router.get("/users/all", getUsers);

router.post("/user/register", registerUser);

// Login Handle
router.post("/user/login", loginUser);

// Logout Handle
router.get("/user/logout", logoutUser);

//save contact_us forma details
router.post("/user/contact", saveContactUs);

//products
router.get("/products", getAllProducts);

//wishlist
router.get("/user/wishlist", getWishListProducts);
router.post("/user/wishlist", addProductToWishList);
router.put("/user/wishlist", removeFromWishList);

module.exports = router;
