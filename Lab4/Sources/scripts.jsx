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
    //#region FifthTask
    regEx = '^[^b]og';
    output = document.getElementById('fifth');
    output.innerHTML = '';
    output.innerHTML += 'Задание:\nMatch hog\nMatch dog\nSkip bog\n\nВыражение: ' + regEx + '\n\n';
    output.innerHTML += 'Результаты:\n';
    output.innerHTML += 'hog: ' + 'hog'.match(regEx) + '\n';
    output.innerHTML += 'dog: ' + 'dog'.match(regEx) + '\n';
    output.innerHTML += 'bog: ' + 'bog'.match(regEx) + '\n';
    //#endregion
    //#region SixthTask
    regEx = '^[A-Z].*';
    output = document.getElementById('sixth');
    output.innerHTML = '';
    output.innerHTML += 'Задание:\nMatch Ana\nMatch Bob\nMatch Cpc\nSkip aax\nSkip bby\nSkip ccz\n\nВыражение: ' + regEx + '\n\n';
    output.innerHTML += 'Результаты:\n';
    output.innerHTML += 'Ana: ' + 'Ana'.match(regEx) + '\n';
    output.innerHTML += 'Bob: ' + 'Bob'.match(regEx) + '\n';
    output.innerHTML += 'Cpc: ' + 'Cpc'.match(regEx) + '\n';
    output.innerHTML += 'aax: ' + 'aax'.match(regEx) + '\n';
    output.innerHTML += 'bby: ' + 'bby'.match(regEx) + '\n';
    output.innerHTML += 'ccz: ' + 'ccz'.match(regEx) + '\n';
    //#endregion
    //#region SeventhTask
    regEx = 'waz\{1,\}up';
    output = document.getElementById('seventh');
    output.innerHTML = '';
    output.innerHTML += 'Задание:\nMatch wazzzzzup\nMatch wazzzup\nSkip Wazup\n\nВыражение: ' + regEx + '\n\n';
    output.innerHTML += 'Результаты:\n';
    output.innerHTML += 'wazzzzzup: ' + 'wazzzzzup'.match(regEx) + '\n';
    output.innerHTML += 'wazzzup: ' + 'wazzzup'.match(regEx) + '\n';
    output.innerHTML += 'Wazup: ' + 'Wazup'.match(regEx) + '\n';
    //#endregion
    //#region EighthTask
    regEx = '.*c\{1,\}';
    output = document.getElementById('eighth');
    output.innerHTML = '';
    output.innerHTML += 'Задание:\nMatch aaaabcc\nMatch aabbbbc\nMatch aacc\nSkip a\n\nВыражение: ' + regEx + '\n\n';
    output.innerHTML += 'Результаты:\n';
    output.innerHTML += 'aaaabcc: ' + 'aaaabcc'.match(regEx) + '\n';
    output.innerHTML += 'aabbbbc: ' + 'aabbbbc'.match(regEx) + '\n';
    output.innerHTML += 'aacc: ' + 'aacc'.match(regEx) + '\n';
    output.innerHTML += 'a: ' + 'a'.match(regEx) + '\n';
    //#endregion
    //#region NinthTask
    regEx = '.*\[?]$';
    output = document.getElementById('ninth');
    output.innerHTML = '';
    output.innerHTML += 'Задание:\nMatch 1 file found?\nMatch 2 files found?\nMatch 24 files found?\nSkip No files found.\n\nВыражение: ' + regEx + '\n\n';
    output.innerHTML += 'Результаты:\n';
    output.innerHTML += '1 file found?: ' + '1 file found?'.match(regEx) + '\n';
    output.innerHTML += '2 files found?: ' + '2 files found?'.match(regEx) + '\n';
    output.innerHTML += '24 files found?: ' + '24 files found?'.match(regEx) + '\n';
    output.innerHTML += 'No files found.: ' + 'No files found.'.match(regEx) + '\n';
    //#endregion
    //#region TenthTask
    regEx = '[1-9]\. \{1,\}abc';
    output = document.getElementById('tenth');
    output.innerHTML = '';
    output.innerHTML += 'Задание:\nMatch 1.  abc\nMatch 2.    abc\nMatch 3.     abc\nSkip 4.abc\n\nВыражение: ' + regEx + '\n\n';
    output.innerHTML += 'Результаты:\n';
    output.innerHTML += '1.  abc: ' + '1.  abc'.match(regEx) + '\n';
    output.innerHTML += '2.    abc: ' + '2.    abc'.match(regEx) + '\n';
    output.innerHTML += '3.     abc: ' + '3.     abc'.match(regEx) + '\n';
    output.innerHTML += '4.abc: ' + '4.abc'.match(regEx) + '\n';
    //#endregion
    //#region EleventhTask
    regEx = '^Mission';
    output = document.getElementById('eleventh');
    output.innerHTML = '';
    output.innerHTML += 'Задание:\nMatch Mission: successful\n'
    output.innerHTML += 'Skip Last Mission: unsuccessful\Skip Next Mission: successful upon capture of target\n\nВыражение: ' + regEx + '\n\n';
    output.innerHTML += 'Результаты:\n';
    output.innerHTML += 'Mission: successful: ' + 'Mission: successful'.match(regEx) + '\n';
    output.innerHTML += 'Last Mission: unsuccessful: ' + 'Last Mission: unsuccessful'.match(regEx) + '\n';
    output.innerHTML += 'Next Mission: successful upon capture of target: ' + 'Next Mission: successful upon capture of target'.match(regEx) + '\n';
    //#endregion
    //#region TwelfthTask
    regEx = '(.*)\.pdf$';
    output = document.getElementById('twelfth');
    output.innerHTML = '';
    output.innerHTML += 'Задание:\nMatch file_record_transcript.pdf\n';
    output.innerHTML += 'Match file_07241999.pdf\n'
    output.innerHTML += 'Skip testfile_fake.pdf.tmp\nВывести только имена файлов\n\nВыражение: ' + regEx + '\n\n';
    output.innerHTML += 'Результаты:\n';
    output.innerHTML += 'file_record_transcript.pdf: ' + ('file_record_transcript.pdf'.match(regEx))[1] + '\n';
    output.innerHTML += 'file_07241999.pdf: ' + ('file_07241999.pdf'.match(regEx))[1] + '\n';
    output.innerHTML += 'testfile_fake.pdf.tmp: ' + 'testfile_fake.pdf.tmp'.match(regEx) + '\n';
    //#endregion
}