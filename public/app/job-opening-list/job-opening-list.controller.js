angular
    .module("jobSearch")
    .controller("JobOpeningListController", JobOpeningListController);

function JobOpeningListController(DataFactory,$location) {
    let vm = this;
    vm.navigateToCreateJob = ()=>{
        $location.path("/jobs/create")
    }
    DataFactory
        .getJobList()
        .then(resp => vm.jobs = resp)
        .catch(err => console.log(err))
}