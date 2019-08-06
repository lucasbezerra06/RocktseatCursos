const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 2000);
});
//a proxima linha só vai executar quando o o metodo que estiver depois do 'await' for executada
//async vira uma promise
//o await só pode ser executado dentro de uma função async
//async function executaPromise(){
//   console.log(await minhaPromise());
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//}

const executaPromise = async() => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();