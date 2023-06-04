'use strict'

const addNumber = document.querySelector('.add_Number_Button')
const input = document.querySelector('.number_Input')
const arrDiv = document.querySelector('.array')
const submit = document.querySelector('.calculate')
const result = document.querySelector('.result')
const reload = document.querySelector('.reload')
let array = []


addNumber.addEventListener('click', function () {

    if (input.value) {
        array.push(+input.value)
        input.value = ''
        arrDiv.innerHTML = array

    }

})



submit.addEventListener('click', function () {
    let sum = 0
    if (array.length) {
        array.forEach(el => {
            sum += el
        })
        result.innerHTML = sum / array.length
        array = []
    }
})



reload.addEventListener('click', function () {
    arrDiv.innerHTML = 'numbers'
    result.innerHTML = 'result'
})

