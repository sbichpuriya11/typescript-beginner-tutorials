class User {
  public email: string;
  private name: string;
  //   another way
  //   #name: string;
  private readonly city: string = "Jaipur";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
    //   this.city
  }
}

class Customer {
  protected _courseCount = 1;
  private readonly city: string = "Jaipur";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) throw new Error("Course count should be more than 1");
    this._courseCount = courseNum;
  }

  private deleteToken() {
    console.log("Token deleted");
  }
}

class SubCustomer extends Customer {
  isFamily: boolean = true;
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
