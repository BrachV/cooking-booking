const wishesController = require('./controllers/wishesController');
const router = require("express").Router();

router.get("/wishes", wishesController.allWishes);

module.exports = router;