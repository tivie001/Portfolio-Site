function checkFirstParam(items){
    return typeof items[0] === 'object';
}

function checkSecondParam(items){
    return typeof items[1] === 'string';
}

function checkIfKeyMatches(items){
    return items[0].hasOwnProperty(items[1]);
}

module.exports = {checkFirstParam, checkSecondParam, checkIfKeyMatches};