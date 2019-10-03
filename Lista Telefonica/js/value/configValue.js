// angular.module("listaTelefonica").value("config", {
//     baseURL: "http://localhost:3000"
// });

// o de baixo faz o mesmo que o de cima mas
// o constant pode ser injetado em serviços do tipo provider

angular.module("listaTelefonica").constant("config", {
    baseURL: "http://localhost:3000"
});