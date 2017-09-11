angular.module('minhasDiretivas', [])
	.directive('meuPainel', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;


		ddo.scope = {
            nome: '@'
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
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
    .directive('meuBotaoPerigo', function() {
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
        ddo.template = '<ul><li>{{quantidade}}</li></ul>';
        ddo.controller = function($scope, recursoCarrinho) {
            recursoCarrinho.query(function(produtos) {
                $scope.quantidades = produtos.map(function(produto) {
                    return produto.quantidade;
                });    
            });
        };
        return ddo;
    });