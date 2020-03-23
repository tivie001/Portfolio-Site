function reverse(str){
    if (typeof str === "string") {
        return str.split('').reverse().join('');
    } else {
        return 'Invalid variable type, try again.';
    }
}

function upper(str){
    return str.toUpperCase();
}

function removeVowels(str){
    let vowels = 'aeiouy';
    let strArray = str.split("");
    let tempArray = strArray.filter(function (char) {
        if (vowels.indexOf(char) === -1) {
            return char;
        }
    });
    let newString = "";
    tempArray.forEach(function(char) {
        newString += char;
    });
    return newString;
}

module.exports = {reverse, upper, removeVowels};