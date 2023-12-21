//Controller do Cadastro
angular.module('myApp').controller('CadastroController', function ($scope, ApiService) {
    $scope.valor = 0; // Valor Padrão
    $scope.parcelas = 0;
    $scope.resultado = 0;

    $scope.calcularParcelas = function () {
        ApiService.calcular($scope.parcelas, $scope.valor)
            .then(function (resultado) {
                $scope.resultado = resultado.resultado;
            })
    };
});