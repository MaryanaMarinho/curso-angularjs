
// servico do tipo provider pode ser configurado externamente, por conta disso
// o servico que vai ser injetado de fato é o que ta dentro de $get
// no fim das contas é como uma equivalencia do servico factory dentro do $get

angular.module("listaTelefonica").provider("serialGenerator", function(config) {
    console.log(config);
    
    var _length = 10;
    this.getLength = function () {
        return _length;
    }

    this.setLength = function (length) {
        _length = length;
    }
    this.$get = function () {
        return {
            generate: function () {
                var serial = "";
                while(serial.length < 20) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return serial;
            }
        };
    };
});