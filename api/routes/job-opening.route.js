const express = require("express");
const router = express.Router();

const {addOneJobOpening, deleteJobOpeningById, partialUpdateJobOpening, replaceJobOpening, getJobOpeningById, getJobOpeningList,} = require("../controllers/job-opening.controller.js")

const {
    getLocation,
    updateLocation,
    addLocation
} = require("../controllers/location.controller")

const {
    getJobOpeningByIdValidator, addOneJobOpeningValidator, deleteJobOpeningByIdValidator, getJobOpeningsValidator,
    partialUpdateJobOpeningValidator,
    replaceJobOpeningValidator,
    updateLocationValidator,
    addLocationValidator,
    deleteLocationValidator,
    getLocationValidator

} = require("../validators/job-opening.validator");

// Jobs routes
router
    .get("/jobs/", getJobOpeningsValidator, getJobOpeningList)
    .get("/jobs/:_id", getJobOpeningByIdValidator, getJobOpeningById)
    .post("/jobs/", addOneJobOpeningValidator, addOneJobOpening)
    .delete("/jobs/:_id", deleteJobOpeningByIdValidator, deleteJobOpeningById)
    .put("/jobs/:_id", replaceJobOpeningValidator, replaceJobOpening)
    .patch("/jobs/:_id", partialUpdateJobOpeningValidator, partialUpdateJobOpening)


// Job location routes
router
    .get("/jobs/:jobId/location",getLocationValidator, getLocation)
    .post("/jobs/:jobId/location",addLocationValidator, addLocation)
    .put("/jobs/:jobId/location", updateLocationValidator,updateLocation)

module.exports = router;