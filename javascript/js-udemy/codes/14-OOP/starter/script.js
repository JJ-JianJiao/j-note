'use strict';
// console.log("--------------Constructure---------");
// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     //never to this
//     // this.calsAge = function () {
//     //     console.log(2037 - this.birthYear);
//     // }
// }

// const jian = new Person('Jian', 1989);
// console.log(jian);

// //behind the scene
// //1. new {} is created
// //2. function is called, this = {}
// //3. {} linked to protoType
// //4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(jian instanceof Person);
// console.log(matilda instanceof Person);
// console.log(jack instanceof Person);


// //prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// };

// jian.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(Person.prototype);
// console.log(jian.__proto__);
// console.log(jian.__proto__ === Person.prototype);
// console.log(jian);

// console.log(Person.prototype.isPrototypeOf(jian));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapines';
// console.log(jian, matilda);
// console.log(jian.species, matilda.species);

// console.log(jian.hasOwnProperty('firstName'));
// console.log(jian.hasOwnProperty('species'));

// // const testA = function () {
// //     console.log("this is the test");
// // }
// // const testB = new testA();
// // console.log(testA);
// // console.log(testB);

// console.log(jian);

// console.log("---------Prototype inheritance------");
// console.log(jian.__proto__); //Person.prototype
// console.log(jian.__proto__.__proto__); //object.prototype
// console.log(jian.__proto__.__proto__.__proto__); //null

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 7, 6, 5, 4, 3, 3]; // new Array ==== [....]
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(Array.prototype);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// Array.prototype.unique = function () {
//     return [...new Set(this)];
// }

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// console.dir(x => x + 1);


///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//     this.Car = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(this.speed);
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(this.speed);
// }

// const myCar = new Car('Subaru', 120);
// console.log(myCar);
// myCar.accelerate();
// myCar.brake();

// const myCar2 = new Car('Mercedes', 95);
// myCar2.accelerate();
// myCar2.brake();


// console.log("--------------ES6 class--------------");


// //class expresion

// // const PersonCl = class {

// // }

// //class declaraton
// class PersonCl {
//     constructor(fullName, birthYear) {
//         this._fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     set fullName(name) {
//         if (name.includes(' ')) {
//             this._fullName = name;
//         }
//         else alert(`${name} is not a fullName`);
//     }

//     get fullName() {
//         return this._fullName;
//     }
//     static hey() {
//         console.log('Hey there ❣');
//         console.log(this);
//     }
// }

// // PersonCl.hey = function () {
// //     console.log('Hey there ❣');
// //     console.log(this);
// // }

// PersonCl.hey();

// const jess = new PersonCl('Jessica Davis', 1992);
// console.log(jess);
// jess.calcAge();
// console.log(jess);
// console.log(jess.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this._fullName}`);
// }

// jess.greet();
// console.log(jess.age);
// console.log(jess);

// // jess.hey();
// // jess.setFullName = 'haha';

// const walter = new PersonCl('Walter', 1965);

// //1. classes are not hoisted: can not use before declaration
// //2. class are first-class citizes: pass into function and return from functions
// //3. classes are executed in strict mode

// // console.log("----------getter and setter-------");

// // const account = {
// //     owner: 'jonas',
// //     movements: [200, 430, 120, 300],
// //     get latest() {
// //         return this.movements.slice(-1).pop();
// //     },

// //     set latest(mov) {
// //         this.movements.push(mov);
// //     }
// // }

// // console.log(account.latest); //300

// // account.latest = 50;
// // console.log(account.movements);

// console.log('----------------object create----------');
// const PersonPerto = {
//     calsAge() {
//         console.log(2037 - this.birthYear);
//     },

//     init(firtName, birthYear) {
//         this.firtName = firtName;
//         this.birthYear = birthYear;
//     }
// }


// const steven = Object.create(PersonPerto);

// console.log(PersonPerto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// console.log(steven);
// steven.calsAge();

// console.log(steven.__proto__);
// console.log(steven.__proto__ === PersonPerto);
// console.log(jess.__proto__);
// console.log(jess.__proto__ === PersonCl.prototype);

// const sarah = Object.create(PersonPerto);
// sarah.init("sarah", 2012);
// sarah.calsAge();


///////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/


// class Car {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//         console.log(this.speed);
//     }

//     brake() {
//         this.speed -= 5;
//         console.log(this.speed);
//     }

//     get speedUS() {
//         return this.speed / 1.6;
//     }

//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// }

// const myCar = new Car('Subaru', 120);
// myCar.accelerate();
// myCar.brake();

// console.log(myCar.speed);
// console.log(myCar.speedUS);
// myCar.speedUS = myCar.speedUS;
// console.log(myCar.speed);

// console.log('------inheritance between classes-----');
// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calsAge = function () {
//     console.log(2037 - this.birthYear);
// }

// const Student = function (firstName, birthYear, course) {
//     // this.firstName = firstName;
//     // this.birthYear = birthYear;
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// }

// //linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const jiao = new Person('jiao', 2021);

