/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // is 5 x factorial(4) --> 120
var factorial = function(n) {
  if (n < 0) { return null; }
  if (n === 1 || n === 0) { return 1; }
  return n * factorial(n - 1);
};


// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  return sum(array.slice(1)) + array[0]; //return [what was previously returned] + array[0];
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var sum = 0;
  for (var element of array) {
    if (Array.isArray(element) === true) {
      sum += arraySum(element);
    } else {
      sum += element;
    }
  }
  return sum;
};

// 4. Check if a number is even.
/*
  • subtract 2 with each recursive call
  • return if n goes all the way down to zero
  • return true or false when get down to base case(s)
    > BC1 ==>     n === 0      ==>  true
    > BC2 ==>     n === 1      ==>  false

Recursively Calling
↓↓↓   "level" 1       n=8   executes to line 57   calls isEven(6)
↓↓↓       "level" 2       n=6   executes to line 57   calls isEven(4)
↓↓↓          "level" 3       n=4   executes to line 57   calls isEven(2)
↓↓↓              "level" 4       n=2   executes to line 57   calls isEven(0)

Returning to place where called from
↑↑↑                "level" 5       n=0   executes to line 57   returns true
↑↑↑              "level" 4       n=2   executes to line 57   calls isEven(0)
↑↑↑          "level" 3       n=4   executes to line 57   calls isEven(2)
↑↑↑       "level" 2       n=6   executes to line 57   calls isEven(4)
↑↑↑   "level" 1       n=8   executes to line 57   calls isEven(6)
*/

var isEven = function(n) {
  if (n === 0) {
    return true;
  }
  if (n === 1) {
    return false;
  }
  if (n < 0) {
    return isEven(n + 2);
  }
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45 = 9 + 8 + ... + 2 + 1
// sumBelow(7); // 21

var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  }
  if (n < 0) {
    return sumBelow(n + 1) + n + 1;
  }
  return sumBelow(n - 1) + n - 1;

};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

/*

given: lower bound/upperbound, e.g., lower bound = 2, upper bound = 9
recursive call ==> range(x + 1, y)
base case(s) ==> x + 1 = 9
value returned ==>
final value returned ==>

Recursively Calling

  START WITH ==> range(2,9); // [3,4,5,6,7,8]

  ↓↓↓   arr = []   "level" 1       calls range(3, 9)        build the array
  ↓↓↓   arr = []       "level" 2       calls range(4, 9)
  ↓↓↓   arr = []          "level" 3       calls range(5, 9)
  ↓↓↓   arr = []              "level" 5       calls range(6, 9)
  ↓↓↓   arr = []                 "level" 6       calls range(7, 9)
  ↓↓↓   arr = []                    "level" 7       calls range(8, 9)

Returning to place where called from

                  range(2,9)  =====>    [3,4,5,6,7,8]
create an empty array
add a value to the array
go to the next x value (recursive call range(x+1, y))

*/
// var arr = [];
// var range = function(x, y) {
//   // if (arr === undefined) {
//   //   var arr = [];
//   // }
//   if (x + 1 === y) {
//     return arr;
//   }
//   arr.push(x + 1);
//   arr = range(x + 1, y);
//   return arr;
// };

/*
    var range = function(x, y) {
      var arr = [];
      var incr = (x > y) ? -1 : 1;              // decrement if decreasing range | increment if increasing
      if (x === y || Math.abs(x - y) === 1) {   // return empty array if range not given (e.g., range(6, 6)) or if base case met
        return [];
      }
      arr = range(x + incr, y);
      arr.unshift(x + incr);
      return arr;
    };
*/

var range = function(x, y) {
  var incr;
  if (x > y) {
    incr = -1;
  } else {
    incr = 1;
  }
  if (x === y || Math.abs(x - y) === 1) {
    return [];
  }
  arr = range(x + incr, y);
  arr.unshift(x + incr);
  return arr;
};

// var range = function(x, y) {
//   if (arr === undefined) {
//     var arr = [];
//   }
//   if (x + 1 === y) {
//     return arr;
//   }

//   arr = range(x + 1, y);
//   arr.unshift(x+1);

//   //console.log(arr);

//   return arr;
// };

