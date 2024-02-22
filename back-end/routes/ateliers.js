const express = require("express");
const router = express.Router();
const ateliersController = require("../controllers/ateliersController");

router.post("/", ateliersController.createAtelier);
router.get("/", ateliersController.getAllAteliers);
router.get("/:id", ateliersController.getAtelierById);
router.put("/:id", ateliersController.updateAtelier);
router.delete("/:id", ateliersController.deleteAtelier);

router.post("/assign", ateliersController.assignParticipants);

module.exports = router;