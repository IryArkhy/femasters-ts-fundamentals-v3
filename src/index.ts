/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
 function timeout(n: number) {
    return new Promise((res) => setTimeout(res, n))
  }
   
  /**
   * Add three numbers
   * @param a first number
   * @param b second
   */
  export async function addNumbers(a: number, b: number) {
    await timeout(500)
    return a + b
  }
   
  //== Run the program ==//
  ;(async () => {
    console.log(await addNumbers(3, 4))
  })()

// Variable declaration

// INFERENCE 
let age = 6; // (Java, C++ don't have inference)
age = "hello world";

// LITERAL TYPE - the type here is 6 (changing let to const has done that). 
// Factors: the nature of let and numbers are immutable in JS compared to objects and arrays
const newAge = 6; 

// IMPLICIT `any`
let endTime;

endTime = 4;

// TYPE ANNOTATION
let newDate: Date;
newDate = 0;


// Better using explicit return type

// No return type

function newAdd(a: number, b: number) {}

newAdd(newAdd(3, 4), 5) // it has void type. Error happens at the point of invocation.

function newAdd2(a: number, b: number): number {
  return null; // light up here and not when you use it.
}

newAdd(newAdd2(3, 4), 5) 

// OBJECTS
 type Car = {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
 }

 function printCar(car: Car) {
  console.log(`${car.make}, ${car.model}, ${car.year}`)
 }

 // Optional properties
 function printCar2(car: Car) {
  let str = `${car.make}, ${car.model}, ${car.year}`;

  // type guard
  if (typeof car.chargeVoltage !== "undefined") {
    str +=`${car.chargeVoltage.toFixed(2)}`
  }

  console.log(str)
 }

 type Car2 = {
  make: string;
  model: string;
  year: number;
  chargeVoltage: number | undefined;
 }

 printCar({make: "Toyota", model: "Corolla", year: 2020})
 printCar({make: "Toyota", model: "Corolla", year: 2020, chargeVoltage: 220})

 // Optional properties
 function printCar3(car: Car2) {
  let str = `${car.make}, ${car.model}, ${car.year}`;

  // type guard
  if (typeof car.chargeVoltage !== "undefined") {
    str +=`${car.chargeVoltage.toFixed(2)}`
  }

  console.log(str)
 }

 // It's not an optional property, it's required but can have an undefined value
 printCar3({make: "Toyota", model: "Corolla", year: 2020}) 

 // EXCESS PROPERTY ERROR: "Object literal may only specify known properties..."
 // Error appears because nobody can safely access this object further in the code.
 // Nothing can see this object other than printCar()
 printCar({make: "Toyota", model: "Corolla", year: 2020, color: "RED"})

 const myCar = {
  make: "Toyota", 
  model: "Corolla", 
  year: 2020, 
  color: "RED"
}

// No errors because:
// printCar() cannot access that extra color property
// Because it has been stated upfront what this function expects
// However, we can use myCar variable further in the code
// And some part of code might use that color property and some code expects it
printCar(myCar); 