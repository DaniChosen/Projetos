function buscar(){
var seletor = document.getElementById('moeda').value;
var resultado = document.getElementById('resultado');


    fetch('https://api.coingecko.com/api/v3/simple/price?ids='+seletor+'&vs_currencies=brl')
    .then(response =>response.json())
    .then(data => {

        var preco = data[seletor].brl;
        resultado.textContent = formatar(preco);
        mudarImagem(seletor);

    }).catch(error => resultado.textContent = error);

}
 function formatar(valor){
    valor = Number(valor).toFixed(2).replace('.',',');
    valor = "R$"+valor;
    return valor;
 }

 function mudarImagem(seletor){
    var moeda = document.getElementById('imagem');


    if(seletor=="bitcoin"){
    moeda.innerHTML = '<img width="200" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/12832/production/_99262857_gettyimages-881768862.jpg">'

    }else if (seletor== "ethereum"){
        moeda.innerHTML = '<img width="200" src="https://cdn2.storyasset.link/588f9e27-3378-4c07-9087-89fb51d6b852/ms-ziteawiazq.jpg">'

    }else if (seletor== "litecoin"){
        moeda.innerHTML = '<img width="200" src="https://files.tecnoblog.net/wp-content/uploads/2022/09/litecoin-1060x705.jpg">'

    }else if (seletor== "dogecoin"){
        moeda.innerHTML = '<img width="200" src="https://www.infomoney.com.br/wp-content/uploads/2021/12/executium-pQEfJZYDpL0-unsplash-2.jpg?fit=1280%2C851&quality=50&strip=all">' 
    }     

}








