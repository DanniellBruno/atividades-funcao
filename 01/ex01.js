function calcularArray (array){
    let soma =0
    for (let i = 0; i < array.length; i++){
        soma += array[i]
    }
    return soma
}

const numeros = [10, 25, 55, 40]
console.log(calcularArray(numeros))