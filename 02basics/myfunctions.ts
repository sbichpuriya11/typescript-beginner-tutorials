function addTwo(num: number): number {
  return num + 2;
  // return "";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let result = addTwo(6);

addTwo(5);

getUpper("4");

signUpUser("hitesh", "hitesh@lco.dev", false);

loginUser("h", "h@h.com");

function getValue(myVal: number): string | boolean {
  if (myVal > 5) return true;
  return "200OK";
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];

// const heros = [1,2,3];

heros.map((hero: string): string => {
  // return 1;
  return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
