function encontrarMaior(array){
    let maior = array[0]

    for (let i =0; i < array.length; i++){
        if (array[i] > maior){
            maior = array[i]
        }
    }

    return maior
}

const num = [1, 2, 55, 4, 16, 9, 80, 987]
console.log(encontrarMaior(num))