module.exports.getJobOpeningsValidator = (req, res, next) => {
    if (req.query && (req.query.offset || req.query.count)) {
        if (req.query.offset && isNaN(req.query.offset))
            res.status(400).json({message: "Offset must be of type number"});
        else if (req.query.count && isNaN(req.query.count))
            res.status(400).json({message: "Count must be of type number"});
    } else
        next();
}


module.exports.getJobOpeningByIdValidator = (req, res, next) => {
    if (req.params && !req.params._id)
        res.status(400).json("Id parameter is required");
    else
        next();
}


module.exports.addOneJobOpeningValidator = (req, res, next) => {
    if (req.body && !req.body.title || !req.body.description || !req.body.skills || !req.body.salary || !req.body.experience) {
        if (isNaN(req.body.salary)) {
            res.status(400).json({message: "Salary must be of type number"})
        } else if (req.body.skills && req.body.skills.length === 0)
            res.status(400).json({message: "There must be at least one skill"})
        else
            res.status(400).json("Send all required job opening properties");
    } else
        next();
}


module.exports.deleteJobOpeningByIdValidator = (req, res, next) => {
    if (req.params && !req.params._id)
        res.status(400).json("Id parameter is required");
    else
        next();
}

module.exports.replaceJobOpeningValidator = (req, res, next) => {
    if (req.body && (!req.body.title || !req.body.description || !req.body.skills || !req.body.salary || !req.body.experience || !req.body.postDate)) {
        if (isNaN(req.body.salary)) {
            res.status(400).json({message: "Salary must be of type number"})
        } else if (req.body.skills && req.body.skills.length === 0)
            res.status(400).json({message: "There must be at least one skill"})
        else
            res.status(400).json("Send all required job opening properties that needs to be updated");
    } else
        next();
}

module.exports.partialUpdateJobOpeningValidator = (req, res, next) => {
    if (req.body && (req.body.title || req.body.description || req.body.skills || req.body.salary || req.body.experience || req.body.postDate)) {
        if (req.body.salary && isNaN(req.body.salary))
            res.status(400).json({message: "Salary must be of type number"})
    } else
        res.status(400).json({message: "Please send at least on job opening property that needs to be updated"})
}


module.exports.addLocationValidator = (req, res, next) => {
    if (req.params && !req.params.jobId)
        res.status(400).json({message: "Job id is required"})
    else if (req.body && (!req.body.street || !req.body.city || !req.body.state || !req.body.zipCode)) {
        if (isNaN(req.body.zipCode)) {
            res.status(400).json({message: "Zipcode must be of type number"})
        } else
            res.status(400).json("Send all required job location properties ");
    } else
        next();
}

module.exports.updateLocationValidator = (req, res, next) => {
    if (req.params && !req.params.jobId)
        res.status(400).json({message: "Job id is required"})
    else if (req.body && (!req.body.street || !req.body.city || !req.body.state || !req.body.zipCode)) {
        if (req.body.zipCode && isNaN(req.body.zipCode)) {
            res.status(400).json({message: "Zipcode must be of type number"})
        } else
            res.status(400).json("Send all required job location properties ");
    } else
        next();
}

module.exports.deleteLocationValidator = (req, res, next) => {
    if (req.params && req.params.jobId)
        res.status(400).json({message: "Job id is required"})
    else
        next();
}

module.exports.getLocationValidator = (req, res, next) => {
    if (req.params && req.params.jobId)
        res.status(400).json({message: "Job id is required"})
    else
        next();
}

