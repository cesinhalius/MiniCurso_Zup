const botao = document.querySelector('button');
const condicao = document.querySelector('#status');
const especie = document.querySelector('#especie');
const imagem = document.querySelector('img');
const nomeDoPersonagem = document.querySelector('#nome');




traduzirCondicao = (data) =>{
    if(data.status == 'unknown'){
        return 'Não sabemos'
    }else if(data.status == 'Alive'){
        return 'Sim'
    }else{
        return 'Não,Esta Morto'
    }
}




gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}


pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = traduzirCondicao(data);
    })
}





botao.onclick = pegarPersonagem;

 
