function atualizar(){
    var data =  new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundos = data. getSeconds();

    hora = (hora < 10 ? "0" + hora : hora);
    minuto = (minuto < 10 ? "0" + minuto :minuto);
    segundos = (segundos < 0 ? "0" + segundos : segundos);

    document.getElementById("hora").innerHTML= hora + ":" + minuto + ":" +segundos;

}

setInterval(atualizar,1000);