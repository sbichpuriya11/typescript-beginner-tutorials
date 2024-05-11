let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = {
  username: "Hitesh",
  id: 190872,
};

hitesh = {
  name: "hitesh101",
  id: 1902,
};

function getDbId(id: number | string) {
  //making some API calls
  console.log(`DB id is:${id}`);
}

getDbId(4);
getDbId("4");

function getId(id: number | string) {
  if (typeof id === "string") id.toLowerCase();
  if (typeof id === "number") id + 2;
}

//array
const data: number[] = [12, 4, 64];
const data1: string[] = ["Mohit", "Mahesh", "Ram"];
const data2: string[] | number[] = []; // either all string or all numbers

const data3: string | number[] = ""; //This can be either string or array of numbers
const data4: (string | number | boolean)[] = [true, "2", "22", 23, true]; // can have array of numbers or array of strings

let pi: 3.14 = 3.14;

//pi = 4.35 // this will not work

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew"
