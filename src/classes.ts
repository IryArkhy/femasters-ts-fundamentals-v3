// PARAM PROPERTIES



// old
class Car {
    make: string
    model: string
    year: number
    constructor(make: string, model: string, year: number) {
      this.make = make
      this.model = model
      this.year = year
    }
}

  // sugar
class Car2 {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}
}
// ----
class Base {}
 
class Car3 extends Base {
  foo = console.log("class field initializer");
  constructor(public make: string) {
    super()
    console.log("custom constructor stuff")
  }
}
 
const c = new Car3("honda")