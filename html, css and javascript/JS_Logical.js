//1.1
function isEven(n) {
n = Number(n);
return n === 0 || !!(n && !(n%2));
}
function isOdd(n) {
return isEven(Number(n) + 1);
}

//1.2
Math.max(1, 2, 3);
Math.max(1, 3, 2);
Math.max(3, 2, 1);


//2.1
var fourNums=[];
undefined
fourNums[0]=0.871570877817405;
fourNums[1]=0.9107447521970577;
fourNums[2]=0.743357509580703;
fourNums[3]=0.6571292972456975;

//2.2
var arr = [];
while(arr.length < 5){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

//2.3
var stringArray = ["1.2", "2.3", "3.4"];
var numberArray = stringArray.map(Number);
console.log(numberArray);

//2.4
function findLongestWord(str) {
  return str.length;
}
findLongestWord("ababcdababefgababhiab");
findLongestWord("aba");


//3.2
var x = 5;
  console.log(x);
  // expected output: 5

//3.3
function half(x) {
  return(x / 2);
  }

//3.5
function seven() {
  x = 7;
  return(x);
  }

//3.6
function three_numbers(x, y, z) {
    return (a + b)/c;
  }
console.log(three_numbers(1, 1, 0));
console.log(three_numbers(-1, -1, 0));
console.log(three_numbers(1, -1, 0));

//3.8
const number = prompt("Enter a number: ");
//check if the number is even
if(number % 2 == 0) {
    console.log("True.");
}
// if the number is odd
else {
    console.log("False.");
}


//4.2
var getName = prompt("What is your name? ");


if (getName === null || !isNaN(getName)){

    while (getName !== null || isNaN(getName)){
        alert("Invalid name, please try again");
        getName = prompt("What is your name ? ");
       if (getName !== null || isNaN(getName)){
           document.write("Hello ", getName);
       }
    }
}else {
    document.write("Hello ", getName);
}


//4.3
var getName = prompt("What is your name? ");


if (getName === null || !isNaN(getName)){

    while (getName !== null || isNaN(getName)){
        alert("Invalid name, please try again");
        getName = prompt("What is your name ? ");
       if (getName == Alice && Bob || isNaN(getName)){
           document.write("Hello ", getName);
       }
    }
}else {
    document.write("Hello ", getName);
}


//4.4
// program to display the sum of natural numbers

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);


//4.5
var n = prompt("Please enter a number", "Any Number 1-9");
if(!isNaN(n)){
  
	var x = ((parseInt(n)+1) *n) /2;
  if(x % 5 == 0 || x % 3 == 0){
  	alert(x);
  }else{
    alert('Not a multiple');
  }
}else{
  alert('Please enter a number');
}

//4.6
var choose = prompt("Please enter a number 1 for factorial 2 for sum", "1-2");
if(!isNaN(n)){
if(choose == 1){
      function factorial(x) 
      { 

        if (x === 0){
          return 1;
       }
        return x * factorial(x-1);

      }
      x = factorial(n);
      alert(x);
}else if(choose == 2){
        var x = ((parseInt(n)+1) *n) /2;
          if(x % 5 == 0 || x % 3 == 0){
            alert(x);
          }else{
            alert('Not a multiple');
          } 
  }else{
     alert('Please enter a valid number');
  }
}else{
  alert('Please enter a number');
}

//4.7
var theDiv = document.getElementById("table");

for(i = 1;i<=10;i++){
   for(j=1;j<=12;j++){
   			var r = i*j;
	 			var theDiv = document.getElementById("table");
				var content = document.createTextNode(r + " ");
				theDiv.appendChild(content);
   }
   document.getElementById("table").innerHTML += "<br><br>";
}


//4.8
// program to print prime numbers between the two numbers

// take input from the user
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

//4.10
var yearsPrinted = 0;
var currentYear = 2022; //maybe these variables should be declared inside the function

