angular.module('myApp').controller('ConsultaController', ['$scope', 'consultaService', function ($scope, consultaService) {
    $scope.idConsulta = 1; // Valor padrão
    $scope.nomeEncontrado = '';

    $scope.buscarPorId = function () {
        consultaService.buscarNomePorId($scope.idConsulta)
            .then(function (response) {
                $scope.nomeEncontrado = response.data;
            });
    };
}]);