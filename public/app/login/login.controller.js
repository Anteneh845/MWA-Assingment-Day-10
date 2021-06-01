angular
    .module("meanGuitars")
    .controller("LoginController", LoginController)

function LoginController(AuthDataFactory,$rootScope,$location) {
    let vm = this;
    vm.loginHandler = function () {
        vm.successMessage = "";
        vm.errorMessage = "";
        if (vm.form.$valid) {
            let user = {
                email: vm.email,
                password: vm.password,
            }
            AuthDataFactory
                .authenticateUser(user)
                .then(resp => {
                    if (resp) {
                        $rootScope.currentUser = resp;
                        window.sessionStorage.token = resp.token;
                        $location.path("/")
                    } else
                        vm.errorMessage = "Invalid Email/Password Combination"
                })
                .catch(console.error)
        } else {

        }
    }
}