function leapYears() {
    while (yearsPrinted < 30) { //instead of "30", you can have a var howManyLeapYears for how many leap years we want printed
        if ((currentYear % 4 === 0) && (!((currentYear % 100===0) && (currentYear % 400 !== 0)))) {
            //can we simplify the line above?
            document.write(currentYear + "<br>");
            yearsPrinted++;
            currentYear++;
        } else {
            currentYear++;
        }
    }       
}

leapYears();

//4.11
console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1


//4.12
var a = [3,5,7,8];
a.reverse(); // 8 7 5 3

//4.13
var array = [12, 5, 8, 3, 17];

var el = 8; //Element to be searched
var flag = 0;  // Initially 0 - Not found

for(var i=0; i<array.length; i++) {
	if(el == array[i])
		flag = 1;
}

//Check if flag value changed.
if(flag == 1)
	console.log('Element Found');
else
	console.log('Element Not Found');


  //4.14
  function oddArrayIndex( arrayName, emptyIndex ) {
    for (var i = 1; i < arrayName.length; i += 2) {
        emptyIndex.push(arrayName[i]);
        }
    }
    var arr = [ 1, 2, 3, 4, 5, 6, 7];
    var oddIndex = [];
    oddArrayIndex(arr, oddIndex);


//4.15
const cumulativeSum = (sum => value => sum += value)(0);

console.log([5, 10, 3, 2].map(cumulativeSum));

//4.16
// program to check if the string is palindrome or not

function checkPalindrome(string) {

  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {

      // check if first and last string are same
      if (string[i] !== string[len - 1 - i]) {
          return 'It is not a palindrome';
      }
  }
  return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);


//4.17
function findSum(A, N) {
  if (N <= 0)
      return 0;
  return (findSum(A, N - 1) + A[N - 1]);
}

// Driver code

let A = [1, 2, 3, 4, 5];
let N = A.length;
document.write(findSum(A, N));


//4.18
function perfectSquares(l, r){
 
  //For every element from the range
  for (let i = l; i <= r; i++)
  {
 
      // If current element is
      // a perfect square
      if (Math.sqrt(i) == parseInt(Math.sqrt(i)))
          document.write(i + " ");
  }
}

// Driver code
let l = 2;
let r = 24;
perfectSquares(l, r)


//4.19
var array1 = ["Vijendra", "Singh"];
var array2 = ["Singh", "Shakya"];

console.log(array1.concat(array2));
// output: ["Vijendra", "Singh", "Singh", "Shakya"]

//4.20
function newList(alph, num) {
  var list = [];
  for (var i=0;i<alph.length;++i) {
  list.push(alph[i]);
  list.push(num[i]);
  }
  return list;
  }
  console.log(newList(['a','b','c'],[1,2,3]));

  //4.21
  function mergeTwo(arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result.sort((a,b) => a-b);
  }


  //4.22
  function gcd( a, b){
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
}
 
/*Function to left rotate arr[] of siz n by d*/
function leftRotate(arr, d, n){
    /* To handle if d >= n */
    d = d % n;
    let g_c_d = gcd(d, n);
    for (let i = 0; i < g_c_d; i++) {
        /* move i-th values of blocks */
        let temp = arr[i];
        let j = i;
 
        while (1) {
            let k = j + d;
            if (k >= n)
                k = k - n;
 
            if (k == i)
                break;
 
            arr[j] = arr[k];
            j = k;
        }
        arr[j] = temp;
    }
}
 
// Function to print an array
function printArray(arr, size){
    for (let i = 0; i < size; i++)
        document.write(arr[i] +" ");
}
 
/* Driver program to test above functions */
let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let n = arr.length;
// Function calling
leftRotate(arr, 2, n);
printArray(arr, n);


//4.23
let n = 9;
     
    // function returns the Fibonacci number
    function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}
  
    //function call
    document.write(fib(n));

