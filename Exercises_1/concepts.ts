// Escreva uma função que aceita um array de números e retorna a soma de todos os elementos.
function sumElements(array: number[]): number {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

const numberList: number[] = [1, 2, 3, 4, 5]
console.log(sumElements(numberList))