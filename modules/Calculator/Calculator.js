
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
	
	getLeftHandOperand() {
		return this.#leftHandOperand;
	}

	setLeftHandOperand(operand) {
		this.#leftHandOperand = operand;
	}

	getRightHandOperand() {
		return this.#rightHandOperand;
	}

	setRightHandOperand(operand) {
		this.#rightHandOperand = operand;
	}
	
	getOperator() {
		return this.#operator;
	}

	setOperator(operator) {
		this.#operator = operator;
	}
}

export { Calculator }