//4.25
function karatSuba(x,y)
{
  var x1,x0,y1,y0,base,m;
  var dummy_x = x.toString();
  var dummy_y = y.toString();
  var n = (dummy_x.length>dummy_y.length) ? dummy_y.length : dummy_x.length;
  m = Math.round(n/2);
  base  = 10;

  //base case
  if((x<base)||(y<base))
  return x * y;
  //base case

  var bm = Math.pow(base ,m);

  var dummy_x1 = dummy_x.substring(0,n/2);
  var x1 = parseInt(dummy_x1);
  dummy_x1 = null;

  var dummy_x1 = dummy_x.substring(n/2,n);
  var x0 = parseInt(dummy_x1);
  dummy_x1 = null;

  var dummy_y1 = dummy_y.substring(0,n/2);
  var y1 = parseInt(dummy_y1);
  dummy_y1 = null;

  var dummy_y0 = dummy_y.substring(n/2,n);
  var y0 = parseInt(dummy_y0);
  dummy_y = null;

  var p = x1 + x0;
  var q = y1 + y0;

  var a   =   karatSuba(x1,y1);
  var b   =   karatSuba(x0,y0);
  var z1  =   karatSuba(a,Math.pow(bm,2));
  var z2  =   b;
  //var z3  =   karatSmul(bm ,((karatSmul(p,q) - a - b)));
  var z3  = bm * ((p*q) - (a) - (b)); 
  var z   =   z1 + z2 + z3;
  return z;

 }

console.log(karatSuba(344,100));


//4.26
function val(c)
{
    if (c >= '0'.charCodeAt() &&
        c <= '9'.charCodeAt())
        return (c - '0'.charCodeAt());
    else
        return (c - 'A'.charCodeAt() + 10);
}
 
// Function to convert a
// number from given base
// 'b' to decimal
function toDeci(str, b_ase)
{
    let len = str.length;
     
    // Initialize
    // power of base
    let power = 1;
     
    // Initialize result
    let num = 0;
    let i;
 
    // Decimal equivalent is
    // str[len-1]*1 + str[len-2] *
    // base + str[len-3]*(base^2) + ...
    for(i = len - 1; i >= 0; i--)
    {
         
        // A digit in input number
        // must be less than
        // number's base
        if (val(str[i].charCodeAt()) >= b_ase)
        {
            document.write("Invalid Number");
            return -1;
        }
 
        num += val(str[i].charCodeAt()) * power;
        power = power * b_ase;
    }
    return num;
}
 
// Driver code
let str = "11A";
let b_ase = 16;
 
document.write("Decimal equivalent of "+
 str + " in base "+ b_ase +
 " is " + toDeci(str, b_ase));


//4.27
function bubbleSort(arr){
  var len = arr.length;
  for (var i = len-1; i>=0; i--){
    for(var j = 1; j<=i; j++){
      if(arr[j-1]>arr[j]){
          var temp = arr[j-1];
          arr[j-1] = arr[j];
          arr[j] = temp;
       }
    }
  }
  return arr;
}
bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
bubbleSort([1,2,3,4,5,6]); //[1, 2, 3, 4, 5, 6]


//4.28
let recursiveFunction = function (arr, x, start, end) {
      
  // Base Condition
  if (start > end) return false;

  // Find the middle index
  let mid=Math.floor((start + end)/2);

  // Compare mid with given key x
  if (arr[mid]===x) return true;
       
  // If element at mid is greater than x,
  // search in the left half of mid
  if(arr[mid] > x)
      return recursiveFunction(arr, x, start, mid-1);
  else

      // If element at mid is smaller than x,
      // search in the right half of mid
      return recursiveFunction(arr, x, mid+1, end);
}

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length-1))
  document.write("Element found!<br>");
else document.write("Element not found!<br>");

x = 6;

if (recursiveFunction(arr, x, 0, arr.length-1))
  document.write("Element found!<br>");
else document.write("Element not found!<br>");


//4.29
var x = "hello\nworld\nin\na\nframe";

function star(str) {
  let arr = [];
  arr = str.split("\n");
  for (let index = 0; index < 1; index++) {
    console.log("*******");
    for (let j = 0; j <= arr.length; j++) {
     arr == arr[j].split(",");
      console.log("*" + arr[j] + "*" );
    }
  }
  console.log("******");
  return arr;
}
console.log(star(x));












































































































































