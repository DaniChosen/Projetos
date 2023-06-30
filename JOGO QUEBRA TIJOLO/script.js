//definir area do canvas

var  canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

// configurar raquete
var raqueteAltura = 10;
var raqueteLargura = 75;
var raqueteX = (canvas.width - raqueteLargura) / 2; //centralizar raquete
var velocidadeRaquete = 12;

//configurar a bola
var bolaRadius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 4;          //direção da bola em X (esquerda/direita)
var bolaDY = -4;        //direção da bola em Y (acima/abaixo)


var tijolosPorLinha = 3;
var tijolosPorColuna = 7;
var tijoloLargura = 75;
var tijoloAltura = 20;
var tijoloEspacamento =  8;
var espacamentoSuperiorQuadro = 9;
var espacamentoEsquerdoQuadro = 9;
var tijolos = []; //lista com os tijolos

//dedicado apena a inicialização dos tijolos
for(var coluna=0; coluna< tijolosPorColuna; coluna++ ){
    tijolos[coluna] = []  //0 1 2 3 4 5

    for(var linha=0; linha < tijolosPorLinha; linha ++){

        tijolos[coluna][linha] = {x:0, y:0, ativo:1 }
        //x é a posição esquerda/direita no canva
        //y é a posição acima/abaixo no canva
        //ativo, determina se o tijolo aparece ou não, 1 ou 0
    }
}
function desenharTijolos(){
    for(var coluna=0; coluna < tijolosPorColuna; coluna++){
        for(var linha=0; linha < tijolosPorLinha; linha ++){

            if(tijolos[coluna][linha].ativo == 1){ //verifica se tijolo está ativo para desenha-lo
                
                var tijoloX = (coluna * (tijoloLargura + tijoloEspacamento)+ espacamentoEsquerdoQuadro);
                var tijoloY = (linha * (tijoloAltura + tijoloEspacamento) + espacamentoSuperiorQuadro);
                
                tijolos[coluna][linha].x = tijoloX;
                tijolos[coluna][linha].y = tijoloY;

                desenho.beginPath();
                desenho.rect(tijoloX, tijoloY, tijoloLargura, tijoloAltura);
                desenho.fillStyle = "purple";
                desenho.fill();
                desenho.closePath();
            
            }
        }
    }
}

function detectarColisao(){
    for(var coluna=0; coluna < tijolosPorColuna; coluna++){
        for(var linha=0; linha < tijolosPorLinha; linha++){
            
            var tijolo = tijolos[coluna][linha];

            if(tijolo.ativo === 1){

                if(bolaX > tijolo.x 
                    && bolaX < tijolo.x + tijoloLargura
                    && bolaY > tijolo.y
                    && bolaY < tijolo.y +tijoloAltura){
                        bolaDY = -bolaDY;
                        tijolo.ativo = 0;

                }
            }
        }
    }
}

var setaDireita = false;
var setaEsquerda = false;

// movimentação da raquete - detecta descer e subir da tecla
document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla){
    // se o valor = "direita" ||ou valor = "setaDireita"
    if(tecla.key === "Right" || tecla.key === "ArrowRight" ){
        setaDireita = true;   //ativa variavel setaDireita

    // se o valor = "esquerda ||ou valor = "setaEsquerda"
    }else if(tecla.key === "Left" || tecla.key ==="ArrowLeft"){
        setaEsquerda = true;  //ativa variavel setaEsquerda
    }

}

function subirDaTecla(tecla){
     // se o valor = "direita" ||ou valor = "setaDireita"
     if(tecla.key === "Right" || tecla.key === "ArrowRight" ){
        setaDireita = false;   //ativa variavel setaDireita

    // se o valor = "esquerda ||ou valor = "setaEsquerda"
    }else if(tecla.key === "Left" || tecla.key ==="ArrowLeft"){
        setaEsquerda = false;  //ativa variavel setaEsquerda
    }

}

function desenharRaquete(){
    desenho.beginPath();     //iniciar desenho
    desenho.rect(raqueteX,canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "blue";
    desenho.fill();
    desenho.closePath();

}

function desenharBola(){
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "black";
    desenho.fill();
    desenho.closePath();
}

function desenhar(){
    desenho.clearRect(0,0, canvas.width, canvas.height);   //limpa o frame a
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisao();

    if(bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius){
    bolaDX = - bolaDX;
    }


    // se setadireita estiver ativo && "e" raqueteX < largura dp canvas - raquete
    if (setaDireita === true && raqueteX < canvas.width - raqueteLargura){
        raqueteX = raqueteX + velocidadeRaquete; 
    // se setaEsquerda estiver ativo && "e" raqueteX > 0"começo do canvas"
    }else if(setaEsquerda === true && raqueteX > 0){
        raqueteX = raqueteX - velocidadeRaquete;  //andar para a esquerda

    }

    if(bolaY + bolaDY < bolaRadius){

        bolaDY = -bolaDY; //inverte colisao ao bater em cima

    } else if(bolaY + bolaDY > canvas.height - bolaRadius){

        //se for maior que o começo da raquete e menor que o final da raquete
        if(bolaX > raqueteX && bolaX < raqueteX + raqueteLargura){

            bolaDY = -bolaDY;           //inverte direção
        }else{

            document.location.reload(); //reinicia
        }
    }

    bolaX = bolaX + bolaDX; // faz bola andar para direita/esquerda
    bolaY = bolaY + bolaDY; // 
    
    requestAnimationFrame(desenhar) //atualizar tela de forma suave

}
desenhar(); //chama função desenhar


