function smallestCommons(arr) {
  // Because of the possibility of the smallest common denominator being among the two biggest numbers, 
  // it makes sense to check those first, so sort the array from greater to lowest
  arr.sort((a, b) => b - a);

  // Create a new array and add all values from the sorted array in descending order 
  let newArr = [];
  for (let i = arr[0]; i >= arr[1]; i--) { // If not sorting the passed array, replace this line of code with   
                                           // for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--)
    newArr.push(i);
  }
  
  let quotient = 0;
  let loop = 1;
  let n;
  do {
    quotient = newArr[0] * loop * newArr[1];
    for ( n = 2; n < newArr.length; n++) {
      if (quotient % newArr[n] !== 0) {
        break;
      }
    }
    loop++;
   // console.log(loop);
   // console.log(n);
  } while (n !== newArr.length); // When n === newArr.length, quotient % every single number in newArr === 0

  return quotient;
}
smallestCommons([1,6]); // return 60
smallestCommons([2, 10]); // return 2520




// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple/

