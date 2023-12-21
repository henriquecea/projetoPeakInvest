angular.module('myApp').service('consultaService', ['$http', function ($http) {
    var baseUrl = 'http://localhost:5024'; // Ajuste conforme necessário

    this.buscarNomePorId = function (id) {
        return $http.get(baseUrl + '/consulta/' + id);
    };
}]);