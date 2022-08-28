let numberButtons = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.operator');
let allClear = document.querySelector('.allClear');
let deleteButton = document.querySelector('.delete');
let equalSign = document.querySelector('.equalSign');
let currentOperand = document.querySelector('.currentOperand');
let previousOperand = document.querySelector('.previousOperand');
		
numberButtons.forEach(function(button){
	button.addEventListener('click', function(){
		if(button.innerText.includes('.') && currentOperand.innerText.includes('.')){
			return;
		}
		currentOperand.innerText = currentOperand.innerText + button.innerText;
	});
});
		

operators.forEach(function(operator){
	operator.addEventListener('click', function(){
		if(currentOperand.innerText === '' && previousOperand.innerText.charAt(previousOperand.innerText.length - 1) === '+'
            || currentOperand.innerText === '' && previousOperand.innerText.charAt(previousOperand.innerText.length - 1) === '-'
            || currentOperand.innerText === '' && previousOperand.innerText.charAt(previousOperand.innerText.length - 1) === '÷'
            || currentOperand.innerText === '' && previousOperand.innerText.charAt(previousOperand.innerText.length - 1) === '*'
            || previousOperand.innerText === '' && currentOperand.innerText === ''){
			alert('Initiate a computation by inputing a number');
			return;
		}
	    let result;
	    let number1;
	    let number2;
        if(previousOperand.innerText.charAt(previousOperand.innerText.length - 1) === '+'){
			number1 = parseFloat(previousOperand.innerText.slice(0, previousOperand.innerText.length - 1));
			number2 = parseFloat(currentOperand.innerText);
			result = number1 + number2;
		    currentOperand.innerText = result;
		    previousOperand.innerText = '';
		}
		
        if(previousOperand.innerText.charAt(previousOperand.innerText.length - 1) === '-'){
            number1 = parseFloat(previousOperand.innerText.slice(0, previousOperand.innerText.length - 1));
            number2 = parseFloat(currentOperand.innerText);
			result = number1 - number2;
		    currentOperand.innerText = result;
		    previousOperand.innerText = '';
		}
		
        if(previousOperand.innerText.charAt(previousOperand.innerText.length - 1) === '*'){
			number1 = parseFloat(previousOperand.innerText.slice(0, previousOperand.innerText.length - 1));
			number2 = parseFloat(currentOperand.innerText);
		    result = number1 * number2;
		    currentOperand.innerText = result;
		    previousOperand.innerText = '';
		}
		
        if(previousOperand.innerText.charAt(previousOperand.innerText.length - 1) === '÷'){
			number1 = parseFloat(previousOperand.innerText.slice(0, previousOperand.innerText.length - 1));
			number2 = parseFloat(currentOperand.innerText);
			result = number1 / number2;
		    currentOperand.innerText = result;
		    previousOperand.innerText = '';
		}
		previousOperand.innerText = previousOperand.innerText + currentOperand.innerText + operator.innerText;
		currentOperand.innerText = '';
	});
});
		
		
equalSign.addEventListener('click', function(){
    let result;
	let number1;
	let number2;
    if(previousOperand.innerText.charAt(previousOperand.innerText.length - 1) === '+'){
		number1 = parseFloat(previousOperand.innerText.slice(0, previousOperand.innerText.length - 1));
		number2 = parseFloat(currentOperand.innerText);
		result = number1 + number2;
		currentOperand.innerText = result;
		previousOperand.innerText = '';
	}
		
    if(previousOperand.innerText.charAt(previousOperand.innerText.length - 1) === '-'){
        number1 = parseFloat(previousOperand.innerText.slice(0, previousOperand.innerText.length - 1));
        number2 = parseFloat(currentOperand.innerText);
			result = number1 - number2;
		currentOperand.innerText = result;
		previousOperand.innerText = '';
	}
		
    if(previousOperand.innerText.charAt(previousOperand.innerText.length - 1) === '*'){
		number1 = parseFloat(previousOperand.innerText.slice(0, previousOperand.innerText.length - 1));
		number2 = parseFloat(currentOperand.innerText);
		result = number1 * number2;
		currentOperand.innerText = result;
		previousOperand.innerText = '';
	}
		
    if(previousOperand.innerText.charAt(previousOperand.innerText.length - 1) === '÷'){
	    number1 = parseFloat(previousOperand.innerText.slice(0, previousOperand.innerText.length - 1));
		number2 = parseFloat(currentOperand.innerText);
		result = number1 / number2;
		currentOperand.innerText = result;
		previousOperand.innerText = '';
	}
});
				
deleteButton.addEventListener('click', function() {
	if(currentOperand.innerText === ''){
		previousOperand.innerText = previousOperand.innerText.slice(0, previousOperand.innerText.length - 1);
    }
	currentOperand.innerText = currentOperand.innerText.slice(0, currentOperand.innerText.length - 1);		
})

allClear.addEventListener('click', function() {
	currentOperand.innerText = '';
	previousOperand.innerText = '';
})