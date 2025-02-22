
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

export { Calculator }

