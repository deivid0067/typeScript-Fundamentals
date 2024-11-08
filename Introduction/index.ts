
// Type Boolean => Representa valores lógicos: Verdadeiro ou falso
let isActive: boolean = true;
console.log(isActive)

// Type Number => Representa valores númericos, typescript fornece suporte tanto para numeros inteiros quanto para valores de ponto flutuante
const total: number = 0
const pi: number = 3.14159
console.log(pi)

// Para textos e caracteres, são tipados com o tipo string.
let message: string = 'Hello, World'
console.log(message)

const names: string = 'Rocket'
const saudation: string = `Olá, ${names}`
console.log(saudation)

// Arrays => podem ser escrito de duas formas: usando o tipo dos elementos seguido de [] ou usando um tipo de array genérico
const numbers: number[] = [1, 2 ,3] // Elemento seguido []
const fruits: Array<string> = ['Maça', 'Banana', 'Melancia'] // Array utilizazndo tipo generico.

// Tuple => Os tuples permitem expressar um array com um número fixo de elementos cujo tipos são conhecidos, mas não precisam ser iguais.
let endereco: [string, number] = ['Av. Paulista', 1234]

// Enum => Permite definir um conjunto de constante nomeadas. Suporta numéricos e strings
enum Color {Vermelho, Verde ,Azul}
let c: Color = Color.Verde
console.log(Color)

// Any => para capturar valores cujo tipo não é importante e sobre os quais não é necessario realizar checagem de tipo.
let undefinedVariable: any = 4
undefinedVariable = 'Pode ser uma string..'
console.log(undefinedVariable)

// Void, Null e Undefined => void -> Funções que não retornam nada. Null e Undefined são subtipos de todos os outros tipos.
function alert(): void {
    alert('Isso é uma mensagem de alerta')
}