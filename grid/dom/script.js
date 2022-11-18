// getElementById()
// document.getElementById('blog-title')
// console.log(document.getElementById('blog-title'))
// Organizar
// /console.log(element)

//getElementByTagName
// const element = document.getElementsByTagName('meta')
// console.log(element)


// getSelector
// const element = document.querySelector('.one')
// console.log(element)

//Mudar o conteudo
    // const element = document.querySelector('h1')
    // console.log(element)

    // element.textContent = "Olá Devs"
    // console.log(element.textContent)

// Manipular o valor/ conteúdo do input
// const element = document.querySelector('input')
//element.value = "valor que eu quizer"

//Atribuir e pegar o valor
    // console.log(element.value)
    // element.value = "Outro valor"

// Alterar estilos dos elementos
const element = document.querySelector('body')
element.style.backgroundColor = "#f9f3d2"
console.log(element.style.backgroundColor)

// Criando e adicionando elementos
const div = document.createElement('div')
div.innerText="Olá Devs"
// Agora adiciona o elemento a página
const body = document.querySelector('body')
// body.append(div) // adicionando abaixo 
body.prepend(div)

//Evento = Funcao de click
function print(){
    console.log('print')
}

// eventos - argumento event
const input = document.querySelector('input')
input.onkeypress = function(event){
    console.log(event.target.value)
}
