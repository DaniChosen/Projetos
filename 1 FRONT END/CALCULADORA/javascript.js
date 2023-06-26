var num1;
var num2;
var total;

function entrada() {
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

     total = document.getElementById("resultado");
}


function somar() {
    entrada();

    total.innerHTML = num1 + num2;

}

function subtrair() {
    entrada();v
    
    total.innerHTML = num1 - num2;

}

function mutiplicar() {
    entrada();
    
    total.innerHTML = num1 * num2;

}

function dividir() {
    entrada();
    
    total.innerHTML = num1 / num2;

}

function limpar() {
    var total = document.getElementById("resultado");
    total.innerHTML = " ";
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

