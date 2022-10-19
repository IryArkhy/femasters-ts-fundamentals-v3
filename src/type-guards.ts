/**
 * BUILT IN TYPE GUARDS
 * 
 * 1. value instanceof Class
 * 2. typeof value === "type"
 * 3. value === other value
 * 4. !value
 * 5. Array.isArray(value)
 * 6. "property" in object
 */

/**
 * USER DEFINED TYPE GUARDS
 * 
 * 
 */

 interface CarLike {
    make: string
    model: string
    year: number
  }
   
  let maybeCar: unknown
   
  // the guard (still your type check will not give you the type highlight)
 /**
  *  function isCarLike(valueToTest: any) {
    return (
      valueToTest &&
      typeof valueToTest === "object" &&
      "make" in valueToTest &&
      typeof valueToTest["make"] === "string" &&
      "model" in valueToTest &&
      typeof valueToTest["model"] === "string" &&
      "year" in valueToTest &&
      typeof valueToTest["year"] === "number"
    )
  }
   
  // using the guard
  if (isCarLike(maybeCar)) {
    maybeCar      
   // STILL let maybeCar: unknown
  }
  */

  // SOLUTION - return type of a function

// the guard (even though the function returns boolean)
// it is an indication that we are sure the entity is CarLike
// BUT you have to really make sure that your checking logic is not flawed
function isCarLike(
    valueToTest: any
    // the guard 
  ): valueToTest is CarLike {
    return (
      valueToTest &&
      typeof valueToTest === "object" &&
      "make" in valueToTest &&
      typeof valueToTest["make"] === "string" &&
      "model" in valueToTest &&
      typeof valueToTest["model"] === "string" &&
      "year" in valueToTest &&
      typeof valueToTest["year"] === "number"
    )
  }
   
  // using the guard
  if (isCarLike(maybeCar)) {
console.log(maybeCar) // CarLike
       
//   let maybeCar: CarLike
}

// ASSERTS: it throws if check fails you have to throw in the function

// the guard
function assertsIsCarLike(
    valueToTest: any
  ): asserts valueToTest is CarLike {
    if (
      !(
        valueToTest &&
        typeof valueToTest === "object" &&
        "make" in valueToTest &&
        typeof valueToTest["make"] === "string" &&
        "model" in valueToTest &&
        typeof valueToTest["model"] === "string" &&
        "year" in valueToTest &&
        typeof valueToTest["year"] === "number"
      )
    )
      throw new Error(
        `Value does not appear to be a CarLike${valueToTest}`
      )
  }
   
  // using the guard
  maybeCar  //let maybeCar: unknown

  assertsIsCarLike(maybeCar)
  maybeCar
  