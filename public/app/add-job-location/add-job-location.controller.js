angular
    .module("jobSearch")
    .controller("AddJobLocationController", AddJobLocationController)

function AddJobLocationController(DataFactory,$routeParams, $location) {
    let vm = this;
    let jobId = $routeParams.jobId;
    vm.addLocationHandler = function () {
        if (vm.form.$valid) {
            let jobLocation = {
                street: vm.form.street,
                state: vm.form.state,
                city: vm.form.city,
                zipCode: vm.form.zipCode,
            }
            console.log(jobLocation)
            DataFactory
                .addJobLocation(jobId,jobLocation)
                .then(()=>$location.path("/"))
                .catch(err=>console.log(err))
        }
    }
}