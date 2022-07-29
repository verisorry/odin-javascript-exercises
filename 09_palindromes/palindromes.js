const palindromes = function (string) {
    string = string.replace(/[^\w\s']|_/g, "").replace(/\s+/g, "").toLowerCase().split("");
    if (string.length % 2 == 0) {
        if (string.slice(0, Math.floor(string.length/2)).join("") === (string.slice(Math.floor(string.length/2), string.length).reverse()).join("")) {
            return true;
        }

    } else {
        if (string.slice(0, Math.floor(string.length/2)).join("") === string.slice(Math.floor(string.length/2)+1, string.length).reverse().join("")) {
            return true;
        }
    } 
    return false;
};

// Do not edit below this line
module.exports = palindromes;
