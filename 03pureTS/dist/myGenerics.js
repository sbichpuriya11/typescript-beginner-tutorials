"use strict";
const score = [];
score.push(12);
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//difference between any and type is any may return number is string is passed, where as type will only return string if string is passed
//both can accept any form of parameter
function identityThree(val) {
    return val;
}
identityThree(4);
identityThree("4");
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({ brand: "Cello", type: 89 });
