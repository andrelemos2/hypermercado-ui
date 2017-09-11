angular.module('hypermercado')
	.controller('ProdutosController',
	function ($scope, recursoProduto, compraDeProdutos) {

		$scope.produtos = [];
		$scope.filtro = '';
		$scope.mensagem = '';

		recursoProduto.query(function (produtos) {
			$scope.produtos = produtos;
		}, function (erro) {
			console.log(erro);
		});

		$scope.remover = function (produto) {

			recursoProduto.delete({ codigo: produto.codigo }, function () {
				var indiceDoProduto = $scope.produtos.indexOf(produto);
				$scope.produtos.splice(indiceDoProduto, 1);
				$scope.mensagem = 'Produto ' + produto.nome + ' removido com sucesso!';
			}, function (erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível apagar a produto ' + produto.nome;
			});
		};

		$scope.comprar = function (produto) {

			compraDeProdutos.comprar(produto)
				.then(function (dados) {
					console.log(dados);
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.produto = {};
				})
				.catch(function (erro) {
					$scope.mensagem = erro.mensagem;
				});

		};
	});