angular
    .module("meanGuitars")
    .factory("UserDataFactory", UserDataFactory);

function UserDataFactory($http) {
    return {
        registerUser: (user) => registerUser($http, user),
        getProfile: () => getProfile($http)
    }
}

function getProfile($http) {
    const token = window.sessionStorage.token;
    return $http.get("/api/users/me", {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.data
        }).catch(err => {
            return Promise.reject(err)
        })
}

function registerUser($http, user) {
    return $http.post("/api/users", user)
        .then(complete)
        .catch(failed);
}
