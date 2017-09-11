angular.module('hypermercado')
	.controller('ProdutoController', ['$scope', 'recursoProduto', '$routeParams', 'cadastroDeProdutos',
		function ($scope, recursoProduto, $routeParams, cadastroDeProdutos) {

			$scope.produto = {};
			$scope.mensagem = '';

			if ($routeParams.codigo) {
				recursoProduto.get({ codigo: $routeParams.codigo }, function (produto) {
					$scope.produto = produto;
				}, function (erro) {
					console.log(erro);
					$scope.mensagem = 'Não foi possível obter o produto'
				});
			}

			$scope.submeter = function () {

				if ($scope.formulario.$valid) {
					cadastroDeProdutos.cadastrar($scope.produto)
						.then(function (dados) {
							$scope.mensagem = dados.mensagem;
							if (dados.inclusao) $scope.produto = {};
						})
						.catch(function (erro) {
							$scope.mensagem = erro.mensagem;
						});
				}
			};
		}]);