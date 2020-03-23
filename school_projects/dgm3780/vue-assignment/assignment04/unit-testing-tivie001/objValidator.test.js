const {checkFirstParam, checkSecondParam, checkIfKeyMatches} = require('./objValidator');

let items = [
    {type: "t-shirt"},
    'type'
];

let fakeItems = [
    {type: "t-shirt"},
    'price'
];

test('it should check if first param is an object', () => {
    expect(checkFirstParam(items)).toBe(true);
});

// Fail case
test('it should check if first param is an object', () => {
    expect(checkFirstParam(0)).toBe(false);
});

test('it should check if second param is a string', () => {
    expect(checkSecondParam(items)).toBe(true);
});

// Fail case
test('it should check if second param is a string', () => {
    expect(checkSecondParam({type: "t-shirt"})).toBe(false);
});

test('it should check second param (string) matches first params object key', () => {
    expect(checkIfKeyMatches(items)).toBe(true);
});

test('it should check second param (string) matches first params object key', () => {
    expect(checkIfKeyMatches(fakeItems)).toBe(false);
});

