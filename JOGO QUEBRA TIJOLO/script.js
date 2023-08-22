//Definir área do canvas
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

//configurar raquete 
var raqueteAltura = 10;
var raqueteLargura = 70;
var raqueteX = (canvas.width - raqueteLargura) / 2; //centralizar raquete
var velocidadeRaquete = 7;

//configurar a bola
var bolaRadius = 10;

var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 2;                   //direção de bola em X (esquerda/direita)
var bolaDY = -2;                  //direção de bola em y  (acima / abaixo)

var tijolosPorLinha = 3;
var tijolosPorColuna = 6;
var tijoloLargura = 75;
var tijoloAltura = 20;
var tijoloEspacamento = 10;
var espacamentoSuperiorQuadro = 30;
var espacamentoEsquerdoQuadro = 30;
var tijolos = []; //lista com os tijolos

var totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
var pontuacao = 0;

function easy(){
    raqueteLargura = 80;
    tijolosPorLinha = 3;
    tijolosPorColuna = 10;
    tijoloLargura = 50;
    tijoloAltura = 30;
    bolaRadius = 10;
    bolaDX = 2;
    bolaDY = 2;
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    bolaX = canvas.width / 2;
    bolaY =canvas.height - 30;
    iniciarTijolos();
}
function medium(){
    raqueteLargura = 80;
    tijolosPorLinha = 3;
    tijolosPorColuna = 10;
    tijoloLargura = 50;
    tijoloAltura = 30;
    bolaRadius = 10;
    bolaDX = 3;
    bolaDY = 3;
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    bolaX = canvas.width / 2;
    bolaY =canvas.height - 30;
    iniciarTijolos();
}
function hard(){
    raqueteLargura = 80;
    tijolosPorLinha = 3;
    tijolosPorColuna = 10;
    tijoloLargura = 50;
    tijoloAltura = 30;
    bolaRadius = 10;
    bolaDX = 5;
    bolaDY = 5;
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    bolaX = canvas.width / 2;
    bolaY = canvas.height - 30;
    iniciarTijolos();
}

function iniciarTijolos(){
//dedicado apena a inicialização dos tijolos
for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
    tijolos[coluna] = []  //0 1 2 3 4 5

    for (var linha = 0; linha < tijolosPorLinha; linha++) {

        tijolos[coluna][linha] = { x: 5, y: 5, ativo: 1 }
        //x é a posição esquerda/direita no canva
        //y é a posição acima/abaixo no canva
        //ativo, determina se o tijolo aparece ou não, 1 ou 0
    }
}




}

iniciarTijolos();

var setaDireita = false;
var setaEsquerda = false;

//movimentação da raquete - detecta descer e subir da tecla
document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla) {
    //se o valor = "direita" ||ou valor = "setaDireita"
    if (tecla.key === "Right" || tecla.key === "ArrowRight") {
        setaDireita = true; //ativa variavel setaDireita

        //se o valor = "esquerda" ||ou valor = "setaEsquerda"
    } else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
        setaEsquerda = true; //ativa variavel setaEsquerda
    }
}

function subirDaTecla(tecla) {
    //se o valor = "direita" ||ou valor = "setaDireita"
    if (tecla.key === "Right" || tecla.key === "ArrowRight") {
        setaDireita = false; //ativa variavel setaDireita

        //se o valor = "esquerda" ||ou valor = "setaEsquerda"
    } else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
        setaEsquerda = false; //ativa variavel setaEsquerda
    }
}


function desenharRaquete() {
    desenho.beginPath();       //inicia desenho
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "blue";
    desenho.fill();
    desenho.closePath();
}

function desenharBola() {
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "red";
    desenho.fill();
    desenho.closePath();
}


function desenharTijolos() {
    for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
        for (var linha = 0; linha < tijolosPorLinha; linha++) {

            if (tijolos[coluna][linha].ativo == 1) { //verifica se tijolo está ativo para desenha-lo

                var tijoloX = (coluna * (tijoloLargura + tijoloEspacamento) + espacamentoEsquerdoQuadro);
                var tijoloY = (linha * (tijoloAltura + tijoloEspacamento) + espacamentoSuperiorQuadro);

                tijolos[coluna][linha].x = tijoloX;
                tijolos[coluna][linha].y = tijoloY;
                
                desenho.beginPath();
                desenho.rect(tijoloX, tijoloY, tijoloLargura, tijoloAltura);
                desenho.fillStyle = "green";
                desenho.fill();
                desenho.closePath();
            }
        }
    }
}


