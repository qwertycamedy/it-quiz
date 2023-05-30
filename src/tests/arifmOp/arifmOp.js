const arifmOp = (a, b, op) => {
    if (op === "+"){
        return a + b;
    } else if (op === "-"){
        return a - b;
    } else if (op === "/"){
        if (b === 0){
            return "B cannot be equal 0";
        }
        return a / b;
    }else if (op === "*"){
        return a * b;
    } else {
        return "Unknown operation";
    }
}

module.exports = arifmOp; 