/*
      • The base case is when n = 0, and x^0 = 1.

      • If n is positive and even, recursively compute y = x^(n / 2),
        and then x to the n = y * y. Notice that you can get away with
        making just one recursive call in this case, computing x^(n/2)
        just once, and then you multiply the result of this recursive
        call by itself.

      • If n is positive and odd, recursively compute x^(n-1), so
        that the exponent either is 0 or is positive and even. Then,
        x^n = x^(n-1)*x.

      • If n is negative, recursively compute x^(-n), so that the
        exponent becomes positive. Then, x^n = 1/(x^-n)
*/
// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) { // base case
    return 1;
  }
  if ((exp > 0) && (exp % 2 === 0)) { // if exp is pos. & even
    return exponent(base, exp/2) * exponent(base, exp/2);
  }
  if ((exp > 0) && (exp % 2 !== 0)) { // if exp is pos. & odd
    return exponent(base, exp-1) * base;
  }
  if (exp < 0) { // if n is neg.
    return 1/(exponent(base, -exp));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

/*
4 is a power of 2, because 4/2 = 2
8 is a power of 2, because 8/2/2 = 4/2 = 2
10 is not, because 10/2 = 5, 5/2 = 2.5/2 = 1.25
32/2 ... 16/2... 8/2... 4/2...2

    var powerOfTwo = function(n) {
      if (n >= 2) {
        return powerOfTwo(n / 2);
      }
      if (n === 1) {
        return true;
      } else if (n < 2) {
        return false;
      }
    };

*/

var powerOfTwo = function(n) {
  if (n/2 === 2 || n === 2 || n === 1) {
    return true;
  }
  if (n < 2) {
    return false;
  }
  return powerOfTwo(n/2);
 };

// 9. Write a function that reverses a string.
/*
    var reverse = function(string) {
      if (string.length === 0) {
        return '';
      }
      return string.slice(-1) + reverse(string.slice(0, string.length -1));
    };
*/
var reverse = function(string) {
  if (reversedString === undefined) {
    var reversedString = "";
  }
  if (string.length === 0) {
    return "";
  }
  // add the last letter of string to reversedString
  var minusLast = string.substring(0, string.length-1);
  var last = string.slice(string.length-1);
  reversedString += last;

  // console.log("string: " + string);
  // console.log("reversedString: " + reversedString);
  // console.log("minusLast: " + minusLast);
  // console.log("last: " + last);

  // pass "stanle" back into reverse()
  var output = reversedString + reverse(minusLast);
  // console.log("returning: " + output)
  return output;
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();
  if (string.length === 0 || string.length === 1) {
    return true;
  }
  var first = string[0];
  var last = string[string.length-1];
  //console.log("first: " + first + " | last: " + last)

  if (first === last) {
    return palindrome(string.slice(1, string.length-1))
  }
  return false;
}

// palindrome("racecar")
// palindrome("aceca")
// palindrome("cec")
// palindrome("e")


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
//  x - y     z
//  5 - 2     3
//  3 - 2     1
//  1 - 2    -1 (stop!)

//  x - y     z
// 15 - 5    10
// 10 - 5     5
// 5  - 5     0      ---> remainder is 0, because I cannot divide again without getting a decimal

//  x - y     z
// 16 - 5    11
// 11 - 5    6
// 6  - 5    1       ---> remainder is 1, because I cannot divide again without getting a decimal

//  x - y     z
// 19 - 5    14
// 14 - 5     9
//  9 - 5     4      ---> remainder is 4, because I cannot divide again without getting a decimal

//  5 - 2 ---> 3 --> k
//  3 - 2 ---> 1 --> remainder is whatever is left over when x falls below y

// modulo(17,5) // 2
// modulo(22,6) // 4

// x - y, until the next subtraction would result in zero or a negative-or-decimal number

var modulo = function(x, y) {
  var minusY = x - y;
  if (y === 0) {
    return NaN;
  }
  if (x === 0 || x === y) {
    return 0;
  }
  if (y < 0) { 
   return modulo(x, -y); 
  }
  if (x < 0) { 
   return -modulo(-x, y); 
  }
  if (y > x) { 
   return  x;
  }
  return modulo(minusY, y);
};


// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  // if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
  if (x < 0 || y < 0) {
    return -x + multiply(x, y+1)
  }
  if (x > 0 && y > 0 || x < 0 && y < 0) {
    return x + multiply(x, y-1);
  }
};


// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  var first1 = str1[0];
  var first2 = str2[0];

  if (first1 === first2) {
    if (str1.length === 0 && str2.length === 0) {
      return true;
    }
    return compareStr(str1.slice(1, str1.length), str2.slice(1, str2.length))
  }
  return false;

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
