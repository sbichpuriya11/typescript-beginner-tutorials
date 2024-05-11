let greetings: string = "Hello Hitesh";

let myNum = 6;
// myNum.toFixed();

greetings.toLowerCase();

console.log(greetings);

//Type Inference:- TypeScript is smart enough to understand, if variable is initialzed with number/boolean/string etc. the type of that variable is the type of value. Here no need to declare with :<type>
//number
let userId = 3242.9;
userId.toFixed();
// userId = 'Hitesh'

//boolean
let isLoggedIn: boolean = false;
//isLoggedIn.valueOf()

// any
let hero: string;

function getHero() {
  return "Thor";
  // return true;
}

hero = getHero();

export {};
