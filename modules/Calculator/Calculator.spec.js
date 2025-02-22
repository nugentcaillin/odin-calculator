import { Calculator } from "./Calculator";
import { Operators } from "../Operators/Operators";

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
})

describe("Operation", () => {
	
	beforeEach(() => {
		calc.setOperator(Operators.add);
		calc.setLeftHandOperand(1);
		calc.setRightHandOperand(4);
	})

	it("Setters work correctly", () => {
		expect(calc.getOperator()).toEqual(Operators.add);
		expect(calc.getLeftHandOperand()).toEqual(1);
		expect(calc.getRightHandOperand()).toEqual(4);
	})

	it("Applies binary operator correctly", () => {
		calc.applyOperator();	
		expect(calc.getOperator()).toEqual(null);
		expect(calc.getLeftHandOperand()).toEqual(5);
		expect(calc.getRightHandOperand()).toEqual(null);
	})
})
