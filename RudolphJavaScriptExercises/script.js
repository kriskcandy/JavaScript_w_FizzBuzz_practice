/* FizzBuzz Solution: */

for (var num = 1 ; num<=100 ; num++){
   /* number is divisible by 3 AND 5 print number and FizzBuzz */
    if ((num % 3 === 0) && (num % 5) === 0)
  {
    console.log (num , "FizzBuzz")
    /* number is divisible by 3 and prints Fizz */
  } else if ((num % 3) === 0){
    console.log ("Fizz")
    /* number is divisible by 5 and prints Buzz */
  } else if ((num % 5) === 0){
    console.log ("Buzz")
    } else {
    console.log (num)}
    }
    console.log ("<Drop the mic here>")
