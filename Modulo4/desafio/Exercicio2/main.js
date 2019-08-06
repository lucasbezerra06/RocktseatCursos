let inputElement = document.querySelector('input[name=user]');
let buttonElement = document.querySelector('button');

function buscarGitHub(){
    axios.get(`https://api.github.com/users/${inputElement.value}/repos`).then(function(response){
        buildList(response);
    }).catch(function(error){
        alert('usuário não encontrado!');
    });

}

function buildList(retorno){
    let repos = retorno.data || []
    let lista = document.createElement('ul');
    repos.map((repo) => {
        let item = document.createElement('li');
        let text = document.createTextNode(repo.name);
        item.appendChild(text);
        lista.appendChild(item);
    });
    document.querySelector('body').appendChild(lista);

}