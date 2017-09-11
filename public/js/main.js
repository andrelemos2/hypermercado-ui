angular.module('hypermercado', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos', 'carrinhoServicos'])
.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/produtos', {
		templateUrl: 'partials/principal.html',
		controller: 'ProdutosController'
	});

	$routeProvider.when('/produtos/new', {
		templateUrl: 'partials/produto.html',
		controller: 'ProdutoController'
	});

	$routeProvider.when('/produtos/edit/:codigo', {
		templateUrl: 'partials/produto.html',
		controller: 'ProdutoController'
	});

	$routeProvider.when('/produtos/carrinho', {
		templateUrl: 'partials/carrinho.html',
		controller: 'CarrinhoController'
	});

	$routeProvider.otherwise({redirectTo: '/produtos'});

});