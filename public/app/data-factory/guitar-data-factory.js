angular
    .module("meanGuitars")
    .factory("GuitarDataFactory", GuitarDataFactory);

function GuitarDataFactory($http) {
    return {
        getGuitarList: () => getGuitarList($http),
        getGuitarById: (id) => getGuitarById(id, $http),
        deleteGuitarById: (id) => deleteGuitarById(id, $http),
        addGuitar: (guitar) => addGuitar(guitar, $http),
    }
}

const deleteGuitarById = (guitarId, $http) => {
    return $http.delete("/api/guitars/" + guitarId)
        .then(complete)
        .catch(failed)
}

const getGuitarById = (guitarId, $http) => {
    return $http.get("/api/guitars/" + guitarId)
        .then(complete)
        .catch(failed)
}

const addGuitar = (guitar, $http) => {
    return $http.post("/api/guitars", guitar)
        .then(complete)
        .catch(failed)
}

const getGuitarList = ($http) => {
    return $http.get("/api/guitars")
        .then(complete)
        .catch(failed)
}

const complete = (response) => {
    return response.data;
}

const failed = (error) => {
    console.log(error);
}