// const jian = new Student('Jian', 2020, 'CS');
// console.log(jian);
// jian.introduce();

// console.log(jiao);
// console.log(jiao.__proto__);
// console.log(jiao.__proto__.__proto__);
// console.log(jiao.__proto__.__proto__.__proto__);

// console.log(jian);
// console.log(jian.__proto__);
// // console.log(jian.__proto__ === Person.prototype);
// console.log(jian.__proto__.__proto__);
// console.log(jian.__proto__.__proto__.__proto__);
// console.log(jian.__proto__.__proto__.__proto__.__proto__);

// console.log(jian instanceof Student);
// console.log(jian instanceof Person);

// jiao.calsAge();
// jian.calsAge();
// console.log(Student.prototype);
// console.dir(Student.prototype.constructor);

// Student.prototype.constructor = Student;
// console.log(Student.prototype);
// console.dir(Student.prototype.constructor);
// console.log(jian);


/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
// class Car {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//         console.log(this.speed);
//     }

//     brake() {
//         this.speed -= 5;
//         console.log(this.speed);
//     }

//     get speedUS() {
//         return this.speed / 1.6;
//     }

//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// }


// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }
// const EV = function (make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }
// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(this.speed);
// }
// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(this.speed);
// }
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargebattery = function (chargeTo) {
//     this.charge = chargeTo;
// }
// EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`);
// }
// const myEv = new EV('tesla', 140, 99);
// console.log(myEv);
// myEv.accelerate();
// myEv.brake();


//ES6 inherite from class
// class PersonCl {
//     constructor(fullName, birthYear) {
//         this._fullName = fullName;
//         this._birthYear = birthYear;
//     }

//     calcAge() {
//         console.log(2037 - this._birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this._fullName}`);
//     }

//     get age() {
//         return 2037 - this._birthYear;
//     }

//     set fullName(name) {
//         if (name.include(' '))
//             this._fullName = name;
//         else
//             alert(`${name} is not a full name!`)
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     static hey() {
//         console.log('Hey there');
//     }
// }

// class StudentCl extends PersonCl {
//     constructor(fullName, birthYear, course) {
//         super(fullName, birthYear);
//         this._course = course;
//     }
//     introduce() {
//         console.log(`My name is ${this._fullName} and I study ${this._course}`);
//     }

//     calcAge() {
//         console.log(`I am ${2037 - this._birthYear} years old, But as a student I feel more like ${2037 - this._birthYear + 10}`);
//     }
// }

// const sebJiao = new StudentCl('Xiuqi', 2021, 'CS');
// console.log(sebJiao);
// sebJiao.calcAge();
// sebJiao.introduce();

// console.log('---------object.create--------');
// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };

// const jian = Object.create(PersonProto);
// jian.init('jian', 'jiao');
// console.log(jian);


// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// }
// const jay = Object.create(StudentProto);
// jay.init('jay', 2021, 'CS');
// console.log(jay);
// jay.calcAge();

// console.log('--------more classes------------');

// // 1) public fields
// // 2) private fields
// // 3) public methods
// // 4) private methods
// // (there is also the static version)

// class Account {

//     //public fields (instances)
//     locale = navigator.language;

//     //private fields
//     #movements = [];
//     #pin;


//     //public methods
//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;
//         // this._movements = [];
//         // this.locale = navigator.language;

//         console.log(`Thanks for opening an account, ${owner}`);
//     }

//     deposit(val) {
//         this.#movements.push(val);
//         return this;
//     }

//     withdraw(val) {
//         this.deposit(-val);
//         return this;
//     }


//     requestLoan(val) {
//         if (this.#approvalLoan(val)) {
//             this.deposit(val);
//             console.log('Loan approved');
//         }
//         return this;
//     }

//     get movements() {
//         return this.#movements;
//     }

//     //private method
//     #approvalLoan() {
//         return true;
//     }

//     static helper() {
//         console.log('helper');
//     }
// }

// const acc1 = new Account('jian', 'EUR', 1111);
// console.log(acc1);


// acc1.deposit(245);
// acc1.withdraw(112);
// acc1.requestLoan(1000);


// acc1.movements.push(250);
// acc1.movements.push(-110);
// console.log(acc1);

// //Encapsualtion: protected
// // console.log(acc1.#movements);
// console.log(acc1.movements);
// // acc1.#approvalLoan();

// Account.helper();


// //chaining
// acc1.deposit(300).deposit(500).withdraw(23).requestLoan(1000).withdraw(4000);
// console.log(acc1);



///////////////////////////////////////
// Coding Challenge #4

/*
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(this.speed);
    }

    brake() {
        this.speed -= 5;
        console.log(this.speed);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

class EVCL extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    accelerate() {
        this.speed += 20;
        console.log(this.speed);
        this.#charge--;
        console.log(this.#charge);
        return this;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
}

const car1 = new EVCL('Rivian', 120, 23);
console.log(car1);
car1.accelerate().brake().chargeBattery(90).accelerate();