angular
    .module("meanGuitars")
    .controller("GuitarDetailController", GuitarDetailController)

function GuitarDetailController(GuitarDataFactory, $routeParams,$rootScope) {
    let vm = this;
    let guitarId = $routeParams.guitarId;
    vm.deleteGuitar = (id) => {
        GuitarDataFactory
            .deleteGuitarById(id)
            .then(() => location.href = "/#/")
            .catch(err => console.log(err))
    }
    this.isLoggedIn = () => $rootScope.currentUser !== undefined;
    GuitarDataFactory
        .getGuitarById(guitarId)
        .then(guitar => vm.guitar = guitar)
        .catch(err => console.log(err))
}