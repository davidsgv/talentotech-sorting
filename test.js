module.exports = function isOrdered(numbers){
    if(!numbers){
        return false
    }

    for(let i = 0; i < numbers.lenght - 1; i++){
        let number = numbers[i];
        let nextNumber = numbers[i+1]
        if(number > nextNumber) return false;
    }
    return true
}