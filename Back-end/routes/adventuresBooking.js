const router = require("express").Router();

const {
  createBooking,
  findBookingOrder,
  updateBooking,
  deleteOrder,
  getBookingOrderByeUserID,
} = require("../controllers/adventuresBooking");

//CREATE an BOOKING Order
router.post("/", createBooking);

router.put("/id:", updateBooking);
//DELETE
router.delete("/", deleteOrder);
//GET USER ORDERS by userID
router.get("/find/:userId", getBookingOrderByeUserID);

router.get("/", findBookingOrder);

module.exports = router;
