const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(usuario => usuario.idade);
const rocketseat = usuarios.filter(({empresa, idade}) => (empresa === 'Rocketseat' && idade > 18));
const google = usuarios.find(({empresa}) => empresa === 'Google');

const union = usuarios.map(usuario => ({...usuario, idade: usuario.idade * 2})).filter(({idade}) => idade <= 50);

console.log(idades, rocketseat, google, union);