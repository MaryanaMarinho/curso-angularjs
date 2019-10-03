
// factory function é a funçao que fazemos a invocação e tem um objeto de retorno
// o then fica no outro arquivo pois ele espera o resultado da funçao >>que é uma promisse<< 
// para poder dar o resultado de sucesso ou falha, pois essa é uma chamada assincrona

angular.module("listaTelefonica").factory("contatosAPI", function($http, config) {
    var APICONTATOS = config.baseURL + "/contatos";

    var _getContatos = function () {
        return $http.get(APICONTATOS);
    }
    var _saveContato = function (contato) {
        return $http.post(APICONTATOS, contato);
    }

    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    }
});