const router = require("express").Router({ mergeParams: true });
const controller = require("./theatersController");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;