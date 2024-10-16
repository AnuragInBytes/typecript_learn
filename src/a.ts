let x: number = 1;
console.log(x);
// x = "hello" // won't work


//how to provide type to arguments
function greet(firstName: string, lastName: string, age: number){
  console.log(`Hello ${firstName} ${lastName}.`);
  console.log("You are", age, "years old.");
}

greet("Anurag", "Poddar", 20);


// type inference
function sum(a: number, b: number): number{
  // console.log(`${a} + ${b} = ${a+b}`);
  return a+b;
}
console.log(sum(69, 68));


// explicitly defining
function isLegal (a: number): boolean{
  if(a>18){
    return true;
  } else{
    return false;
  }
}

let g = isLegal(20);


//type to a function
function runAfer1Sec(func: () => void): void{
  setTimeout(func, 1000);
}

runAfer1Sec(function(){
  console.log("Hi there")
})

//rootDir
//outDir
//noimplicitAny

//interfaces : to assign types to objects

interface User {
  firstName: string,
  lastName: string,
  age: number,
  email?: string, //optional argument
}

function isLegal2(user: User){
  if(user.age > 18) {
    return true
  } else{
    return false;
  }
}

function greet2(user: User){
  console.log("Hey there,", user.firstName);
}

isLegal2({
  firstName: "anurag",
  lastName: "poddar",
  age: 20,
  email: "termimaki"
})

interface Person{
  name: string,
  age: number,
  greet(phrase: string): void;
  // greet: (phrase: string) => void;
}

class Employee implements Person{

  public name: string;
  public age: number;

  constructor(n: string, a: number){
    this.name = n;
    this.age = a;
  }

  greet(phrase: string){
    console.log(`${phrase}, ${this.name}`);
  }
}

const e = new Employee('Anurag', 20);
console.log(e);
console.log(e.greet("hey there"));


//types

type User2 = {
  firstName: string,
  lastName: string,
  age: number,
}

// we will use types in specific cases like

//1. UNION

type StringOrNumber = string | number;

function printId(id: StringOrNumber){
  console.log(`ID: ${id}`);
}

printId(5);
printId("89");

//2. INTERSECTION

type Employeee = {
    name: String,
    startDate: Date,
}

type Manager = {
  name: string,
  department: string,
}

type TeamLead = Employeee & Manager;

const treamLead: TeamLead = {
  name: "anurag",
  startDate: new Date(),
  department: "software dev",
}

console.log(treamLead);

//array

function maxValue(arr: number[]): number{
  let maxVal = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > maxVal){
      maxVal = arr[i];
    }
  }

  return maxVal;
}
console.log(maxValue([1,2,3,4,67,89,9]));

interface USERS{
  firstName: string,
  lastName: string,
  age: number,
}

function filterUsers(users: USERS[]){
  users.filter((user) => {
    if(user.age > 18){
      return user.firstName;
    } else{
      return "sab minor hai";
    }
  })
}

const resutl = filterUsers([{firstName: 'anurag', lastName: "poddar", age: 20}, {firstName: 'shivam', lastName: "sahu", age: 12}, {firstName: 'vivek', lastName: "kumar", age: 18}]);

console.log(resutl);