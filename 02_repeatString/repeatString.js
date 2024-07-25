const repeatString = function(word, iterations) {
    let result = "";

    if (iterations < 0){
        return "ERROR";
    }

    for (let i = 0; i < iterations; i++){
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;