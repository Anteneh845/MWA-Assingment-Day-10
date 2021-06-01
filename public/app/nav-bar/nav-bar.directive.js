angular
    .module("meanGuitars")
    .directive("navBar", navBar);

function navBar() {
    return {
        restrict: 'E',
        templateUrl: "app/nav-bar/nav-bar.html",
        controller: function (AuthDataFactory, $location, $rootScope) {
            this.isActiveTab = function (url) {
                const currentPath = $location.path().split("/")[1];
                return url === currentPath;
            }
            this.isLoggedIn = function () {
                return $rootScope.currentUser !== undefined;
            }
            this.logoutHandler = function () {
                delete window.sessionStorage.token;
                delete $rootScope.currentUser;
                $location.path("/login")
            }
        },
        controllerAs: "navBarCtrl",
        scope: {}
    }
}
