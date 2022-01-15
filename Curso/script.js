const botao = document.querySelector('button');
const condicao = document.querySelector('#status');
const especie = document.querySelector('#especie');
const imagem = document.querySelector('img');
const nomeDoPersonagem = document.querySelector('#nome');

const img = document.querySelector('#imagem2');
const estado = document.querySelector('#status');
const species = document.querySelector('#species');
const nameCaracter = document.querySelector('#name');


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
pegarPersonagens = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        img.src = data.image;
        img.alt = data.name;
        nameCaracter.innerHTML = data.name;
        species.innerHTML = data.species;
        estado.innerHTML = traduzirCondicao(data);
    })
}




botao.onclick = pegarPersonagem;
botao.onclick = pegarPersonagens;
 
