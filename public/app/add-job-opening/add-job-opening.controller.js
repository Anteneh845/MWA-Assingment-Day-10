angular
    .module("jobSearch")
    .controller("AddJobOpeningController", AddJobOpeningController)

function AddJobOpeningController(DataFactory, $location) {
    let vm = this;
    vm.goBackHandler =() =>{
        $location.path("/")
    }
    vm.addJobHandler = () => {
        if (vm.form.$valid) {
            console.log("Form is valid")
            let job = {
                title: vm.form.title,
                description: vm.form.description,
                salary: vm.form.salary,
                skills: vm.form.skills.split(","),
                experience: vm.form.experience
            }
            DataFactory
                .addOneJob(job)
                .then(() => $location.path("/"))
                .catch(err => console.log(err))
        } else {
            vm.error = "Form is invalid";
        }
    }
}