const express = require("express");
const router = express.Router();
const themesController = require("../controllers/themesController");

router.post("/", themesController.createTheme);
router.get("/", themesController.getAllThemes);
router.get("/:id", themesController.getThemeById);
router.put("/:id", themesController.updateTheme);
router.delete("/:id", themesController.deleteTheme);

module.exports = router;