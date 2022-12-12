const router = require("express").Router();
const { imageGen } = require("../controllers/Openai");

router.post("/generateimage", imageGen);

module.exports = router;