angular.module('carrinhoServicos', ['ngResource'])
.factory('recursoCarrinho', function ($resource) {
    
    return $resource('http://localhost:8080/v1/produtos/carrinho/:codigo', null, {
    'update': {
        method: 'PUT'
    }
});
})
.factory("compraDeProdutos", function (recursoCarrinho, $q, $rootScope) {
    
    var evento = 'produtoComprado';
    
    var service = {};
    
    service.comprar = function (produto) {
        console.log(produto);
        return $q(function (resolve, reject) {
            
            recursoCarrinho.save({ codigo: produto.codigo }, produto, function () {
                $rootScope.$broadcast(evento);
                resolve({
                    mensagem: 'Item ' + produto.nome + ' incluído no carrinho de compras com sucesso',
                    inclusao: true
                });
            }, function (erro) {
                console.log(erro);
                reject({
                    mensagem: 'Não foi possível incluir o produto ' + produto.nome + ' no carrinho de compras'
                });
            });
            
            
        });
    };
    return service;
});
