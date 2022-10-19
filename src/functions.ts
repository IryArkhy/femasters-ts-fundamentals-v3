// CALLABLE TYPES

// CALL SIGNATURE
interface TwoNumberCalculation {
    (x: number, y: number): number
}
   
type TwoNumberCalc = (x: number, y: number) => number
   
const add: TwoNumberCalculation = (a, b) => a + b;
                                    
const subtract: TwoNumberCalc = (x, y) => x - y;

// CONSTRUCT SIGNATURES
interface DateConstructor {
    new (value: number): Date
}
   
let MyDateConstructor: DateConstructor = Date
const d = new MyDateConstructor()

// FUNCTION OVERLOADS

type FormSubmitHandler = (data: FormData) => void
type MessageHandler = (evt: MessageEvent) => void
 
// 2 heads of the function
function handleMainEvent(
  elem: HTMLFormElement,
  handler: FormSubmitHandler
)
function handleMainEvent(
  elem: HTMLIFrameElement,
  handler: MessageHandler
)

// the implementation of the function
// implementation has to be compatible with all heads
function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}
 
const myFrame = document.getElementsByTagName("iframe")[0]
const myForm = document.getElementsByTagName("form")[0]

handleMainEvent(myFrame, (val) => {})

handleMainEvent(myForm, (val) => {})

// this TYPES

// <button onClick="myClickHandler">Click Me!</button>

function myClickHandler(event: Event) {
    this.disabled = true
  //'this' implicitly has type 'any' because it does not have a type annotation.
}
   
myClickHandler(new Event("click")) // seems ok

function myClickHandler2(
    this: HTMLButtonElement,
    event: Event
) {
    this.disabled = true
            
 // (property) HTMLButtonElement.disabled: boolean
}
   
  myClickHandler2(new Event("click")) // seems no longer ok
  // you have to bind your element to this function in order for it to work


  const myButton = document.getElementsByTagName("button")[0];
  const boundHandler = myClickHandler2.bind(myButton);
  
  boundHandler(new Event("click")) // bound version: ok
  myClickHandler2.call(myButton, new Event("click")) // also ok