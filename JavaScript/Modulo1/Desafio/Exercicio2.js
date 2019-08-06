const pares = (x, y) => {
    let maior, menor;

    if(x >= y){
        maior = x;
        menor = y;
    }else{
        maior = y;
        menor = x;
    }


    for(i = menor; i <= maior; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}

pares(32, 321);