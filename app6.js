/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/




// function maxOfThreeNumbers(x,b, y){
//     if (x > b) && (x > y) {
//       return x;
//     } else if (y > x & y > b) {
//         return y ;
//     }
//       else if { return b}
    

//     console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


function maxOfThreeNumbers(x, y, z) {
    if ((x > y) && (x > z)) {
        return x;
    } else if ((y > x) && (y > z)) {
        return y;
    } else {
        return z;
    }
}

console.log('Exercise 6 Result:', maxOfThreeNumbers(5, 10, 15));


