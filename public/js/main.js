angular.module('hypermercado', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'produtoServicos', 'carrinhoServicos'])
.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/produtos', {
		templateUrl: 'partials/produtos.html',
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