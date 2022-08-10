let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let one = document.querySelector('#one')
let zero = document.querySelector('.zero')
one.value = '1'

let add = plus.addEventListener('click', (e) => {
    zero.textContent = parseInt(zero.textContent) + parseInt(one.value)
})

let subtract = minus.addEventListener('click', (e) => {
    zero.textContent = parseInt(zero.textContent) - parseInt(one.value)
})