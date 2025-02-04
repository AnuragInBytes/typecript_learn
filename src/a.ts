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

// type KeyInput = "UP" | "DOWN" | "LEFT" | "RIGHT";

enum Direction {
  UP,
  DOWN,
  RIGHT,
  LEFT,
}

function doSomething(keyPreshed: Direction){
  if(keyPreshed == Direction.UP){

  }
}
console.log("------------")
console.log(doSomething(Direction.UP));
console.log(doSomething(Direction.DOWN));
console.log(Direction.UP);

// generics
type Input = number | string;
function firstEle<Input>(arr: Input[]): Input{// fixed
  return arr[0];
}

const value = firstEle(["anurag", "poddar"]);  //should infered correctly
const value2 = firstEle(['anurag', 2, 4, 'poddar']); // we dont want this
console.log(value.toUpperCase());


// generic is the solutin to this problem
function identity<T>(arg: T): T{
  return arg;
}

let output1 = identity<string>("hello");
let output2 = identity<number>(454);


// advande ts
// 1. Pick: lets you pick value form interface or type

interface Person{
  name: string,
  age: number,
  email: string,
  password: string,
  id: string,
}

type UpdatedProp = Pick<Person, 'name' | 'age' | 'password'>

function updateUser(props: UpdatedProp){
  //db hit
}
updateUser({name: 'anurag', age: 20, password:'23242'}); // all are required

//2.Partial
type OptionalProp = Partial<UpdatedProp>
function updatedUser2(props: OptionalProp){

}

updatedUser2({})

//3. Readonly

//can not update properties of array and objects
type Hui = {
  name: string,
  age: number,
}

const usser: Readonly<Hui> = {
  name: "anurag",
  age: 34,
}

// usser.name = "hello"  // wont work

//4. Records and Map

type Userrr = {
  id: string,
  username: string,
}

type Users = {
  [key: string]: Userrr;
}

const users: Users = {
  "ras@1": {
    id: "ras@1",
    username: "anurag",
  },
  "ras@02": {
    id: "ras@02",
    username: "poddar"
  },
}

// this is ugly syntax so they created this:
type UserAge = Record<string, number>;

const userrs: UserAge = {
  "anurag": 21,
  "poddar": 20,
}

//5. Map
type Dost = {
  name: string,
  age: number,
  email: string,
}

const dost = new Map<string, Dost>();
dost.set("ras@01", { name: 'ras', age: 40,  email: "ras@gmail.com" });
dost.set("sarah@01", { name: "sarah", age: 23, email: "sarah@gmail.com" });

const dost1 = dost.get("ras@01");
console.log(dost1);

//6. Exclude
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'click'>;

const handleEvent = (event: ExcludeEvent) => {
  console.log("Handling event", event);
}

handleEvent("scroll");
handleEvent("mousemove");
handleEvent("click");  // this generate error

//type inference in zod already done 