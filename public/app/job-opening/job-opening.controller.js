angular
    .module("jobSearch")
    .controller("JobOpeningController", JobOpening)

function JobOpening(DataFactory, $routeParams, $location) {
    let vm = this;
    let jobId = $routeParams.jobId;
    vm.deleteJobHandler = function (id) {
        DataFactory
            .deleteOneJob(id)
            .then(() => $location.path("/"))
            .catch(err => console.log(err))
    }
    vm.addJobLocationHandler = (id) => {
        $location.path("/jobs/" + id+"/location");
    }
    vm.editJobHandler = (id) => {
        $location.path("/jobs/" + id+"/edit");
    }
    vm.goBackHandler = () => {
        $location.path("/")
    }
    DataFactory
        .getOneJob(jobId)
        .then(job => {
            vm.job = job
            console.log(job)
        })
        .catch(err => console.log(err))
}