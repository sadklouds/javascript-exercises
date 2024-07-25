const sumAll = function(start, end) {

    let result = 0;

    if (start < 0 || end < 0){
        return "ERROR";
    }
      
    if (!Number.isInteger(start)  || !Number.isInteger(end)){
        return "ERROR";
    }

    if (start > end){
        for (let i = end; i <= start; i++){
            result += i;
        }
    }else{
        for (let i = start; i <= end; i++){
            result += i;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
