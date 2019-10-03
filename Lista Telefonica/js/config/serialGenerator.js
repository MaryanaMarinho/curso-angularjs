
// so sesrvicos do tipo provider podem ser configurados
// o config é como se fosse uma inicialização, ele acontece antes da
// instanciação de serviços e permite que passe parametros pra esses serviços do tipo provider

angular.module("listaTelefonica").config(function(serialGeneratorProvider) {    
    serialGeneratorProvider.setLength(100);
});