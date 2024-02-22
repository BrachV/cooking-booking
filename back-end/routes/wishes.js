const express = require("express");
const router = express.Router();
const wishesController = require("../controllers/wishesController");

router.post("/", wishesController.createWish);
router.get("/", wishesController.getAllWishes);
router.get("/:id", wishesController.getWishById);
router.put("/:id", wishesController.updateWish);
router.delete("/:id", wishesController.deleteWish);

module.exports = router;