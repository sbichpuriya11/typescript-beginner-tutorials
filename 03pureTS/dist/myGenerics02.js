"use strict";
function getSearchProducts(products) {
    //do some database operation
    const myIndex = 3;
    return products[myIndex];
}
//<T,> ---> implies <T> is not a HTML tag, instead its a Generic Type
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 5;
    return products[myIndex];
};
function anotherFunction(val1, val2) {
    return {
        val1,
        val2,
    };
}
anotherFunction(3, 2.4);
function anotherFunctionTwo(val1, val2) {
    return {
        val1,
        val2,
    };
}
anotherFunctionTwo(23, {
    connection: "",
    username: "hitesh12",
    password: "hitesh__1",
});
class Sellable {
    constructor() {
        // public cart: T[];
        // constructor(cart: T[]) {
        //     this.cart = cart;
        //  }
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
const sell1 = new Sellable();
sell1.addToCart({
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    subject: "Autobiography",
});
sell1.addToCart({ name: "JEE", type: "Pre Graduation" });
// sell1.addToCart(23);
