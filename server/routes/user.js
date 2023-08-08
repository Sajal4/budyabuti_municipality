const { register, login, getData } = require("../controller/user");
const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getData", getData);

module.exports = router;
