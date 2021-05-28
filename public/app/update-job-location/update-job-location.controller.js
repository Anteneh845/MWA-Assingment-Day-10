angular
    .module("jobSearch")
    .controller("UpdateJobLocationController", UpdateJobLocationController)

function UpdateJobLocationController(DataFactory, $routeParams, $location) {
    let vm = this;
    let jobId = $routeParams.jobId;
    DataFactory
        .getOneJob(jobId)
        .then(job => {
            vm.location = job.location
            console.log(vm.location)
        })
        .catch(err => console.log(err))
    vm.updateLocationHandler = function () {
        if (vm.form.$valid) {
            DataFactory
                .updateJobLocation(jobId,vm.location)
                .then(()=>$location.path("/"))
                .catch(err=>console.log(err))
        }
    }
}