const router = require("express").Router();
const controller = require("../controllers/word.controller");

router.get("/getwords", controller.getWordsApi);
router.post("/registerword", controller.registerWordApi);

module.exports = router;
