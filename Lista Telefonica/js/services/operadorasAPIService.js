
// service na verdade é uma função contrutora

angular.module("listaTelefonica").service("operadorasAPI", function($http, config) {
    var APIOPERADORAS = config.baseURL + "/operadoras";

    this.getOperadoras = function () {
        return $http.get(APIOPERADORAS);
    };
});
