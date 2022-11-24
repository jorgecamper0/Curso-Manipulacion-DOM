const h1 = document.querySelector("h1")
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#resultado')
const form = document.querySelector('#formulario')

form.addEventListener('submit',btnOnClick)

function btnOnClick(event) {
    //console.log({event})
    event.preventDefault()
 const sumaInputs = input1.value + input2.value;
 resultado.innerHTML = "Resultado " + sumaInputs;
}