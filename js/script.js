const reset = document.getElementById('btnReestablecer');
const counter = document.getElementById('contadorVisitas');

const getCount = () => localStorage.getItem('countVisit') || 0; //=declaración de laq funcion get count

const setCount = (visit) => localStorage.setItem('countVisit', visit) //=declaración de laq funcion set count

let countVisit = getCount()

const updateCount = () => { //esta es la declaración de la función de actualizar nº de localStorage
    setCount(countVisit)
    counter.textContent = countVisit
}

countVisit++ // sumamos uno a nuestro contador

updateCount() // ejecutamos la actualización

console.log(localStorage.getItem('countVisit'))

reset.addEventListener("click", () => {
        localStorage.setItem('countVisit', 0)
        counter.textContent = localStorage.getItem('countVisit')
})

/*
// capturar sitio donde va el número de visitas y el botón de restablecer
// Guardar el dato en el localStorage
// Cada que se refresca la página se añade una visita al navegador
// Al pulsar le botón de restabler contador se pondrá a 0
// Que TODO FUNCIONE

const btnReestablecer = document.getElementById("btnReestablecer")
const contadorVisitas = document.getElementById("contadorVisitas")

const getCount = () => localStorage.getItem("countVisit") || 0 // Esta es la declaración de la función getCount
const setCount = (visit) => localStorage.setItem('countVisit', visit) // Esta es la declaración de la función setCount

let countVisit = getCount()

const updateCount = () => { // Esta es la función de declaración de actualizar el número en el localStorage
  setCount(countVisit)
  contadorVisitas.textContent = countVisit
}

countVisit++ //sumamos 1 a nuerstro contador 
updateCount() // ejecutamos la actualización

btnReestablecer.addEventListener("click", () => {
  localStorage.setItem("countVisit", 0)
  contadorVisitas.textContent = localStorage.getItem("countVisit")
})


// console.log(suma(3,5))

// function suma (a, b) { // NO lo estoy guardando en una variable
//   return a + b
// }


// const resta = (a,b) => { // sí lo estoy guardando en una variable
//   return a - b
// }
// console.log(resta(8, 5))

// const palabra = "hola"
// console.log(palabra)






// Solución Mathias

// let visitas = Number(localStorage.getItem("visitas")) || 0; 
// visitas++; 
// const setVisits = (visits) => localStorage.setItem("visitas", visits);

// const updateVisit = () => {
//   setVisits(visitas)
// }

// updateVisit()


// document.getElementById("contadorVisitas").textContent = visitas;
*/