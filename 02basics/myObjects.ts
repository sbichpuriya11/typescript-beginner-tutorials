const User = {
  name: "hitesh",
  email: "hitesh@lco.dev",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "Hitesh", isPaid: false, email: "h@h.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return {
    name: "Hitesh",
    price: 100,
  };
}

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function loggedUserInfo(user: User): User {
  return {
    name: "",
    email: "",
    isActive: true,
  };
}

loggedUserInfo({ name: "", email: "", isActive: true });

type Customer = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myCustomer: Customer = {
  _id: "19772",
  name: "Hitesh",
  email: "h@h.com",
  isActive: true,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cardCvv: number;
  };

let cardInfo: cardDetails = {
  cardDate: "12/1/2041",
  cardnumber: "9471-2771-0882-1889",
  cardCvv: 1223,
};

myCustomer.email = "h@gmail.com";
// myCustomer._id = "18723" // Since it's readOnly

export {};
