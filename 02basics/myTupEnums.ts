const user: (string | number)[] = ["hc"];

let tuser: [string, number, boolean];
tuser = ["hc", 9071, true];

let rgb: [number, number, number] = [255, 141, 152];

type User = [number, string];

const userA: User = [12, "example@google.com"];

userA[1] = "hc.com";

userA.push(41);

export {};
