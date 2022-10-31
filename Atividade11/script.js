// Exercício 1
function Retangulo(b, h) {
    this.base = b;
    this.altura = h;
    var area = b * h;

    var returnArea = function () {
        return area;

    }
    this.resp = function () {
        return returnArea;
    }

}
var ret1 = new Retangulo(12, 2);
var areaRetMethod = ret1.resp();
var areaRet = areaRetMethod();
console.log(areaRet);

var ret2 = new Retangulo(10, 4);
var areaRetyMethod = ret2.resp();
var areaRety = areaRetyMethod();
console.log(areaRety);

// Exercício 2

function Conta() {
    var nomeCorrentista;
    var banco;
    var numeroConta;
    var saldo;

    //Nome correntista
    this.getnomeCorrentista = function () {
        return nomeCorrentista;
    }
    this.setnomeCorrentista = function (correntista) {
        nomeCorrentista = correntista;
    }

    //Banco
    this.getbanco = function () {
        return banco;
    }
    this.setbanco = function (b) {
        banco = b;
    }

    //Número da conta
    this.getnumeroConta = function () {
        return numeroConta;
    }
    this.setnumeroConta = function (numeroconta) {
        numeroConta = numeroconta;
    }

    //Saldo
    this.getsaldo = function () {
        return saldo;
    }
    this.setsaldo = function (s) {
        saldo = s;
    }
}

function Corrente() {
    var saldoEspecial;

    this.getsaldoEspecial = function () {
        return saldoEspecial;
    }
    this.setsaldoEspecial = function (se) {
        saldoEspecial = se;
    }
}

function Poupanca() {
    var juros;
    var dataVencimento;

    this.getjuros = function () {
        return juros;
    }
    this.setjuros = function (j) {
        juros = j;
    }
    this.getdataVencimento = function () {
        return dataVencimento;
    }
    this.setdataVencimento = function (d) {
        dataVencimento = d;

    }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

Mateus = new Corrente();
Mateus = new Poupanca();
Mateus.setbanco('Bradesco');
Mateus.setnumeroConta('123456');
Mateus.setsaldoEspecial('100');
Mateus.setnomeCorrentista('Mateus');
Mateus.setsaldo('10');

Junio.setbanco('Santander');
Junio.setnumeroConta('56879');
Junio.setjuros('50')
Junio.setnomeCorrentista('Junio');
Junio.setsaldo('12');
Junio.setdataVencimento('12/12/2022');

console.log(Mateus.getbanco() + '\n' +
    Mateus.getnumeroConta() + '\n' +
    Mateus.getsaldoEspecial() + '\n' +
    Mateus.getnomeCorrentista() + '\n' +
    Mateus.getsaldo() + '\n' +

    Junio.getbanco() + '\n' +
    Junio.getnumeroConta() + '\n' +
    Junio.getjuros() + '\n' +
    Junio.getnomeCorrentista() + '\n' +
    Junio.getsaldo() + '\n' +
    Junio.getdataVencimento());