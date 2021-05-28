angular
    .module("jobSearch")
    .controller("EditJobOpeningController", EditJobOpeningController)

function EditJobOpeningController(DataFactory, $routeParams, $location) {
    let vm = this;
    let jobId = $routeParams.jobId;
    vm.goBackHandler = () => {
        $location.path("/")
    }
    vm.updateJobHandler = function () {
        DataFactory
            .updateJob(vm.job)
            .then(() => $location.path("/"))
            .catch(err => console.log(err))
    }
    DataFactory
        .getOneJob(jobId)
        .then(job => {
            vm.job = job
        })
        .catch(err => console.log(err))
}