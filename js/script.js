function trocarDica(){
    const apiUrl = 'https://api.adviceslip.com/advice';

    fetch(apiUrl).then(resposta => {
        if (!resposta.ok) {
        throw new Error('Erro ao fazer a solicitação à API');
        }
        return resposta.json(); 
    }).then(dados => {
        document.getElementById("span_id").innerHTML = "#" + dados.slip.id;
        document.getElementById("texto_dica").innerHTML = dados.slip.advice;

        console.log(dados);
    }).catch(error => {
        console.error('Erro:', error);
    });  
    
}