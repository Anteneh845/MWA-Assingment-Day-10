angular
    .module("meanGuitars")
    .controller("GuitarListController", GuitarListController);


function GuitarListController(GuitarDataFactory) {
    let vm = this;
    GuitarDataFactory
        .getGuitarList()
        .then(response => vm.guitars = response);
    vm.filterByYear = function (year) {
        return function (guitar) {
            return guitar["year"] > year
        };
    }
}