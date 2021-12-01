"use strict";
// class User{
//   name : string;
//   age : number;
//   constructor(_name:string, _age: number){
//       this.name = _name;
//       this.age = _age;
//   }
// }
// var tom : User = new User("Том", 29);
// console.log("Имя: ", tom.name, " возраст: ", tom.age);
var User = /** @class */ (function () {
    function User(userId, userName) {
        this.id = userId;
        this.name = userName;
    }
    User.prototype.getInfo = function () {
        return "id:" + this.id + " name:" + this.name;
    };
    return User;
}());
var tom = new User(1, "Tom");
console.log(tom.getInfo());
tom.id = 4;
var alice = new User(2, "Alice");
console.log(alice.getInfo());
