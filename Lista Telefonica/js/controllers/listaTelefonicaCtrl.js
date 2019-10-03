angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter, $http) {
    $scope.app = "Lista Telefonica";
    var APICONTATOS = "http://localhost:3000/contatos";
    var APIOPERADORAS = "http://localhost:3000/operadoras"
    $scope.contatos = [
        // filter no controller é mais perfomatico
        // {nome: $filter('uppercase')("Pedro"), telefone: "0980808980808", data: new Date(), operadora: { nome: "Oi", codigo: 14, categoria: "Celular"}},
        // {nome: "Ana", telefone: "0535980808982424", data: new Date(), operadora: { nome: "Vivo", codigo: 15, categoria: "Celular"}},
        // {nome: "Maria", telefone: "09808084535308", data: new Date(), operadora: { nome: "Tim", codigo: 41, categoria: "Celular"}}
    ];
    $scope.operadoras = [
        // {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
        // {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
        // {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
        // {nome: "Gvt", codigo: 25, categoria: "Fixo", preco: 1},
        // {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
    ];

    var carregarContatos = function () {
        $http.get(APICONTATOS).then(function (response) {
            $scope.contatos = response.data;
        });
    };

    var carregarOperadoras = function () {
        $http.get(APIOPERADORAS).then(function (response) {
            $scope.operadoras = response.data;
        });
    };

    $scope.adicionarContato = function (contato) {
        contato.data = new Date();
        // $scope.contatos.push(angular.copy(contato));
        $http.post(APICONTATOS, contato).then(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });
    };
    $scope.apagarContatos = function (contatos) {
        // filter ta filtrado apenas os contatos selecionados
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) {
                return contato;
            }
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        // de forma similar ao filter ele olha contato a contato, 
        // se de todo o array um contato for true ele retorna true
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }

    carregarContatos();
    carregarOperadoras();

});