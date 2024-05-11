interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

// type User = {
// email: string,
//         userId:number
// }

interface User {
  githubtoken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin = {
  dbId: 1982,
  email: "h@h.com",
  role: "learner",
  userId: 1981,
  githubtoken: "github",
  startTrial: function () {
    return "Trial started";
  },
  getCoupon: (couponName: "hitesh10", off: 23): number => {
    return Math.random();
  },
};

//hitesh.dbId = 281 //Not allowed
hitesh.email = "h@hc.com";
hitesh.startTrial();
hitesh.startTrial = (): string => {
  return "New method assigned";
};
