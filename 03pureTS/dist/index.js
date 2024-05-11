"use strict";
class User {
    constructor(email, name) {
        //   another way
        //   #name: string;
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
        //   this.city
    }
}
class Customer {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1)
            throw new Error("Course count should be more than 1");
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
class SubCustomer extends Customer {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User("hitesh@h.com", "hitesh");
// hitesh.city = "delhi"
// hitesh.city
const customer = new Customer("h@h.com", "hitesh", "0172");
customer.courseCount = 12;
// customer.deleteToken // not accessible since it's private
