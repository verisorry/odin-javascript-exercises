const findTheOldest = function(people) {
    let ages = [];
    for (const person of people) {
        if (!person["yearOfDeath"]) {
            const d = new Date();
            person["yearOfDeath"] = d.getFullYear();
        }
        ages.push(person["yearOfDeath"] - person["yearOfBirth"])
    }
    let currentMax = 0; 
    let maxIdx = 0;
    for (idx = 0; idx < ages.length; idx++) {
        if (ages[idx] > currentMax) {
            maxIdx = idx;
            currentMax = ages[idx];
        }
    }
    return people[maxIdx];
};
// Do not edit below this line
module.exports = findTheOldest;
