
class Calculator {
	
	#leftHandOperand;
	#rightHandOperand;
	#operator;

	constructor() {
		this.#leftHandOperand = null;
		this.#rightHandOperand = null;
		this.#operator = null;
	}

	applyOperator() {
		if (this.#operator) {
			this.#leftHandOperand = 
				this.#operator(this.#leftHandOperand, this.#rightHandOperand);
			this.#rightHandOperand = null;
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
		if (!this.#leftHandOperand) {
			throw new SyntaxError("Can't set Right hand operand without left hand operand");
		}
		if (!this.#operator) {
			throw new SyntaxError("Can't set Right hand operand without operator")
		}
		this.#rightHandOperand = operand;
	}
	
	getOperator() {
		return this.#operator;
	}

	setOperator(operator) {
		if (!this.#leftHandOperand) {
			throw new SyntaxError("Can't set operator without Left hand Operand");
		}
		this.#operator = operator;
	}
}

export { Calculator }

