var frase = "Seus filhos se levantam e a elogiam, seu marido também a elogia, dizendo: 'Muitas mulheres são exemplares, mas você a todas supera. Provérbios 31:28-29";

function gerarFrase(){
var texto = document.getElementById("frase");
texto.innerHTML = frase;

}
function lerfrase(){
    var som = window.speechSynthesis;
    var discurso = new SpeechSynthesisUtterance(frase);
    som.speak(discurso);


}

