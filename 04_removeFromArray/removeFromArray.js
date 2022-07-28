const removeFromArray = function(...args) {
    const arrayArgs = Array.from(args);
    var array = arrayArgs.shift();

    for (const target of arrayArgs) {
        const idx = array.indexOf(target);
        if (idx > -1) {
            array.splice(idx, 1);
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
