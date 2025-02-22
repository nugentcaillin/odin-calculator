

// collection of binary operators to be used with calculator
class Operators {
	
	static SYNTAX_ERROR = "SYNTAX_ERROR"
	
	

	static add(leftHandOperand, rightHandOperand) {
		if (!rightHandOperand) return Operators.SYNTAX_ERROR;
		return leftHandOperand + rightHandOperand;
	}

	static subtract(leftHandOperand, rightHandOperand) {
		if (!rightHandOperand) return Operators.SYNTAX_ERROR;
		return leftHandOperand - rightHandOperand;
	}

	static divide(leftHandOperand, rightHandOperand) {
		if (!rightHandOperand) return Operators.SYNTAX_ERROR;
		return leftHandOperand / rightHandOperand;
	}

	static multiply(leftHandOperand, rightHandOperand) {
		if (!rightHandOperand) return Operators.SYNTAX_ERROR;
		return leftHandOperand * rightHandOperand;
	}

}

export { Operators }

