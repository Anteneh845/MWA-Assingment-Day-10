angular
    .module("jobSearch", ["ngRoute"])
    .config(config)

function config($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/job-opening-list/job-opening-list.html",
            controller: "JobOpeningListController",
            controllerAs: "jobOpeningListCtrl"
        })
        .when("/jobs/create", {
            templateUrl: "app/add-job-opening/add-job-opening.html",
            controller: "AddJobOpeningController",
            controllerAs: "addJobOpeningCtrl"
        })
        .when("/jobs/:jobId", {
            templateUrl: "app/job-opening/job-opening.html",
            controller: "JobOpeningController",
            controllerAs: "jobOpeningCtrl"
        }).when("/jobs/:jobId/location", {
            templateUrl: "app/add-job-location/add-job-location.html",
            controller: "AddJobLocationController",
            controllerAs: "addJobLocationCtrl"
        })
        .when("/jobs/:jobId/location/edit", {
            templateUrl: "app/update-job-location/update-job-location.html",
            controller: "UpdateJobLocationController",
            controllerAs: "updateJobLocationCtrl"
        })
        .when("/jobs/:jobId/edit", {
            templateUrl: "app/edit-job-opening/edit-job-opening.html",
            controller: "EditJobOpeningController",
            controllerAs: "editJobOpeningCtrl"
        })
        .otherwise({
            redirectTo: "/"
        })
}