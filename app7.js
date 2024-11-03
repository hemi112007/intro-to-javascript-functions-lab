/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
function calculateTip(billAmount, tipPercentage) {
    return (billAmount * tipPercentage) / 100;
}



console.log('Exercise 7 Result:', calculateTip(50, 20));
