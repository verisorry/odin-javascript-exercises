const caesar = function(string, shift) {
    result = "";
    for (let letter of string) {
        if (letter.match(/[a-zA-Z]/i)) {
            if (shift < 0) {
                shift = 26 + (shift % 26);
            }
            if (letter.charCodeAt(0) <97) {
                letter = (letter.charCodeAt(0) - 65 + shift) % 26 + 65;
            } else {
                letter = 97 + (letter.charCodeAt(0) + shift) % 97 % 26;
            }
            letter = String.fromCharCode(letter);
        }
        result += letter;
    }
    return result;
};

// Do not edit below this line
module.exports = caesar;
