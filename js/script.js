const reset = document.getElementById('btnReestablecer');
const counter = document.getElementById('contadorVisitas');

const getCount = () => localStorage.getItem('countVisit') || 0;

const setCount = (visit) => localStorage.setItem('countVisit', visit)

let countVisit = getCount()

const updateCount = () => {
    setCount(countVisit)
    counter.textContent = countVisit
}

countVisit++

updateCount()



reset.addEventListener("click", () => {
        localStorage.setItem('countVisit', 0)
        counter.textContent = localStorage.getItem('countVisit')
})
