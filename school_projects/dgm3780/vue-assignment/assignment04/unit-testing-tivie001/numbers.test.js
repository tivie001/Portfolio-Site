const {sumElements} = require('./numbers');

let intNumArr = [10, 100, 1000];
let stringNumArr = [10, '100', '1,000'];
let stringArr = ['billy', 'bob', 'joe'];

test("it should add all numbers in array and output the total", () => {
    expect(sumElements(intNumArr)).toBe(1110);
});

test("it should add all numbers in array and output the total", () => {
    expect(sumElements(stringNumArr)).toBe(1110);
});

//Fail case
test("it should try to add all strings in array and fail", () => {
    expect(sumElements(stringArr)).toBe(NaN);
});

//Fail case
test("it should check if array and fail if not", () => {
    expect(sumElements(12345)).toBe(false);
});




