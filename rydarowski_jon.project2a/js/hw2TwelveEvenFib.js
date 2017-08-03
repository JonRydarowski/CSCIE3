/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 12 even Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
               document.getElementById("sumFibResult").innerHTML = twelveEvenFibonacciSum();
 }

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 12 even fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 12 even Fibonacci numbers
  */


function twelveEvenFibonacciSum(){
var previous = 0;
var current = 1;
var sum = 0;
var next;
var fib =[];

fib[0] = 0;
fib[1] = 1;

   for(i = 1; i < 35; i++){
        next = current + previous;
        previous = current;
        current = next; 
        if(current % 2 === 0) {
            sum += current;
            fib.push(sum);
        console.log(sum);
        
        }       
   }
   return(fib[12]); 
        
 }
