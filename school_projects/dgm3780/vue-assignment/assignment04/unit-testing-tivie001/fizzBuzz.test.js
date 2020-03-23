const {printNums} = require('./fizzBuzz');

test("it should print 'fizz'", () => {
    expect(printNums(3)).toBe("fizz");
});

test("it should print 'buzz'", () => {
    expect(printNums(25)).toBe("buzz");
});

test("it should print 'fizzbuzz'", () => {
    expect(printNums(30)).toBe("fizzbuzz");
});

test("it should print '77'", () => {
    expect(printNums(77)).toBe(77);
});


