angular
    .module("meanGuitars")
    .factory("AuthDataFactory", AuthDataFactory);

function AuthDataFactory($http) {
    return {
        authenticateUser: (user) => authenticateUser($http, user)
    }
}

function authenticateUser($http, user) {
    return $http.post("/api/auth", user)
        .then(complete)
        .catch(err=>Promise.reject(err));
}