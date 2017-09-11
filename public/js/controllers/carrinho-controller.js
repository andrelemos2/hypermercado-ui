angular.module('hypermercado')
.controller('CarrinhoController',
function ($scope, recursoCarrinho) {

    $scope.produtos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoCarrinho.query(function (produtos) {
        $scope.produtos = produtos;
    }, function (erro) {
        console.log(erro);
    });

    $scope.remover = function (produto) {

        recursoCarrinho.delete({ codigo: produto.codigo }, function () {
            var indiceDoProduto = $scope.produtos.indexOf(produto);
            $scope.produtos.splice(indiceDoProduto, 1);
            $scope.mensagem = 'Produto ' + produto.nome + ' removido com sucesso!';
        }, function (erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível apagar a produto ' + produto.nome;
        });
    };
});