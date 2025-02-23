import { Calculator } from "./Calculator";
import { Operators } from "../Operators/Operators";
import { SyntaxError } from "../SyntaxError/SyntaxError";

let calc;

beforeEach(() => {
	calc = new Calculator();
})

describe("Construction", () => {
	it("Initializes fields correctly", () => {

		expect(calc.getOperator()).toEqual(null);
		expect(calc.getLeftHandOperand()).toEqual(null);
		expect(calc.getRightHandOperand()).toEqual(null);
	})

	it("Setters work correctly", () => {
		calc.setLeftHandOperand(1);
		calc.setOperator(Operators.add);
		calc.setRightHandOperand(4);

		expect(calc.getOperator()).toEqual(Operators.add);
		expect(calc.getLeftHandOperand()).toEqual(1);
		expect(calc.getRightHandOperand()).toEqual(4);
	})

	it("Setting an operator with no LH operand should give syntax error", () => {

		expect(() => {
			calc.setOperator(Operators.add);
		}).toThrow(new SyntaxError("Can't set operator without Left hand Operand"));
	})

	it("setting RH operand with no LH operand should give a syntax error", () => {
		expect( () => {
			calc.setRightHandOperand(1)
		}).toThrow(
			new SyntaxError("Can't set Right hand operand without left hand operand")
		);
	})

	it("Setting RH operand with no operator should give a syntax error", () => {
		calc.setLeftHandOperand(1);
		expect(() => {
			calc.setRightHandOperand(1)
		}).toThrow(
			new SyntaxError("Can't set Right hand operand without operator")
		);
	})
})

describe("Operation", () => {
	
	beforeEach(() => {
		calc.setLeftHandOperand(1);
		calc.setOperator(Operators.add);
		calc.setRightHandOperand(4);
	})


	it("Applies binary operator correctly", () => {
		calc.applyOperator();	
		expect(calc.getOperator()).toEqual(null);
		expect(calc.getLeftHandOperand()).toEqual(5);
		expect(calc.getRightHandOperand()).toEqual(null);
	})
})

describe.skip("Display", () => {
	it("Display should be empty string after initializing", () => {
		expect(calc.getDisplayString()).toEqual("");
	})
	it("LH operand with no operator should display LH operand", () => {
		calc.setLeftHandOperand(12);
		expect(calc.getDisplayString()).toEqual("12");
	})
	it("Operator present with no RH operand should display operator", () => {
		calc.setLeftHandOperand(12);
		calc.setOperator(Operators.add);
		expect(calc.getDisplayString()).toEqual("+");
	})
	it("If LH operand, Operator and Right hand operand present should display Right hand operand", () => {
		calc.setLeftHandOperand(12);
		calc.setOperator(Operators.add);
		calc.setRightHandOperand(13);
		expect(calc.getDisplayString()).toEqual("13");
	})
})
