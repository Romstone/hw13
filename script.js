const first = document.getElementById('first_value');
const second = document.getElementById('second_value');
const operator = document.getElementById('operator');
const res_calc = document.getElementById('res_calc')

function calc() {
    let res = 0, firstOp = +first.value, secondOp = +second.value;
    switch (operator.value) {
        case '+':
            res = firstOp + secondOp;
            break;
        case '-':
            res = firstOp - secondOp;
            break;
        case '/':
            res = firstOp / secondOp;
            break;
        case '*':
            res = firstOp * secondOp;
            break;
    }
    res_calc.textContent = res.toString();
}

const input = document.getElementById('item_input');
const sum = document.getElementById('sum_item');
const arrayRes = document.getElementById('array_result');
const arrValue = localStorage.getItem("addItem_function");
const arr = (arrValue) ? JSON.parse(arrValue) : [];

function addItem() {
    const inputOp = input.value;
    if (isNumber(inputOp)) {
        arr.push(+inputOp);
    } else {
        alert("Not a number!");
    }
    let res = 0;
    for (const arrElement of arr) {
        res += arrElement;
    }
    localStorage.setItem("arrItem_function", JSON.stringify(arr));
    sum.textContent = res.toString();
    arrayRes.textContent = JSON.stringify(arr);
}

const inputReverse = document.getElementById('number_input');
const reverseRes = document.getElementById('reverse_result');

function reverseNumber() {
    let x = 0;
    if (isNumber(inputReverse.value)) {
        x = inputReverse.value
    } else {
        alert("Not a number!");
    }
    x = x + "";
    reverseRes.textContent = x.split("").reverse().join("");
}
function isNumber(x){
    if(x === ''){
        return false;
    }
    const numX = +x;
    if(isNaN(numX)){
        return false;
    } else {
        return true;
    }
}