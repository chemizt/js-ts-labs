function checkRegexes()
{
    //#region FirstTask
    let regEx = 'abc.*';
    let output = document.getElementById('first');
    output.innerHTML = '';
    output.innerHTML += 'Задание:\nMatch abcdefg\nMatch abcde\nMatch abc\n\nВыражение: ' + regEx + '\n\n';
    output.innerHTML += 'Результаты:\n';
    output.innerHTML += 'abcdefg: ' + 'abcdefg'.match(regEx) + '\n';
    output.innerHTML += 'abcde: ' + 'abcde'.match(regEx) + '\n';
    output.innerHTML += 'abc: ' + 'abc'.match(regEx) + '\n';
    //#endregion
    //#region SecondTask
    regEx = '.*123.*';
    output = document.getElementById('second');
    output.innerHTML = '';
    output.innerHTML += 'Задание:\nMatch abc123xyz\nMatch define "123"\nMatch var g = 123;\n\nВыражение: ' + regEx + '\n\n';
    output.innerHTML += 'Результаты:\n';
    output.innerHTML += 'abc123xyz: ' + 'abc123xyz'.match(regEx) + '\n';
    output.innerHTML += 'define "123": ' + 'define "123"'.match(regEx) + '\n';
    output.innerHTML += 'var g = 123: ' + 'var g = 123'.match(regEx) + '\n';
    //#endregion
    //#region ThirdTask
    regEx = '.*\[.]$';
    output = document.getElementById('third');
    output.innerHTML = '';
    output.innerHTML += 'Задание:\nMatch cat.\nMatch 896.\nMatch ?=+.\nSkip abc1\n\nВыражение: ' + regEx + '\n\n';
    output.innerHTML += 'Результаты:\n';
    output.innerHTML += 'cat.: ' + 'cat.'.match(regEx) + '\n';
    output.innerHTML += '896.: ' + '896.'.match(regEx) + '\n';
    output.innerHTML += '?=+.: ' + '?=+.'.match(regEx) + '\n';
    output.innerHTML += 'abc1: ' + 'abc1'.match(regEx) + '\n';
    //#endregion
    //#region FourthTask
    regEx = '^[^dpr]an';
    output = document.getElementById('fourth');
    output.innerHTML = '';
    output.innerHTML += 'Задание:\nMatch can\nMatch man\nMatch fan\nSkip ran\nSkip dan\nSkip pan\n\nВыражение: ' + regEx + '\n\n';
    output.innerHTML += 'Результаты:\n';
    output.innerHTML += 'can: ' + 'can'.match(regEx) + '\n';
    output.innerHTML += 'man: ' + 'man'.match(regEx) + '\n';
    output.innerHTML += 'fan: ' + 'fan'.match(regEx) + '\n';
    output.innerHTML += 'ran: ' + 'ran'.match(regEx) + '\n';
    output.innerHTML += 'dan: ' + 'dan'.match(regEx) + '\n';
    output.innerHTML += 'pan: ' + 'pan'.match(regEx) + '\n';
    //#endregion
}