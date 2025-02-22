import { Operators } from "./Operators";

describe("Add", () => {
	it("Works with two positive numbers", () => {
		expect(Operators.add(1, 4)).toEqual(5);
	})
	it("works with two negative number", () => {
		expect(Operators.add(-1, -4)).toEqual(-5);
	})
	it("works with one negative and one positive number", () => {
		expect(Operators.add(1, -4)).toEqual(-3);
	})
	it("works with decimal numbers", () => {
		expect(Operators.add(1.4, 4.1)).toBeCloseTo(5.5, 2)
	})
	it("Raises syntax error if second argument ommitted", () => {
		expect(Operators.add(4)).toEqual(Operators.SYNTAX_ERROR);
	})
})

describe("Subtract", () => {
	it("Works with two positive numbers", () => {
		expect(Operators.subtract(1, 4)).toEqual(-3);
	})
	it("works with two negative number", () => {
		expect(Operators.subtract(-1, -4)).toEqual(3);
	})
	it("works with one negative and one positive number", () => {
		expect(Operators.subtract(1, -4)).toEqual(5);
	})
	it("works with decimal numbers", () => {
		expect(Operators.subtract(4.1, 1.2)).toBeCloseTo(2.9, 2)
	})
	it("Raises syntax error if second argument ommitted", () => {
		expect(Operators.subtract(4)).toEqual(Operators.SYNTAX_ERROR);
	})
})

describe("Divide", () => {
	it("Works with two positive numbers", () => {
		expect(Operators.divide(1, 4)).toEqual(0.25);
	})
	it("works with two negative number", () => {
		expect(Operators.divide(-1, -4)).toEqual(0.25);
	})
	it("works with one negative and one positive number", () => {
		expect(Operators.divide(1, -4)).toEqual(-0.25);
	})
	it("works with decimal numbers", () => {
		expect(Operators.divide(2.6, 1.3)).toBeCloseTo(2, 2);
	})
	it("Divides rational numbers correctly", () => {
		expect(Operators.divide(1, 3)).toBeCloseTo(0.33, 2);
	})
	it("Raises syntax error if second argument ommitted", () => {
		expect(Operators.divide(4)).toEqual(Operators.SYNTAX_ERROR);
	})
})

describe("Multiply", () => {
	it("Works with two positive numbers", () => {
		expect(Operators.multiply(1, 4)).toEqual(4);
	})
	it("works with two negative number", () => {
		expect(Operators.multiply(-1, -4)).toEqual(4);
	})
	it("works with one negative and one positive number", () => {
		expect(Operators.multiply(1, -4)).toEqual(-4);
	})
	it("works with decimal numbers", () => {
		expect(Operators.multiply(1.3, 2)).toBeCloseTo(2.6, 2);
	})
	it("Raises syntax error if second argument ommitted", () => {
		expect(Operators.multiply(4)).toEqual(Operators.SYNTAX_ERROR);
	})
})


