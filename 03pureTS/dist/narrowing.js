"use strict";
function logValue(x) {
    if (x instanceof Date)
        console.log(x.toUTCString());
    else
        console.log(x.toUpperCase());
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
