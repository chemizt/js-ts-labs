function useSimpleCalc()
{
    let firstArg = (document.getElementById('firstInput') as HTMLInputElement).value;
    let operation = (document.getElementById('secondInput') as HTMLInputElement).value;
    let secondArg = (document.getElementById('thirdInput') as HTMLInputElement).value;
    let result = document.getElementById('output');
    class Calculator
    {
        a: number;
        b: number;

        public add() 
        {
            return this.a + this.b;
        }
        public multiply()
        {
            return this.a * this.b;
        }
        public read()
        {
            this.a = parseInt(firstArg);
            this.b = parseInt(secondArg);
        }
    }
    let calc = new Calculator();
    calc.read();
    switch (operation)
    {
        case '+': {
            result.innerHTML = '';
            if (isNaN(calc.a)) result.innerHTML += 'Некорректно введён первый аргумент. ';
            if (isNaN(calc.b)) result.innerHTML += 'Некорректно введён второй аргумент.';
            if (!isNaN(calc.a) && !isNaN(calc.b)) result.innerHTML = 'Результат: ' + calc.add();
            break;
        }
        case '*': {
            result.innerHTML = '';
            if (isNaN(calc.a)) result.innerHTML += 'Некорректно введён первый аргумент. ';
            if (isNaN(calc.b)) result.innerHTML += 'Некорректно введён второй аргумент.';
            if (!isNaN(calc.a) && !isNaN(calc.b)) result.innerHTML = 'Результат: ' + calc.multiply();
            break;
        }
        default: {
            result.innerHTML = 'Некорректно введена операция (поддерживаются только "+" и "*")';
            break;
        }
    }
}

function useConstructedCalc()
{
    let firstArg = (document.getElementById('firstInput') as HTMLInputElement).value;
    let operation = (document.getElementById('secondInput') as HTMLInputElement).value;
    let secondArg = (document.getElementById('thirdInput') as HTMLInputElement).value;
    let result = document.getElementById('output');
    class Calculator
    {
        a: number;
        b: number;
        read: Function;
        add: Function;
        multiply: Function;
        constructor()
        {
            this.read = function ()
            {
                this.a = parseInt(firstArg);
                this.b = parseInt(secondArg);
            }
            this.read();
            this.add = function ()
            {
                return this.a + this.b;
            }
            this.multiply = function ()
            {
                return this.a * this.b;
            }
        }
    }
    let calc = new Calculator();
    switch (operation)
    {
        case '+': {
            result.innerHTML = '';
            if (isNaN(calc.a)) result.innerHTML += 'Некорректно введён первый аргумент. ';
            if (isNaN(calc.b)) result.innerHTML += 'Некорректно введён второй аргумент.';
            if (!isNaN(calc.a) && !isNaN(calc.b)) result.innerHTML = 'Результат: ' + calc.add();
            break;
        }
        case '*': {
            result.innerHTML = '';
            if (isNaN(calc.a)) result.innerHTML += 'Некорректно введён первый аргумент. ';
            if (isNaN(calc.b)) result.innerHTML += 'Некорректно введён второй аргумент.';
            if (!isNaN(calc.a) && !isNaN(calc.b)) result.innerHTML = 'Результат: ' + calc.multiply();
            break;
        }
        default: {
            result.innerHTML = 'Некорректно введена операция (поддерживаются только "+" и "*")';
            break;
        }
    }
}

function useExtendableCalc()
{
    let firstArg = parseInt((document.getElementById('firstInput') as HTMLInputElement).value);
    let operation = (document.getElementById('secondInput') as HTMLInputElement).value;
    let secondArg = parseInt((document.getElementById('thirdInput') as HTMLInputElement).value);
    let result = document.getElementById('output');
    class ExtendableCalculator
    {
        a: number;
        b: number;
        op: string;
        methods: Map<String, Function>;
        public calculate(arg: string)
        {
            let split = arg.split(' ');
            this.a = parseInt(split[0]);
            this.b = parseInt(split[2]);
            this.op = split[1];
            return this.methods.get(this.op)(this.a, this.b);
        }
        public addMethod(name: string, func: Function)
        {
            this.methods.set(name, func);
        }
        constructor()
        {
            this.methods = new Map();
            this.methods.set("+", function (a: number, b: number) { return a + b; });
            this.methods.set("-", function (a: number, b: number) { return a - b; });
        }
    }
    let calc = new ExtendableCalculator();
    calc.addMethod("*", function (a, b) { return a * b; });
    calc.addMethod("/", function (a, b) { return a / b; });
    calc.addMethod("^", function (a, b) { return Math.pow(a, b); });
    switch (operation)
    {
        case '+': {
            result.innerHTML = '';
            if (isNaN(firstArg)) result.innerHTML += 'Некорректно введён первый аргумент. ';
            if (isNaN(secondArg)) result.innerHTML += 'Некорректно введён второй аргумент.';
            if (!isNaN(firstArg) && !isNaN(secondArg)) result.innerHTML = 'Результат: ' + calc.calculate(firstArg + ' + ' + secondArg);
            break;
        }
        case '-': {
            result.innerHTML = '';
            if (isNaN(firstArg)) result.innerHTML += 'Некорректно введён первый аргумент. ';
            if (isNaN(secondArg)) result.innerHTML += 'Некорректно введён второй аргумент.';
            if (!isNaN(firstArg) && !isNaN(secondArg)) result.innerHTML = 'Результат: ' + calc.calculate(firstArg + ' - ' + secondArg);
            break;
        }
        case '*': {
            result.innerHTML = '';
            if (isNaN(firstArg)) result.innerHTML += 'Некорректно введён первый аргумент. ';
            if (isNaN(secondArg)) result.innerHTML += 'Некорректно введён второй аргумент.';
            if (!isNaN(firstArg) && !isNaN(secondArg)) result.innerHTML = 'Результат: ' + calc.calculate(firstArg + ' * ' + secondArg);
            break;
        }
        case '/': {
            result.innerHTML = '';
            if (isNaN(firstArg)) result.innerHTML += 'Некорректно введён первый аргумент. ';
            if (isNaN(secondArg)) result.innerHTML += 'Некорректно введён второй аргумент.';
            if (!isNaN(firstArg) && !isNaN(secondArg)) result.innerHTML = 'Результат: ' + calc.calculate(firstArg + ' / ' + secondArg);
            break;
        }
        case '^': {
            result.innerHTML = '';
            if (isNaN(firstArg)) result.innerHTML += 'Некорректно введён первый аргумент. ';
            if (isNaN(secondArg)) result.innerHTML += 'Некорректно введён второй аргумент.';
            if (!isNaN(firstArg) && !isNaN(secondArg)) result.innerHTML = 'Результат: ' + calc.calculate(firstArg + ' ^ ' + secondArg);
            break;
        }
        default: {
            result.innerHTML = 'Некорректно введена операция (поддерживаются только "+", "-", "*", "/", "^")';
            break;
        }
    }
}

