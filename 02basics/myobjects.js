"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Hitesh", isPaid: false, email: "h@h.com" };
createUser(newUser);
function createCourse() {
    return {
        name: "Hitesh",
        price: 100,
    };
}
function loggedUserInfo(user) {
    return {
        name: "",
        email: "",
        isActive: true,
    };
}
loggedUserInfo({ name: "", email: "", isActive: true });
var myCustomer = {
    _id: "19772",
    name: "Hitesh",
    email: "h@h.com",
    isActive: true,
};
myCustomer.email = "h@gmail.com";
