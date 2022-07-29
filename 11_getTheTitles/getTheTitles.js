const getTheTitles = function(books) {
    let array = []
    for (const dict of books) {
        array.push(dict['title']);
    }
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
