"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helloMSg = "Hello, there!";
var a = 4;
var b = 5;
b = 10;
var isAuthenticated = false;
var arr = [1, 2, 3, 4, 5];
console.log(a + b);
console.log(arr.filter(function (n) { return n > 3; }));
var x;
x = "abv";
x = 3;
var peshoUser = {
    name: "Pesho",
    age: 20,
};
var users = [
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
users.forEach(function (user) {
    console.log(user.name);
});
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.age = 10;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getAgeMsg = function () {
        return "This human is ".concat(this.age, " years old. ");
    };
    Person.prototype.getDetails = function () {
        console.log("Person details: ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Person;
}());
var ivanPerson = new Person("Ivan", "Ivanov");
ivanPerson.getDetails();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fName, lName) {
        var _this = _super.call(this, fName, lName) || this;
        _this.grades = [6, 5, 6, 5, 4];
        return _this;
    }
    return Student;
}(Person));
var mariaStident = new Student("Maria", "Kirilova");
mariaStident.getDetails();
var PaymenStatus;
(function (PaymenStatus) {
    PaymenStatus[PaymenStatus["Failed"] = 100] = "Failed";
    PaymenStatus[PaymenStatus["Successful"] = 101] = "Successful";
    PaymenStatus[PaymenStatus["Pending"] = 102] = "Pending";
})(PaymenStatus || (PaymenStatus = {}));
console.log("-----------------------------");
console.log(PaymenStatus);
console.log(PaymenStatus.Successful);
function checkPaymenStatus(paymentStatusCode) {
    if (paymentStatusCode === PaymenStatus.Failed) {
        console.log("Ne e minalo plashtaneto");
    }
    else if (paymentStatusCode === PaymenStatus.Successful) {
        console.log("Uspeshno plashtane");
    }
}
checkPaymenStatus(100);
function getIdentity(id) {
    console.log("The type of the id is: " + typeof id);
}
getIdentity(2);
getIdentity([1, 2, 3]);
getIdentity(["a", "b", "c"]);