function detectarColisao() {
    for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
        for (var linha = 0; linha < tijolosPorLinha; linha++) {

            var tijolo = tijolos[coluna][linha];
             if(tijolo.ativo === 1){
 
                if(bolaX + bolaRadius > tijolo.x
                    && bolaX - bolaRadius < tijolo.x + tijoloLargura
                    && bolaY + bolaRadius> tijolo.y
                    && bolaY - bolaRadius < tijolo.y + tijoloAltura){
                        bolaDY = -bolaDY;
                        tijolo.ativo = 0;
                        
                        tela = document.getElementById("ponto");
                        pontuacao = pontuacao + 10;
                        tela.innerHTML = "Score: "+ pontuacao;
                        gerarEfeitoSonoro ('moeda.mp3');
                        if(pontuacao === totalPontuacao){
                            vitoria();
                        }
                 }
            }
        }
    }
}

function gameover(){
    var gameover = document.getElementById("gameover");
    gameover.style.display = "block";
    bolaDX = 0;
    bolaDY = 0;
    gerarEfeitoSonoro("gameover.mp3");
}

function reiniciar(){
    document.location.reload();
}

function vitoria(){
    var mensagem = document.getElementById("vitoria");
    mensagem.style.display = "block";
    bolaDX = 0;
    bolaDY = 0;
    gerarEfeitoSonoro("vencedor.mp3");
}

function gerarEfeitoSonoro(som){
    var contexto = new (window.AudioContext)

    var requisicao = new XMLHttpRequest();
    requisicao.open('GET',som, true);
    requisicao.responseType = 'arraybuffer';

    requisicao.onload = function(){
         contexto.decodeAudioData(requisicao.response, function(buffer){ 
             var fonte = contexto.createBufferSource();
             fonte.buffer = buffer;
             fonte.connect(contexto.destination);
             fonte.start(0);
         });
    }
    requisicao.send();
}


function desenhar() {
   
    desenho.clearRect(0, 0, canvas.width, canvas.height); //limpa o frame anterior
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisao();

    //analisar colisao eixo X, colisao canto direita/esquerdo
    if (bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius) {
        bolaDX = - bolaDX; //inverte direcao direita/esquerda
        gerarEfeitoSonoro('bordas.mp3');
    }
    //analisa colisao com parte de cima
    if (bolaY + bolaDY < bolaRadius) {
        bolaDY = -bolaDY; //inverte colisao ao bater em cima
        gerarEfeitoSonoro('bordas.mp3');

    } else if (bolaY + bolaDY > canvas.height - bolaRadius - raqueteAltura) {

        //se for maior que o começo da raquete e menor que o final da raquete
        if (bolaX > raqueteX && bolaX < raqueteX + raqueteLargura) {
            bolaDY = -bolaDY;           //inverte direção
            gerarEfeitoSonoro('raquete.mp3')
        } else {
            // document.location.reload(); //reinicia
            gameover();
        }
    }

    
    //se setaDireita estiver ativo &&"e" raqueteX < largura dp canvas - raqueteLargura
    if (setaDireita === true && raqueteX < canvas.width - raqueteLargura) {
        raqueteX = raqueteX + velocidadeRaquete;    //anda para direita

        //se setaEsquerda estiver ativo &&"e" raqueteX > 0"começo do canvas"
    } else if (setaEsquerda === true && raqueteX > 0) {
        raqueteX = raqueteX - velocidadeRaquete;    //anda para esquerda
        
    }

    bolaX = bolaX + bolaDX; // faz bola andar para direita/esquerda
    bolaY = bolaY + bolaDY; // faz a bola andar para cima/baixo




    
    requestAnimationFrame(desenhar) //atualizar tela de forma suave
}

desenhar(); //chama função desenhar

