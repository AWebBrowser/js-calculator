/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
 function calculatorModule() {
   var memory= 0;
   var total= 0;
   return calculator(memory,total);
 }
calculatorModule();
function calculator(memory,total,num1,num2){
  calculatorMultiply(num1,num2,total);
  calculatorDivide(num1,num2,total);
  calculatorAdd(num1,num2,total);
  calculatorSubtract(num1,num2,total);
  if (memory !== 0){
   console.log("Right now you have " +memory+" in your calculator's memory!");
  }
  if (total !== 0){
   console.log("Right now you have "+total+"!")
  }
 }
  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    //current total
   */
 calculatorMultiply(){
  num1 * num2 = total
  console.log(){}
  calculator()
 }
  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

