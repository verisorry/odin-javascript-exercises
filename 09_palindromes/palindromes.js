const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g, "").split(""); 
    return (string.join("") == string.reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;
