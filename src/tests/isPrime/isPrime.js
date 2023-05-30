const isPrime = number => {
    if (number <= 1) {
        return false;
    }

    for (let possibleDivisor = 2; possibleDivisor <= Math.sqrt(number); possibleDivisor++) {
        if (number % possibleDivisor === 0) {
            return false;
        }
    }

    return true;
}

module.exports = isPrime;