
// collection of binary operators to be used with calculator
class Operators {

	static add(leftHandOperand, rightHandOperand) {

	}

	static subtract(leftHandOperand, rightHandOperand) {

	}

	static divide(leftHandOperand, rightHandOperand) {

	}

	static multiply(leftHandOperand, rightHandOperand) {

	}

}

class Calculator {
	
	#leftHandOperand;
	#rightHandOperand;

	constructor() {
		this.leftHandOperand = 0;
		this.rightHandOperand = 0;
	}
	
	applyOperator(operator) {
		this.#leftHandOperand = operator(this.#leftHandOperand, this.#rightHandOperand);
		this.#rightHandOperand = 0;
	}
	

	setLeftHandOperand(operand) {
		this.#leftHandOperand = operand;
	}

	setRightHandOperand(operand) {
		this.#leftHandOperand = operand;
	}
}
