const express = require("express");
const router = express.Router();
const controllers = require("./../controllers/controllers");

router.post("/encode", controllers.encoder);
router.post("/decode", controllers.decoder);

module.exports = router;
