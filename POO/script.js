// sem orientação a objetos

var nome1 = 'Paula';
var nome2 = 'Juliana';
var nome3 = 'Alana';

var idade1 = 25;
var idade2 = 30;
var idade3 = 40;

function falar(){
    alert('sem orientação a objetos: Olá sou'+ nome +'e tenho'+ idade +'anos');
}
falar(nome1, idade1);
falar(nome2, idade2);
falar(nome3, idade3);





//com orientação a objetos
class pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    falar(){
        alert("pessoa criada: Olá meu nome é "+this.nome+" e tenho "+this.idade +"ano");
    }
}
var pessoa1 = new pessoa ('Astolfo', 71);
var pessoa2 = new pessoa ('malvina',50);
var pessoa3 = new pessoa ('Muriel', 60);
pessoa1.falar();
pessoa2.falar();
alert('olá'+ pessoa3.nome);


//heranca e polimorfismo
class animal {
    constructor(nome){
        this.nome = nome;
    }
    fazerBarulho(){
        alert("fazendo barulho generico");
    }
}
class cachorro extends animal {
    constructor(nome, raca){
        super(nome);this.raca = raca;
    }
    fazerBarulho(){
        alert("cachorro latindo!");
    }
}
class gato extends animal {
    constructor(nome, cor){
        super(nome);
        this.cor = cor 
    }
 
fazerBarulho(){
    alert("gato miando!");
 }
}

var objetoCachorro = new Cachorro('fred', 'schnauzer');
alert(objetoCachorro.nome);
alert(objetoCachorro.raca);
objetoCachorro.fazerBarulho();

var objetoGato = new gato('sininho','cinza');
alert(objetoGato.nome);
alert(objetoGato.cor);
objetoGato.fazerBarulho();

//encapsulamento, modificado de acesso
class contaBancaria {
    constructor(saldo){
        this._saldo = saldo; 
    }
}
depositar(valor){
    this._saldo = _saldo + valor;
}
sacar (){
    if(valor <= this._saldo){
    }else {
        alert("valor maior que o saldo")
    }
}

var minhaConta = new contaBancaria(20000);
alert(minhaConta.obterSaldo);
minhaConta.depositar(100);
alert(minhaConta)