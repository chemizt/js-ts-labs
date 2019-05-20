function checkAgeSubroutine(age)
{
  return age > 18 ? true : false;
}

function minSubroutine(fC, sC)
{
  return fC < sC ? 1 : fC > sC ? 2 : 0;
}

function pow(x, n)
{
  result = n === 0 ? x : x * pow(x, n - 1);
  return result;
}

function sumSubroutine(number)
{
  return number * (number + 1) / 2;
}

function factorial(number)
{
  return number === 1 ? 1 : number * factorial(number - 1);
}

function fibAtIndex(index)
{
  return (index === 1 || index === 2) ? 1 : fibAtIndex(index - 1) + fibAtIndex(index - 2);
}

function checkAge()
{
  let input = document.getElementById('firstInput');
  let outcome = document.getElementById('output');
  if (checkAgeSubroutine(input.value))
  {
    outcome.innerHTML = 'Доступ разрешён';
  }
  else
  {
    confirm('Родители разрешили?')
      ? (outcome.innerHTML = 'Доступ разрешён')
      : (outcome.innerHTML = 'Доступ запрещён');
  }
}

function findMin()
{
  let firstInput = document.getElementById('firstInput');
  let secondInput = document.getElementById('secondInput');
  let outcome = document.getElementById('output');
  let min = minSubroutine(firstInput.value, secondInput.value);
  outcome.innerHTML = min === 2 ? 'Большее число - ' + firstInput.value :
    min === 1 ? 'Большее число - ' + secondInput.value : 'Числа равны';
}

function numPower()
{
  let base = document.getElementById('firstInput');
  let exp = document.getElementById('secondInput');
  let outcome = document.getElementById('output');
  outcome.innerHTML = base.value + '^' + exp.value + ' = ' + pow(base.value, exp.value);
}

function sumUpTo()
{
  let input = document.getElementById('firstInput');
  let outcome = document.getElementById('output');
  outcome.innerHTML = 'Сумма чисел до ' + input.value + ' включительно: ' + sumSubroutine(parseInt(input.value));
}

function findFactorial()
{
  let input = document.getElementById('firstInput');
  let outcome = document.getElementById('output');
  outcome.innerHTML = 'Факториал числа ' + input.value + ': ' + factorial(parseInt(input.value));
}

function findFibNumber()
{
  let input = document.getElementById('firstInput');
  let outcome = document.getElementById('output');
  outcome.innerHTML = 'Число Фибоначчи под номером ' + input.value + ': ' + fibAtIndex(parseInt(input.value));
}

function performOperation()
{
  let radioButton = document.querySelector('input[name="action"]:checked');
  switch (radioButton.value)
  {
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

function changeSelection()
{
  //#region prepWork - подготовка страницы
  let outcome = document.getElementById('output');
  document.getElementById('firstInput').hidden = false;
  document.getElementById('secondInput').hidden = true;
  outcome.hidden = false;
  outcome.innerHTML = 'Здесь будет результат';
  let request = document.getElementById('request');
  //#endregion
  let radioButton = document.querySelector('input[name="action"]:checked');
  switch (radioButton.value)
  {
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
