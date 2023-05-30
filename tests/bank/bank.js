const bank = (a, years) => {
    for (let year = 0; year < years; year++ ){
        a *= 1.1;
    }
    return a;
}

module.exports = bank;