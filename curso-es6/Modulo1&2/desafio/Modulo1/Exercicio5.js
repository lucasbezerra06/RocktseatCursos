const arr = [1, 2, 3, 4, 5, 6]
function soma(x, ...y){
    const concatArr = [x, ...y]
    return concatArr.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3


const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome : 'Gabriel'};
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade:'Lontras'}}

console.log(usuario2)
console.log(usuario3)

   