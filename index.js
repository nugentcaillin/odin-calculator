
// collection of binary operators to be used with calculator
class Operators {

	static add(leftHandOperand, rightHandOperand) {
		return leftHandOperand + rightHandOperand;
	}

	static subtract(leftHandOperand, rightHandOperand) {
		return leftHandOperand - rightHandOperand;
	}

	static divide(leftHandOperand, rightHandOperand) {
		return leftHandOperand / rightHandOperand;
	}

	static multiply(leftHandOperand, rightHandOperand) {
		return leftHandOperand * rightHandOperand;
	}

}

class Calculator {
	
	#leftHandOperand;
	#rightHandOperand;
	#operator;

	constructor() {
		this.#leftHandOperand = 0;
		this.#rightHandOperand = 0;
		this.#operator = null;
	}

	applyOperator() {
		if (this.#operator) {
			this.#leftHandOperand = 
				this.#operator(this.#leftHandOperand, this.#rightHandOperand);
			this.#rightHandOperand = 0;
			this.setOperator(null);
		}
	}

	setLeftHandOperand(operand) {
		this.#leftHandOperand = operand;
	}

	setOperator(operator) {
		this.#operator = operator;
	}

	setRightHandOperand(operand) {
		this.#rightHandOperand = operand;
	}
}
