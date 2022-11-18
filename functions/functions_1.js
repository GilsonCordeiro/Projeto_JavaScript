// function expression
// parametros da funcao
const sum = function(number1, number2){
     total = number1 + number2
     return total
}
sum(2, 3 )// arguments - argumentos
sum(2.332, 1223 )
let number1 = 23
let number2 = 20 

console.log(`O numero 1 é ${number1}`)
console.log(`O numero 2 é ${number2}`)
console.log(`a soma dos 2 é ${sum(number1, number2)}`)

//arrow function

// const sayMayName = () => {
//     console.log('Maky')
// }
// sayMayName()

// ou assim
const sayMayName = (name) => {
    console.log(name)
}
sayMayName('Maky')

// function()  construtor
// expressao new
// criar novo objeto
// this keyword

function Person(name) {
    this.name = name
}
const maky = new Person("Maky")
console.log(maky)

let date = new Date("2020-02-04")
console.log(date)

// Manipulacao String em numeros
// transformacao de string e numeros
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar qtos caracteres tem a palavra
let word = "Paralelepipedo"
console.log(word.length)

let num = 12345
console.log(String(num).length)
