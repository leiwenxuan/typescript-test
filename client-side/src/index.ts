let a: number = 123;

const h1 = document.createElement("h1");
h1.innerHTML = "Hello, I am Lison";
document.body.appendChild(h1);
let tuple: [string, number, boolean];
tuple = ["a", 2, false];
enum Roles {
    SUPER_ADMIN = 0,
    ADMIN = 1,
    USER = 2,
  }
const superAdmin = Roles.SUPER_ADMIN;
console.log(superAdmin); // 0  
const getLength = (content: string | number): number => {
    if (typeof content === "string") return content.length;
    else return content.toString().length;
  };
console.log(getLength("abc")); // 3
console.log(getLength(123)); // 3
alert(getLength("leiwenxuan"));
const name = Symbol("name");
const obj = {
  [name]: "lison",
  age: 18
};
for (const key in obj) {
  console.log(key);
}
// => 'age'
console.log(Object.keys(obj));
// ['age']
console.log(Object.getOwnPropertyNames(obj));
// ['age']
console.log(JSON.stringify(obj));
// '{ "age": 18 }'