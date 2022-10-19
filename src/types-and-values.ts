// EXHAUSTIVE CONDITIONALS

class MyCar {
    drive() {
      console.log("vroom")
    }
  }
  class Truck {
    tow() {
      console.log("dragging something")
    }
  }
  class Boat {
    isFloating() {
      return true
    }
  }
  // Let's assume we initially had Vehicle type as Truck | MyCar
  // And you have written exhaustive conditional and it was fine
  // as soon as you add | Boat it will show you the error
  // You will know that you haven't check all cases and you will pay attention
  type Vehicle = Truck | MyCar | Boat

  function obtainRandomVehicle (): Vehicle {
    return new MyCar();
  }
   
  let myVehicle: Vehicle = obtainRandomVehicle()
   
  // The exhaustive conditional
  if (myVehicle instanceof Truck) {
    myVehicle.tow() // Truck
  } else if (myVehicle instanceof MyCar) {
    myVehicle.drive() // Car
  } else {
    // NEITHER!
    const neverValue: never = myVehicle
  // Type 'Boat' is not assignable to type 'never'.
  }

  // (!)  Neat thing to handle it to show error at compile time
  class UnreachableError extends Error {
    constructor(_nvr: never, message: string) {
      super(message)
    }
  }
   
  // The exhaustive conditional
  if (myVehicle instanceof Truck) {
    myVehicle.tow() // Truck
  } else if (myVehicle instanceof MyCar) {
    myVehicle.drive() // Car
  } else {
    // NEITHER!
    throw new UnreachableError(
      myVehicle,
 // Argument of type 'Boat' is not assignable to parameter of type 'never'.
      `Unexpected vehicle type: ${myVehicle}`  
    )
  }
  
  /**
   * It also works with switch
   * but you throw an error in the default case.
   * Rust language demands that your conditionals are exhaustive
   */
