import { SyntaxError } from "../SyntaxError/SyntaxError";

// collection of binary operators to be used with calculator
class Operators {
	
	
	

	static add(leftHandOperand, rightHandOperand) {
		if (rightHandOperand == null) throw new SyntaxError("Second argument is missing");
		return leftHandOperand + rightHandOperand;
	}

	static subtract(leftHandOperand, rightHandOperand) {
		if (rightHandOperand == null) throw new SyntaxError("Second argument is missing");
		return leftHandOperand - rightHandOperand;
	}

	static divide(leftHandOperand, rightHandOperand) {
		if (rightHandOperand == null) throw new SyntaxError("Second argument is missing");
		if (rightHandOperand === 0) throw new SyntaxError("Divide by zero error");
		return leftHandOperand / rightHandOperand;
	}

	static multiply(leftHandOperand, rightHandOperand) {
		if (rightHandOperand == null) throw new SyntaxError("Second argument is missing");
		return leftHandOperand * rightHandOperand;
	}

}

export { Operators }

