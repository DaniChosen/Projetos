async function buscarClima() {
    var cidade = document.getElementById("cidade").value
    var chave = '826db5a8e4b6c774e15363466a02bd2d';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cidade+'&appid='+chave+'&units=metric';

    try{
        var resposta = await fetch(url);
        var dado = await resposta.json();

        var resultado = document.getElementById("resultado");
        resultado.innerHTML =
        '<h2> Previsão de Tempo Para '+ dado.name +' </h2>'
        +'<p> Temperatura:' + dado.main.temp + 'C°'
        +'<p> Temperatura máxima: ' + dado.main.temp_max + ' C°'
        +'<p> Temperatura mínima: ' + dado.main.temp_min + ' C°'
        +'<p> Temperatura Ambiente: ' + dado.main.feels_like + ' C°'
        +'<p> Humidade: '+dado.main.humidity+ ' %'
        +'<p> Velocidade do vento: '+dado.wind.speed+ 'km/h'
        +'<p> Nuvens: '+dado.weather[0].description+'</p>'
        +'<img src="https://openweathermap.org/img/wn/'+dado.weather[0].icon+'@4x.png">';




    }catch(error){
        var resultado = document. getElementById("resultado");
        resultado.innerHTML= "<p>erro ao buscar o clima:"+error;


    }





}