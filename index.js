
// collection of binary operators to be used with calculator
class Operators {

	add(leftHandOperand, rightHandOperand) {

	}

	subtract(leftHandOperand, rightHandOperand) {

	}

	divide(leftHandOperand, rightHandOperand) {

	}

	multiply(leftHandOperand, rightHandOperand) {

	}

}

class Calculator {
	constructor() {
		this.leftHandOperand = 0;
		this.rightHandOperand = 0;
	}
	
	applyOperator(operator) {
		this.leftHandOperand = operator(leftHandOperand, rightHandOperand);
		this.rightHandOperand = 0;
	}

	setLeftHandOperand(operand) {
		this.leftHandOperand = operand;
	}

	setRightHandOperand(operand) {
		this.leftHandOperand = operand;
	}
}
