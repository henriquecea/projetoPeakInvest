//Serviço do Cadastro
angular.module('myApp').service('ApiService', function ($http) {
    var baseUrl = 'http://localhost:5024';

    this.calcular = function (parcelas, valor) {
        return $http.post(baseUrl + '/calculo', { Parcelas: parcelas, Valor: valor })
            .then(function (response) {
                return response.data;
            });
    };
});
