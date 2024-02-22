const express = require("express");
const router = express.Router();
const participationsController = require("../controllers/participationsController");

router.post("/", participationsController.createParticipation);
router.get("/", participationsController.getAllParticipations);
router.get("/:id", participationsController.getParticipationById);
router.put("/:id", participationsController.updateParticipation);
router.delete("/:id", participationsController.deleteParticipation);
router.post("/:id/confirm", participationsController.confirmParticipation);
router.get("/byUser/:utilisateur_email", participationsController.getParticipationsByUser);

module.exports = router;