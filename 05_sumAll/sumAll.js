const sumAll = function(start, end) {
    if (start < 0 || end < 0 || typeof start != "number"|| typeof end != "number") {
        return "ERROR";
    }
    
    var range = [start, end];
    var result = 0;
    range.sort();
    for (i = range[0]-1; i < range[1]; i++) {
        result += range[0]+i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
