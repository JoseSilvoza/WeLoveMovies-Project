const router = require("express").Router({ mergeParams: true });
const controller = require("./moviesController");
const methodNotAllowed = require("../errors/methodNotAllowed");
const reviewsRouter = require("../reviews/reviewsRouter");
const theatersRouter = require("../theaters/theatersRouter");

router.use("/:movieId/reviews", controller.movieExists, reviewsRouter);
router.use("/:movieId/theaters", theatersRouter);

router
    .route("/:movieId")
    .get(controller.read)
    .all(methodNotAllowed);

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

module.exports = router;
