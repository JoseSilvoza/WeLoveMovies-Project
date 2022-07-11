const service = require("./reviewsServices");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function reviewExists(req, res, next) {
  const review = await service.read(req.params.reviewId);
  if (review) {
    res.locals.review = review;
    return next();
  }
  next({ status: 404, message: `Review cannot be found.` });
}

async function update(req, res, next) {
  res.json({
    data: await service.update(res.locals.review.review_id, req.body.data),
  });
}

async function destroy(req, res) {
  const { review } = res.locals;
  await service.delete(review.review_id);
  res.sendStatus(204);
}

async function list(req, res) {
  const { movieId } = req.params;
  const data = await service.list(movieId);
  res.json({ data });
}

module.exports = {
  update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
  list: [asyncErrorBoundary(list)],
};