angular.module('minhasDiretivas', [])
	.directive('meuProduto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            nome: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{nome}}">';           
        
        return ddo;
    })
    .directive('meuBotaoRemover', function() {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',
            acao : '&'
        }
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;
    })
    .directive('meuBotaoComprar', function() {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',
            acao : '&'
        }
        ddo.template = '<button class="btn btn-success btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;
    })
    .directive('meuFocus', function() {
        var ddo = {};
        ddo.restrict = "A";
       
        ddo.link = function(scope, element) {
             scope.$on('produtoCadastrado', function() {
                 element[0].focus();
             });
        };

        return ddo;
    })
    .directive('meuCarrinho', function() {
        var ddo = {};
        ddo.restrict = 'E';
        ddo.template  = '<li><a href="/produtos/carrinho" rel="nofollow">Carrinho ({{quantidade}}) - R$ {{total}}</a></li>'
        ddo.controller = function($scope, recursoCarrinho) {
            recursoCarrinho.get(
                function(produtos) {
                    $scope.quantidade = produtos.quantidade;
                    $scope.total = produtos.total;
            });
        };
        return ddo;
    });