const {reverse, upper, removeVowels} = require('./string');

//Pass case
test("it should reverse the given string", () => {
    expect(reverse('Tyler')).toBe('relyT');
});

// Fail case
test("the given input should be a string", () => {
    expect(reverse(50)).toBe('Invalid variable type, try again.');
});

test("it should uppercase the given string", () => {
    expect(upper('ivie')).toBe('IVIE');
});

test("it should remove all vowels of the given string", () => {
    expect(removeVowels('Goofy')).toBe('Gf');
});



