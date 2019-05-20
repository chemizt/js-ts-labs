function checkAgeSubroutine(age) {
    return age > 18 ? true : false;
}
function minSubroutine(fC, sC) {
    return fC < sC ? 1 : fC > sC ? 2 : 0;
}
function pow(x, n) {
    var result = n === 0 ? 1 : x * pow(x, n - 1);
    return result;
}
function sumSubroutine(number) {
    return number * (number + 1) / 2;
}
function factorial(number) {
    return number === 1 ? 1 : number * factorial(number - 1);
}
function fibAtIndex(index) {
    return (index === 1 || index === 2) ? 1 : fibAtIndex(index - 1) + fibAtIndex(index - 2);
}
function checkAge() {
    var input = document.getElementById('firstInput');
    var outcome = document.getElementById('output');
    if (checkAgeSubroutine(parseInt(input.value))) {
        outcome.innerHTML = 'Доступ разрешён';
    }
    else {
        confirm('Родители разрешили?')
            ? (outcome.innerHTML = 'Доступ разрешён')
            : (outcome.innerHTML = 'Доступ запрещён');
    }
}
function findMin() {
    var firstInput = document.getElementById('firstInput');
    var secondInput = document.getElementById('secondInput');
    var outcome = document.getElementById('output');
    var min = minSubroutine(parseInt(firstInput.value), parseInt(secondInput.value));
    outcome.innerHTML = min === 2 ? 'Большее число - ' + firstInput.value :
        min === 1 ? 'Большее число - ' + secondInput.value : 'Числа равны';
}
function numPower() {
    var base = document.getElementById('firstInput');
    var exp = document.getElementById('secondInput');
    var outcome = document.getElementById('output');
    outcome.innerHTML = base.value + '^' + exp.value + ' = ' + pow(parseInt(base.value), parseInt(exp.value));
}
function sumUpTo() {
    var input = document.getElementById('firstInput');
    var outcome = document.getElementById('output');
    outcome.innerHTML = 'Сумма чисел до ' + input.value + ' включительно: ' + sumSubroutine(parseInt(input.value));
}
function findFactorial() {
    var input = document.getElementById('firstInput');
    var outcome = document.getElementById('output');
    outcome.innerHTML = 'Факториал числа ' + input.value + ': ' + factorial(parseInt(input.value));
}
function findFibNumber() {
    var input = document.getElementById('firstInput');
    var outcome = document.getElementById('output');
    outcome.innerHTML = 'Число Фибоначчи под номером ' + input.value + ': ' + fibAtIndex(parseInt(input.value));
}
function performOperation() {
    var radioButton = document.querySelector('input[name="action"]:checked');
    switch (radioButton.value) {
        case 'ageCheck': {
            checkAge();
            break;
        }
        case 'findMin': {
            findMin();
            break;
        }
        case 'numPower': {
            numPower();
            break;
        }
        case 'sumUpTo': {
            sumUpTo();
            break;
        }
        case 'findFactorial': {
            findFactorial();
            break;
        }
        case 'findFibNumber': {
            findFibNumber();
            break;
        }
    }
}
function changeSelection() {
    //#region prepWork - подготовка страницы
    var outcome = document.getElementById('output');
    var secondInput = document.getElementById('secondInput');
    document.getElementById('firstInput').hidden = false;
    document.getElementById('secondInput').hidden = true;
    outcome.hidden = false;
    outcome.innerHTML = 'Здесь будет результат';
    var request = document.getElementById('request');
    //#endregion
    var radioButton = document.querySelector('input[name="action"]:checked');
    switch (radioButton.value) {
        case 'ageCheck': {
            request.innerHTML = 'Введите свой возраст';
            break;
        }
        case 'findMin': {
            request.innerHTML = 'Введите числа, которые необходимо сравнить';
            secondInput.hidden = false;
            break;
        }
        case 'numPower': {
            request.innerHTML = 'Введите основание и показатель степени';
            secondInput.hidden = false;
            break;
        }
        case 'sumUpTo': {
            request.innerHTML = 'Введите число, сумму до которого нужно вычислить';
            break;
        }
        case 'findFactorial': {
            request.innerHTML = 'Введите число, факториал которого необходимо вычислить';
            break;
        }
        case 'findFibNumber': {
            request.innerHTML = 'Введите номер числа Фибоначчи, которое необходимо найти';
            break;
        }
    }
}
