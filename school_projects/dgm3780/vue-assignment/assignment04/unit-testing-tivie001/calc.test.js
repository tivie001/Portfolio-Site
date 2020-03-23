const {sum, diff, mult, div, exp, remain} = require('./calc');

test("it should sum 2 numbers", () => {
    expect(sum(10, 5)).toBe(15);
});

test("it should find the difference 2 numbers", () => {
    expect(diff(20, 7)).toBe(13);
});

test("it should find the product 2 numbers", () => {
    expect(mult(5, 5)).toBe(25);
});

test("it should find the product 2 numbers of a division operation", () => {
    expect(div(30, 3)).toBe(10);
});

test("it should find the total 2 numbers of a exponential operation", () => {
    expect(exp(3, 3)).toBe(27);
});
test("it should find the total 2 numbers of a remainder operation", () => {
    expect(remain(12, 5)).toBe(2);
});



