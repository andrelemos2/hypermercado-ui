angular.module('meusServicos', ['ngResource'])
	.factory('recursoProduto', function ($resource) {

		return $resource('http://localhost:8080/v1/produtos/:codigo', null, {
			'update': {
				method: 'PUT'
			}
		});
	})
	.factory("cadastroDeProdutos", function (recursoProduto, $q, $rootScope) {

		var evento = 'produtoCadastrado';

		var service = {};

		service.cadastrar = function (produto) {
			return $q(function (resolve, reject) {

				if (produto.codigo) {
					recursoProduto.update({ codigo: produto.codigo }, produto, function () {

						$rootScope.$broadcast(evento);
						resolve({
							mensagem: 'Produto ' + produto.nome + ' atualizado com sucesso',
							inclusao: false
						});
					}, function (erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar o produto ' + produto.nome
						});
					});

				} else {
					recursoProduto.save(produto, function () {
						$rootScope.$broadcast(evento);
						resolve({
							mensagem: 'Produto ' + produto.nome + ' incluído com sucesso',
							inclusao: true
						});
					}, function (erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir a produto ' + produto.nome
						});
					});
				}
			});
		};
		return service;
	});