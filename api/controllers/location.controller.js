const {model} = require("mongoose");
const JobOpening = model("JobOpening");

const error = (error, res) => res.status(500).json({message: `Internal server error ${error}`});

module.exports.addLocation = (req, res) => {
    JobOpening.findById(req.params.jobId)
        .then(job => {
            if (!job)
                res.status(404).json({message: "Job opening not found"})
            else if (job) {
                job.location = req.body;
                job.save()
                    .then(job => res.status(200).send(job))
                    .catch(err => error(err, res))
            }
        })
        .catch(err => error(err, res))
}

module.exports.updateLocation = (req, res) => {
    JobOpening.findById(req.params.jobId)
        .then(job => {
            if (!job)
                res.status(404).json({message: `Job opening with id ${req.params.jobId} not found`})
            else if (job) {
                job.location = req.body;
                job.save()
                    .then(job => res.status(200).send(job))
                    .catch(err => error(err, res))
            }
        })
        .catch(err => error(err, res))
}


module.exports.getLocation = (req, res) => {
    JobOpening.findById(req.params.jobId)
        .then(job => {
            if (!job)
                res.status(404).json({message: `Job opening with id ${req.params.jobId} not found`})
            else if (job) {
                res.status(200).send(job.location);
            }
        })
        .catch(err => error(err, res))
}