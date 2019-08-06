let inputElement = document.querySelector('input[name=user]');
let buttonElement = document.querySelector('button');

function buscarGitHub(){
    buildList(['Carregando...']);
    axios.get(`https://api.github.com/users/${inputElement.value}/repos`).then(function(response){
        let repoNames = [];
        response.data.map((elemento) => repoNames.push(elemento.name));
        buildList(repoNames || []);
    }).catch(function(error){
        alert('usuário não encontrado!');
    });

}

function buildList(elementos){
    let lista = document.querySelector('ul[name=repos]');
    if(lista){
        lista.innerHTML = '';
    }else{
        lista = document.createElement('ul');
        lista.setAttribute('name', 'repos');
    }
    elementos.map((elemento) => {
        let item = document.createElement('li');
        let text = document.createTextNode(elemento);
        item.appendChild(text);
        lista.appendChild(item);
    });
    document.querySelector('body').appendChild(lista);

}

