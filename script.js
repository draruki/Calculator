const screen = document.querySelector('.screen');
let operand = {"first": '', "second": ''};
let activeOperand = 'first';
let operator = '';

function reset() {
	screen.textContent = '';
	operand.first = '';
	operand.second = '';
	activeOperand = "first";
}

function input(num) {
	operand[activeOperand] += num;
	screen.textContent = operand[activeOperand];
}

function set(op) {
	if (activeOperand === "second") {
		operate();
		operand["first"] = screen.textContent;
	}
	else {
		screen.textContent = operand[activeOperand];
	}
	activeOperand = "second";
	operator = op;
}

function operate() {
	if (operand.first != '' && operand.second != '' && operator != '') {
		if (operator == '+') {
			operand.first = parseInt(operand.first) + parseInt(operand.second);
		}
		else if (operator == '-') {
			operand.first = parseInt(operand.first) - parseInt(operand.second);
		}
		else if (operator == '*') {
			operand.first = parseInt(operand.first) * parseInt(operand.second);
		}
		else if (operator == '/') {
			operand.first = parseInt(operand.first) / parseInt(operand.second);
		}
		else if (operator == '%') {
			operand.first = parseInt(operand.first) % parseInt(operand.second);
		}

		screen.textContent = operand.first;
		operand.second = '';
		activeOperand = "first";
	}
}

function onKey(key) {
	switch (key) {
		case 'AC': {
			reset();
			break;
		}
		case '1': {
			input(key);
			break;
		}
		case '2': {
			input(key);
			break;
		}
		case '3': {
			input(key);
			break;
		}
		case '4': {
			input(key);
			break;
		}
		case '5': {
			input(key);
			break;
		}
		case '6': {
			input(key);
			break;
		}
		case '7': {
			input(key);
			break;
		}
		case '8': {
			input(key);
			break;
		}
		case '9': {
			input(key);
			break;
		}
		case '0': {
			input(key);
			break;
		}
		case '+': {
			set('+');
			break;
		}
		case '-': {
			set('-');
			break;
		}
		case '*': {
			set('*');
			break;
		}
		case '/': {
			set('/');
			break;
		}
		case '%': {
			set('%');
			break;
		}
		case '<-': {
			operand[activeOperand] = operand[activeOperand].slice(0, -1);
			screen.textContent = operand[activeOperand];
			break;
		}
		case '=': {
			operate();
			break;
		}
	}
}