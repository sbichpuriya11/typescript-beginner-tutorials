interface Bottle {
  brand: string;
  type: number;
}

function getSearchProducts<T>(products: T[]): T {
  //do some database operation
  const myIndex = 3;
  return products[myIndex];
}

//<T,> ---> implies <T> is not a HTML tag, instead its a Generic Type
const getMoreSearchProducts = <T>(products: T[]): T => {
  //do some database operations
  const myIndex = 5;
  return products[myIndex];
};

function anotherFunction<T, U extends number>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

anotherFunction(3, 2.4);

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunctionTwo<T, U extends Database>(val1: T, val2: U): object {
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

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  // public cart: T[];
  // constructor(cart: T[]) {
  //     this.cart = cart;
  //  }

  public cart: T[] = [];
  addToCart(product: T) {
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
