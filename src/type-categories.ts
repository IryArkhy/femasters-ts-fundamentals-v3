// INDEX SIGNATURES
const phones: Phone = {
    home: { country: "+1", area: "211", number: "652-4515" },
    work: { country: "+1", area: "670", number: "752-5856" },
    fax: { country: "+1", area: "322", number: "525-4357" },
}

// the undefined will force you to check whether property exist
type Phone = {
    [k:string]: {
        country: string;
        area: string;
        number: string;
    } | undefined; // undefined because key could have any name and sometimes we might use nonexisting key
}

// ARRAYS
const arr = ['', '']
const arr2: Array<string> = [];

// TUPLES

// We meant it as a tuple but the inference doesn't work
// We have to explicitly specify that it's a tuple.
const myCar = [2002, "Toyota", "Corolla"]; // Mixed array of arbitrary length

const myCar2: [number, string, string] = [2002, "Toyota", "Corolla"]; // Tuple

const numPair: [number, number] = [4, 5, 6]; // You only get this validation on assignment
// There's no type equivalence check on 
// numPair that happens when we invoke methods on it.
numPair.push(6) // [4, 5, 6]
numPair.pop() // [4, 5]
numPair.pop() // [4]
numPair.pop() // []

// STRUCTURAL vs. NOMINAL TYPES
// Ways to categorizing type systems

// INTERSECTION and UNION TYPES

// | (OR) - & (AND)

// Union types

type Union = "success" | "error";
// type Union2 = 

function flipCoin(): "heads" | "tails" {
    if (Math.random() > 0.5) return "heads"
    return "tails"
}

function maybeGetUserInfo():
  | ["error", Error]
  | ["success", { name: string; email: string }] {
  if (flipCoin() === "heads") {
    return [
      "success",
      { name: "Mike North", email: "mike@example.com" },
    ]
  } else {
    return [
      "error",
      new Error("The coin landed on TAILS :("),
    ]
  }
}
 
const outcome = maybeGetUserInfo();
const [first, second] = outcome;

console.log(second.name) // Error has property name and an object has the same property

// Intersection types

// &

type MyDate = Date & { end: Date }

function makeWeek(): Date & { end: Date } {
    //⬅ return type
   const ONE_WEEK = 7;
    const start = new Date()
    const end = new Date(start.valueOf() + ONE_WEEK)
   
    return { ...start, end } // kind of Object.assign
  }

// INTERFACES AND TYPE ALIASES

// INTERFACES

interface IMyInterface {
    helloWorld: string | number;
}




interface ExtraInfoInterfaces extends IMyInterface {
    foo: string;
    bar: string
}

class MyInterface implements ExtraInfoInterfaces {
    helloWorld = '';
    foo = '';
    bar = '';
    // notHelloWorld = '';

    constructor() {
        this.helloWorld = '';
        this.foo  = '';
        this.bar = "";
    }

}

interface IMyInterface {
    notHelloWorld: string
}

// TYPE ALIASES

type MyType = {
    helloWorld: string;
}

// type inheritance
type ExtraInfoType = MyType & { foo: string, bar: string };

// RECURSIVE TYPES

type NestedNumbers = number | NestedNumbers[]