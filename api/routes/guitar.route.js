const express = require("express");
const router = express.Router();
const {
    getReviewById,
    updateReview,
    getReviewList,
    deleteReviewById,
    createReview
} = require("../controllers/review.controller")

const {
    createGuitar,
    deleteGuitarById,
    getGuitarById,
    getGuitarList,
    updateGuitar,
} = require("../controllers/guitar.controller")

const {
    guitarIdUrlValidator,
    createGuitarValidator,
    updateGuitarValidator,
    getGuitarListValidator,
    reviewIdUrlValidator,
    createReviewValidator,
    updateReviewValidator
} = require("../middlewares/request-validators/guitar.validator");
const {
    authenticate
} = require("../middlewares/auth-handlers/auth-handler")
// Guitar routes
router
    .get("/guitars/", getGuitarListValidator, getGuitarList)
    .get("/guitars/:_id", guitarIdUrlValidator, getGuitarById)
    .delete("/guitars/:_id", authenticate, guitarIdUrlValidator, deleteGuitarById)
    .patch("/guitars/:_id", authenticate, updateGuitarValidator, updateGuitar)
    .put("/guitars/:_id", authenticate, updateGuitarValidator, updateGuitar)
    .post("/guitars/", authenticate, createGuitarValidator, createGuitar)


// Guitar reviews routes
router
    .get("/guitars/:guitarId/reviews/", guitarIdUrlValidator, getReviewList)
    .get("/guitars/:guitarId/reviews/:reviewId", reviewIdUrlValidator, getReviewById)
    .delete("/guitars/:guitarId/reviews/:reviewId", authenticate, reviewIdUrlValidator, deleteReviewById)
    .put("/guitars/:guitarId/reviews/:reviewId", authenticate, updateReviewValidator, updateReview)
    .post("/guitars/:guitarId/reviews", authenticate, createReviewValidator, createReview)


module.exports = router;