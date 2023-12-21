angular.module('myApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/cadastro', {
                templateUrl: 'cadastro.html',
                controller: 'CadastroController'
            })
            .when('/consulta', {
                templateUrl: 'consulta.html',
                controller: 'ConsultaController'
            })
            .otherwise({
                redirectTo: '/cadastro'
            });
    });