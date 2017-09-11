angular.module('hypermercado')
.controller('CarrinhoController',
function ($scope, recursoCarrinho) {

    $scope.carrinho = [];
    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoCarrinho.get(function (carrinho) {
        $scope.carrinho = carrinho;
        $scope.total = carrinho.total;
    }, function (erro) {
        console.log(erro);
    });
});