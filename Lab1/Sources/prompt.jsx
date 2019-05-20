var planetName = 'Земля';
var visitorName = 'Виктор';

function requestJSName()
{
	let response = document.getElementById('inputField').value;
	let outcome = document.getElementById('result');
	response.toUpperCase() === 'ECMASCRIPT'
		? (outcome.innerHTML = 'Верно!')
		: (outcome.innerHTML = 'Ваш ответ неверен, "официальное" название - "ECMAScript"');
}

function getSign() 
{
	let response = document.getElementById('inputField').value;
	let outcome = document.getElementById('result');
	let tmp = "";
	switch (Math.sign(response))
	{
		case 1:
			{
				tmp = "Число имеет знак +";
				break;
			}
		case 0:
			{
				tmp = "Число - 0";
				break;
			}
		case -1:
			{
				tmp = "Число имеет знак -";
				break;
			}
		default:
			{
				tmp = "Это не число";
				break;
			}
	}
	outcome.innerHTML = tmp;
}

function checkCredentials()
{
	let login = document.getElementById('inputField').value;
	let password = document.getElementById('passInputField').value;
	let outcome = document.getElementById('result');
	switch (login)
	{
		case 'admin':
			{
				if (password === 'totallySecurePassword')
				{
					outcome.innerHTML = 'Добро пожаловать!';
				} else
				{
					outcome.innerHTML = 'Пароль неверен.';
				}
				break;
			}
		case 'Вася':
			{
				outcome.innerHTML = 'Привет';
				break;
			}
		case 'Директор':
			{
				outcome.innerHTML = 'Здравствуйте';
				break;
			}
		default:
			{
				outcome.innerHTML = 'Пользователя с таким логином не существует.';
				break;
			}
	}
}

function checkAge()
{
	let outcome = document.getElementById('result');
	let age = document.getElementById('inputField').value;
	outcome.innerHTML = 'Здесь будет результат';
	if (Math.sign(age) != NaN)
	{
		if (age < 14 || age > 90)
		{
			outcome.innerHTML = 'Ваш возраст не входит в диапазон';
		}
		else
		{
			outcome.innerHTML = 'Ваш возраст входит в диапазон';
		}
	}
}

function startLoop()
{
	for (let i = 0; i <= 5; i++) alert('Номер ' + i + '!');
}

function startRequestLoop()
{
	do
	{
		var answer = prompt('Введите число большее 100');
		inputCorrect = (answer === null || answer > 100) ? true : false;
	}
	while (!inputCorrect);
}

function outputPrimes()
{
	let outcome = document.getElementById('result');
	let upperBound = document.getElementById('inputField').value;
	if (Math.sign(upperBound) != NaN && upperBound >= 1)
	{
		outcome.innerHTML = 'Простые числа в диапазоне от 1 до ' + upperBound + ': ';
		for (let i = 1; i <= upperBound; i++)
		{
			let isPrime = true;
			for (let j = 2; j <= i && isPrime; j++)
			{
				if (i % j == 0 && i != j) isPrime = false;
				if (i === j) outcome.innerHTML = outcome.innerHTML + i + ' ';
			}
		}
	}
	else
	{
		outcome.innerHTML = 'Верхняя граница диапазона введена неверно!';
	}
}

function browserCheck()
{
	let outcome = document.getElementById('result');
	let browser = document.getElementById('inputField').value;
	if (browser.toUpperCase() === 'IE' || browser.toUpperCase() === 'Internet Explorer')
	{
		outcome.innerHTML = 'О да, у Вас IE!';
	}
	else if (browser.toUpperCase() === 'SAFARI' || browser.toUpperCase() === 'CHROME' || browser.toUpperCase() === 'OPERA' || browser.toUpperCase() === 'FIREFOX')
	{
		outcome.innerHTML = 'Да, и этот браузер мы поддерживаем!';
	}
	else
	{
		outcome.innerHTML = 'Надеемся, и в Вашем браузере всё OK!';
	}
}

function performOperation()
{
	let radioButton = document.querySelector('input[name="action"]:checked');
	switch (radioButton.value)
	{
		case 'stdCheck':
			{
				requestJSName();
				break;
			}
		case 'signCheck':
			{
				getSign();
				break;
			}
		case 'login':
			{
				checkCredentials();
				break;
			}
		case 'ageCheck':
			{
				checkAge();
				break;
			}
		case 'startLoop':
			{
				startLoop();
				break;
			}
		case 'startRequestLoop':
			{
				startRequestLoop();
				break;
			}
		case 'outputPrimes':
			{
				outputPrimes();
				break;
			}
		case 'browserCheck':
			{
				browserCheck();
				break;
			}
	}
}

function changeSelection()
{
	//#region prepWork - подготовка страницы
	let outcome = document.getElementById('result');
	document.getElementById('passInputField').hidden = true;
	document.getElementById('inputField').hidden = false;
	outcome.hidden = false;
	outcome.innerHTML = 'Здесь будет результат';
	outcome = document.getElementById('request');
	//#endregion
	let radioButton = document.querySelector('input[name="action"]:checked');
	switch (radioButton.value)
	{
		case 'stdCheck':
			{
				outcome.innerHTML = 'Каково "официальное" название JavaScript?';
				break;
			}
		case 'signCheck':
			{
				outcome.innerHTML = 'Введите число, знак которого необходимо проверить:';
				break;
			}
		case 'login':
			{
				outcome.innerHTML = 'Введите логин и пароль';
				document.getElementById('passInputField').hidden = false;
				break;
			}
		case 'ageCheck':
			{
				outcome.innerHTML = 'Введите свой возраст';
				break;
			}
		case 'startLoop':
			{
				outcome.innerHTML = 'Нажмите на кнопку - получите результат';
				document.getElementById('passInputField').hidden = true;
				document.getElementById('inputField').hidden = true;
				document.getElementById('result').hidden = true;
				break;
			}
		case 'startRequestLoop':
			{
				outcome.innerHTML = 'Нажмите на кнопку для запуска цикла с запросом';
				document.getElementById('inputField').hidden = true;
				document.getElementById('result').hidden = true;
				break;
			}
		case 'outputPrimes':
			{
				outcome.innerHTML = 'Введите верхнюю границу диапазона';
				break;
			}
		case 'browserCheck':
			{
				outcome.innerHTML = 'Введите название своего браузера';
				break;
			}
	}
}
