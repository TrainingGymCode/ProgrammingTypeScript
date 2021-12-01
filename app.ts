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

class User {

  id: number;
  name: string;
  constructor(userId: number, userName: string) {

      this.id = userId;
      this.name = userName;
  }
  getInfo(): string {
      return "id:" + this.id + " name:" + this.name;
  }
}

let tom: User = new User(1, "Tom");
console.log(tom.getInfo());
tom.id = 4;

let alice: User = new User(2, "Alice");
console.log(alice.getInfo());