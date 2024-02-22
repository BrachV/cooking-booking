const wishesController = require('./controllers/wishes');
const router = require("express").Router();

router.get("/wishes", wishesController.allWishes);

module.exports = router;