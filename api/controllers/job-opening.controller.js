const {model} = require("mongoose")
const JobOpening = model("JobOpening");

const error = (error, res) => res.status(500).json({message: `Internal server error ${error}`});

module.exports.addOneJobOpening = (req, res) => {
    JobOpening.create(req.body)
        .then(resp => res.status(200).json(resp))
        .catch(err => res.status(500).json({message: `Internal server error ${err}`}))
}

module.exports.deleteJobOpeningById = (req, res) => {
    JobOpening.findByIdAndDelete(req.params._id)
        .then(job => {
            if (!job)
                res.status(404).json({message: "Job opening not found"})
            else
                res.status(204).send();
        })
        .catch(err => error(err, res))
}

module.exports.getJobOpeningList = (req, res) => {
    let [offset, count] = [0, 10];
    if (req.query && req.query.offset)
        offset = parseInt(req.query.offset);
    if (req.query && req.query.count) {
        count = parseInt(req.query.count);
        count = count > 10 ? 10 : count;
    }
    JobOpening.find()
        .skip(offset)
        .limit(count)
        .then(jobs => res.status(200).json(jobs))
        .catch(err => error(err, res))
}

module.exports.getJobOpeningById = (req, res) => {
    JobOpening.findById(req.params._id)
        .then(job => {
            if (!job)
                res.status(404).json({message: "Job opening not found"})
            else
                res.status(200).json(job)
        })
        .catch(err => error(err, res))
}

module.exports.replaceJobOpening = (req, res) => {
    JobOpening.findByIdAndUpdate(req.params._id, req.body)
        .then(job => {
            if (!job)
                res.status(404).json({message: "Job opening not found"})
            else
                res.status(200).json(job)
        })
        .catch(err => error(err, res))
}

module.exports.partialUpdateJobOpening = (req, res) => {
    JobOpening.findByIdAndUpdate(req.params._id, req.body)
        .then(job => {
            if (!job)
                res.status(404).json({message: "Job opening with id " + req.params._id + " not found"})
            else
                res.status(200).json(job)
        })
        .catch(err => error(err, res))
}