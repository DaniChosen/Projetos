var jogador = "x";
function jogar(celula) {
    // alert("funcionou!");

    // compara se a célula esta vazia para assim escrever
    if (celula.innerHTML == "") {

        //escreve no HTML a letra
        celula.innerHTML = jogador;

        //alterna variavel jogador para a proxima jogada
        if (jogador == "X") {
            jogador = "0";
        } else{
            jogador = "X";
        }

    }

}
// função recarrega pagina
function reiniciar(){
    Window.location.reload();
}


// alex= 0, daniela= 1, daniel= 2, pequena= 3
const nomes = [ 'alex', 'daniela', 'daniel','pequena'];
 
function gerarBatalha(){
    //sorteia um nome da lista, "math.radom vai sortear os itens", "math.floor arredonda o numero o numero da lista"
    const nome1 = nomes[Math.floor(Math.random()* nomes.length)];
    const nome2= nomes[Math.floor(Math.random()* nomes.length)];

    //enquanto nome1 = nome2, sorteia novamente
    while(nome1 === nome2){
        gerarBatalha();
    }


    //escrever na tela
    document.getElementById('jogador1').textContent = nome1;
    document.getElementById('jogador2').textContent = nome2;



}
