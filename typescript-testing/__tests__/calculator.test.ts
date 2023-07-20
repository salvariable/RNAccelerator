import { add, division, multiplication, subtract } from "../calculator";

test("adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
});

// Add more test cases for the other calculator functions
test("multiplies two numbers correctly!", () => {
    expect(multiplication(2, 4)).toBe(8);
})

test("divides two numbers correctly", () => {
    expect(division(33, 11)).toBe(3);
})