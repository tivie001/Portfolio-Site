function sumElements(arr){
    if(Array.isArray(arr)) {
        let newArr = arr.map(function(element) {

            let newElement;
            if (typeof element === 'string') {
                newElement = parseFloat(element.replace(/,/g, ''));
                if (typeof newElement === 'string') {
                    return false;
                }
            } else if (typeof element !== 'number') {
                return false;
            } else {
               newElement = parseFloat(element);
            }
            return newElement;
        });

        return newArr.reduce((a, b) => a + b, 0)

    } else if(!Array.isArray(arr)) {
        return false;
    }

}
module.exports = {sumElements};