function callChain()
{
    let ladder =
    {
        step: 0,
        up: function ()
        {
            this.step++;
            return this;
        },
        down: function ()
        {
            this.step--;
            return this;
        },
        showStep: function ()
        {
            alert('Текущая ступень: ' + this.step);
        }
    }
    ladder.up().up().up().down().up();
    ladder.showStep();
}

function calculateVarParent()
{
    function sum(a: number)
    {
        let currentSum = a;
        function f(b: number)
        {
            currentSum += b;
            return f;
        }
        f.toString = function ()
        {
            return currentSum;
        }
        return f;
    }
    alert('Сумма (5)(11)(97): ' + sum(5)(11)(97)(113));
}

function findPrimes()
{
    let result = document.getElementById('output');
    let array = new Array(100);
    result.innerHTML = 'Числа: ';
    function inputArray()
    {
        for (let i = 0; i < 100; i++)
        {
            array[i] = i;
        }
    }
    function outputArray(array)
    {
        let s = 0;
        array.forEach(function (element)
        {
            s = s + element;
            if (element != 0) result.innerHTML += element + ' ';
        });
        result.innerHTML += '\nСумма: ' + s;
    }
    function simplifyArray(array, nextP)
    {
        for (let p = 2 * nextP; p < 100; p += nextP)
        {
            array[p] = 0;
        }
    }
    function reconstructArray(array)
    {
        for (let p = 2; p * p < 100; p++)
        {
            if (array[p] != 0)
            {
                simplifyArray(array, array[p]);
            }
        }
    }
    inputArray();
    reconstructArray(array);
    outputArray(array);
}

function performOperation()
{
    let radioButton = document.querySelector('input[name="action"]:checked') as HTMLInputElement;
    switch (radioButton.value)
    {
        case 'useSimpleCalc': {
            useSimpleCalc();
            break;
        }
        case 'useConstructedCalc': {
            useConstructedCalc();
            break;
        }
        case 'useExtendableCalc': {
            useExtendableCalc();
            break;
        }
        case 'callChain': {
            callChain();
            break;
        }
        case 'calculateVarParent': {
            calculateVarParent();
            break;
        }
        case 'findPrimes': {
            findPrimes();
            break;
        }
    }
}

function changeSelection()
{
    //#region prepWork - подготовка страницы
    let result = document.getElementById('output');
    let firstInput = document.getElementById('firstInput');
    let secondInput = document.getElementById('secondInput');
    let thirdInput = document.getElementById('thirdInput');
    let request = document.getElementById('request');
    result.hidden = false;
    firstInput.hidden = false;
    secondInput.hidden = false;
    thirdInput.hidden = false;
    result.innerHTML = 'Здесь будет результат';
    //#endregion
    let radioButton = document.querySelector('input[name="action"]:checked') as HTMLInputElement;
    switch (radioButton.value)
    {
        case 'useSimpleCalc': {
            request.innerHTML = 'Введите операнд №1, операцию и операнд №2';
            break;
        }
        case 'useConstructedCalc': {
            request.innerHTML = 'Введите операнд №1, операцию и операнд №2';
            break;
        }
        case 'useExtendableCalc': {
            request.innerHTML = 'Введите операнд №1, операцию и операнд №2';
            break;
        }
        case 'callChain': {
            request.innerHTML = 'Нажмите на кнопку для проверки цепочки вызовов';
            result.hidden = true;
            firstInput.hidden = true;
            secondInput.hidden = true;
            thirdInput.hidden = true;
            break;
        }
        case 'calculateVarParent': {
            request.innerHTML = 'Нажмите на кнопку для проверки суммирования с произвольным числом аргументов';
            result.hidden = true;
            firstInput.hidden = true;
            secondInput.hidden = true;
            thirdInput.hidden = true;
            break;
        }
        case 'findPrimes': {
            request.innerHTML = 'Нажмите на кнопку для поиска простых чисел и их суммы';
            firstInput.hidden = true;
            secondInput.hidden = true;
            thirdInput.hidden = true;
            break;
        }
    }
}
