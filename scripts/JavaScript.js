let firstValue = null;
let pendingOperator = null;

function buttonPressed()
	{
		alert('You pressed the button!');	
	}

	function displayText()
	{
		var myVar;
		myVar = document.getElementById('txt1').value;
		alert(myVar);
	}

	function moveTextDown()
	{
		var inputText;
		inputText = document.getElementById('txt2').value;
		document.getElementById('txt3').value = inputText;
		document.getElementById('txt2').value = "";
	
	}

	function moveTextUp()
	{
		var inputText;
		inputText = document.getElementById('txt3').value;
		document.getElementById('txt2').value = inputText;
		document.getElementById('txt3').value = "";
	
	}

	function setOperator(operator)
	{
		const valueField = document.getElementById('txtValue1');
		const displayField = document.getElementById('txtCalcScreen');
		const currentValue = valueField.value.trim();

		if (currentValue === '')
		{
			alert('Please enter a number first.');
			return;
		}

		firstValue = Number(currentValue);
		pendingOperator = operator;
		document.getElementById('functionSelected').value = operator;
		displayField.value = firstValue + ' ' + operator;
		valueField.value = '';
	}

	function add()
	{
		setOperator('+');
	}

	function subtract()
	{
		setOperator('-');
	}

	function multiply()
	{
		setOperator('*');
	}

	function divide()
	{
		setOperator('/');
	}

	function equals()
	{
		const valueField = document.getElementById('txtValue1');
		const displayField = document.getElementById('txtCalcScreen');
		const answerField = document.getElementById('txtAnswer');

		if (firstValue === null || pendingOperator === null)
		{
			alert('Please choose an operator and enter a second number.');
			return;
		}

		const secondValue = Number(valueField.value);

		if (valueField.value.trim() === '')
		{
			alert('Please enter a second number.');
			return;
		}

		let answer = 0;

		switch (pendingOperator)
		{
			case '+':
				answer = firstValue + secondValue;
				break;
			case '-':
				answer = firstValue - secondValue;
				break;
			case '*':
				answer = firstValue * secondValue;
				break;
			case '/':
				if (secondValue === 0)
				{
					alert('Cannot divide by zero.');
					return;
				}
				answer = firstValue / secondValue;
				break;
			default:
				alert('Invalid operator selected.');
				return;
		}

		displayField.value = firstValue + ' ' + pendingOperator + ' ' + secondValue + ' = ' + answer;
		answerField.value = answer;
		valueField.value = answer;
		firstValue = null;
		pendingOperator = null;
		document.getElementById('functionSelected').value = '';
	}

	function clearCalculator()
	{
		firstValue = null;
		pendingOperator = null;
		document.getElementById('txtValue1').value = '';
		document.getElementById('txtCalcScreen').value = '';
		document.getElementById('txtAnswer').value = '';
		document.getElementById('functionSelected').value = '';
	}

