angular
    .module("jobSearch")
    .factory("DataFactory", DataFactory)


function DataFactory($http) {
    return {
        addOneJob: (job) => addOneJob(job, $http),
        deleteOneJob: (jobId) => deleteOneJob(jobId, $http),
        getOneJob: (jobId) => getOneJob(jobId, $http),
        getJobList: () => getJobList($http),
        updateJob: (job) => updateJob(job, $http),
        addJobLocation: (jobId, location) => addJobLocation(jobId, location, $http),
        updateJobLocation: (jobId, location) => updateJobLocation(jobId, location, $http)
    }
}

const addOneJob = (job, $http) => {
    return $http.post("/api/jobs/", job)
        .then(complete)
        .catch(error)
}

const updateJob = (job, $http) => {
    return $http.put("/api/jobs/" + job._id, job)
        .then(complete)
        .catch(error)
}

const deleteOneJob = (jobId, $http) => {
    return $http.delete("/api/jobs/" + jobId)
        .then(complete)
        .catch(error)
}
const getOneJob = (jobId, $http) => {
    return $http.get("/api/jobs/" + jobId)
        .then(complete)
        .catch(error)
}

const getJobList = ($http) => {
    return $http.get("/api/jobs")
        .then(complete)
        .catch(error)
}
const addJobLocation = (jobId, location, $http) => {
    return $http.post("/api/jobs/" + jobId + "/location", location)
        .then(complete)
        .catch(error)
}

const updateJobLocation = (jobId, location, $http) => {
    return $http.put("/api/jobs/" + jobId + "/location", location)
        .then(complete)
        .catch(error)
}

const complete = (response) => {
    return response.data;
}

const error = (error) => {
    console.log(error);
}