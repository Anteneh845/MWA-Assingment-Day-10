angular
    .module("meanGuitars", ["ngRoute"])
    .config(appConfig);

const checkIfLoggedIn = (UserDataFactory, $rootScope, requireAuth = false) => {
    return UserDataFactory
        .getProfile()
        .then(user => {
            $rootScope.currentUser = user;
        }).catch(() => {
            console.log("Was here")
            if (requireAuth) return `/login`
        });
}

const resolveRedirectTo = (requireAuth) => ["UserDataFactory", "$rootScope", (UserDataFactory, $rootScope) => checkIfLoggedIn(UserDataFactory, $rootScope, requireAuth)];

function appConfig($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/", {
            templateUrl: "app/guitar-list/guitar-list.html",
            controller: "GuitarListController",
            controllerAs: "guitarListCtrl",
        })
        .when("/guitars/new", {
            templateUrl: "app/add-guitar/add-guitar.html",
            controller: "AddGuitarController",
            controllerAs: "addGuitarCtrl",
            resolveRedirectTo: resolveRedirectTo(true)
        })
        .when("/login", {
            templateUrl: "app/login/login.html",
            controller: "LoginController",
            controllerAs: "loginCtrl",
        })
        .when("/register", {
            templateUrl: "app/register/register.html",
            controller: "RegisterController",
            controllerAs: "registerCtrl",
        })
        .when("/guitars/:guitarId", {
            templateUrl: "app/guitar-detail/guitar-detail.html",
            controller: "GuitarDetailController",
            controllerAs: "guitarDetailCtrl",
            resolveRedirectTo: resolveRedirectTo()

        })
        .otherwise({
            redirectTo: "/"
        })
}

