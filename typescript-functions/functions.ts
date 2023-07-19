const calculateSum = (num1: number, num2: number): number => num1 + num2;
console.log(calculateSum(2, 3));
console.log(calculateSum(10, 1));
console.log(calculateSum(47, 87));

const isEven = (num: number): boolean => num % 2 === 0;
console.log(isEven(37));
console.log(isEven(78));
console.log(isEven(100));

const reverseString = (str: string): string => {
    let resultString: string[] = [];
    for (let index = str.length - 1; index >= 0; index--) {
        const char: string = str[index];
        resultString.push(char);
    }
    return resultString.join("");
}
console.log(reverseString("Hey"));
console.log(reverseString("Been trying to meet you"));
console.log(reverseString("Hmmm, hey! must be a devil between us"));

const calculateAverage = (nums: number[]): number => nums.reduce((acc, curr) => acc + curr) / nums.length;
console.log(calculateAverage([1, 2, 3, 4, 5]));
console.log(calculateAverage([8, 7, 10, 7, 8, 9, 7.5]));
console.log(calculateAverage([5, 5, 5, 0, 9, 7]));

type MathOperation = (num1: number, num2: number) => number;

const multiply: MathOperation = (a, b) => a * b;
console.log(multiply(21, 3));
console.log(multiply(2, 1));
console.log(multiply(7, 7));
