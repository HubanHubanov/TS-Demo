let helloMSg: string = "Hello, there!";
let a: number = 4;
let b: number = 5;
b = 10;


let isAuthenticated: boolean = false

const arr: number[] = [1,2,3,4,5]

console.log(a+b);

console.log(arr.filter((n) => n > 3));

let x: number | string;

x = "abv"
x = 3;

// interface User {
//     name: string;
//     age: number;
// }

type User = {
    name: string;
    age: number
}

const peshoUser: User =  {
    name: "Pesho",
    age: 20,
}

const users: User[] = [
    {
        name: "Pesho1",
        age: 20,
    },
    {
        name: "Pesho2",
        age: 20,
    },
    {
        name: "Pesho3",
        age: 20,
    }
];

users.forEach(user => {
    console.log(user.name);
});

interface Human {
    firstName: string;
    lastName: string;
    age: number;
}

class Person implements Human  {
    firstName: string;
    lastName: string;
    age: number = 10;

    constructor(firstName:string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getAgeMsg():string {
        return `This human is ${this.age} years old. `
    }
    getDetails():void {
        console.log(`Person details: ${this.firstName} ${this.lastName}`);
        
    }
}

const ivanPerson = new Person("Ivan", "Ivanov");

ivanPerson.getDetails()

class Student extends Person {
    grades: number[] = [6, 5, 6, 5, 4];

    constructor(fName: string, lName: string) {
        super(fName, lName);
    }
}

const mariaStident = new Student("Maria", "Kirilova");
mariaStident.getDetails();

enum PaymenStatus {
    Failed =100,
    Successful,
    Pending
}

console.log("-----------------------------");

console.log(PaymenStatus);
console.log(PaymenStatus.Successful);

function checkPaymenStatus(paymentStatusCode: number): void {
    if(paymentStatusCode === PaymenStatus.Failed) {
        console.log("Ne e minalo plashtaneto");  
    } else if (paymentStatusCode === PaymenStatus.Successful) {
         console.log("Uspeshno plashtane");
         
    }
}

checkPaymenStatus(100);

function getIdentity<T>(id:T) {
    console.log("The type of the id is: " + typeof id);
}

getIdentity<number>(2);
getIdentity<object>([1,2,3]);
getIdentity<string[]>(["a", "b", "c"]);

export {}


