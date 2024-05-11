const score: Array<number> = [];
score.push(12);

const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

//difference between any and type is any may return number is string is passed, where as type will only return string if string is passed
//both can accept any form of parameter

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(4);
identityThree("4");
identityThree(true);

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "Cello", type: 89 });
