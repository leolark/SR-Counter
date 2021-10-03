"use strict"

const allInputs = document.querySelectorAll('input');
const resultElement = document.querySelector('.counter-value-percent');

const inputValues = {
    geometry: 0,
    labels: 0,
    classes: 0,
    operator: 0
}

const onChangeHandler = (event) => {
    // при каждом изм значения в инпуте, меняем ключи в объекта inputValues
    inputValues[event.target.name] = +event.target.value
    
    // достаем деструктуризацией знчения ключей объекта
    const {geometry, labels, classes, operator} = inputValues

    const result = (geometry * 100 / 12000) 
    + (labels * 100 / 11000) 
    + (classes * 100 / 5000) 
    + (operator * 100 / 700);

    resultElement.innerHTML = `${result.toFixed(2)}%`
}

const keyboardEventHandler = (event) => {
    // деструктуризация объектов/массивов как работает почитать
    const {keyCode, target: {value, max}} = event;  
    // const isValidValue = !value || (+value <= +max);

    const isBeginWithZero = (!value && keyCode === 48) 
    || (!value && keyCode === 96)
    
    const isValidKey = (keyCode >= 48 && keyCode <= 57) 
    || (keyCode >= 96 && keyCode <= 105)
    || (keyCode === 8)

    if (!isValidKey || isBeginWithZero) {
        event.preventDefault()
    }
}

allInputs.forEach((input) => {
    input.addEventListener('input', onChangeHandler)
    input.addEventListener('keydown', keyboardEventHandler)
})