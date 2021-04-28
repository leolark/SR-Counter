let send = document.querySelector('.send');
let resultPercent = document.querySelector('.counter-value-percent');

let geometryOriginal = document.querySelector('.geometry');
let labelsOriginal = document.querySelector('.labels');
let classesOriginal = document.querySelector('.classes');
let operatorOriginal = document.querySelector('.operator');

send.addEventListener('click', (event) => {
    let geometry = geometryOriginal.value * 100 / 12000;
    let labels = labelsOriginal.value * 100 / 11000;
    let classes = classesOriginal.value * 100 / 5000;
    let operator = operatorOriginal.value * 100 / 700;
    let result = geometry + labels + classes + operator;
    result = result.toFixed(2);
    resultPercent.textContent = result + '%';
});