"use strict";
let commonman = {
    title: "Bruce"
};
function addpower(power) {
    return function (hero) {
        return {
            title: hero.title,
            power: power
        };
    };
}
commonman = addpower(7)(commonman);
console.log(commonman);
