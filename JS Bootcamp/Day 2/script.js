// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.

function positiveOrNegative(num){
    if(num > 0){
        console.log("The number is Positive")
    }
    else if(num == 0){
        console.log("The number is Zero")
    }
    else{
        console.log("The number is Negative")
    }
}

positiveOrNegative(8)
positiveOrNegative(-3)
positiveOrNegative(0)

// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.

function factorial(num){
    let total = 1
    if(num > 0){
        for(i = num; i > 0; i--){
            total = total * i;
        }
        console.log("Factorial of", num,"is", total)
    }
    else{
        console.log("Enter a positive number")
    }
}

factorial(3)
factorial(-1)

// Assignment 3:
// Write a JavaScript function that takes two numbers as parameters and returns the larger one.

minMax = (num1,num2) =>{
    if(num1 > num2){
        console.log("The given two numbers are", num1, num2)
        return num1
    }
    else{
        console.log("The given two numbers are", num1, num2)
        return num2
    }
}

console.log(minMax(6,4))

// Assignment 4:
// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

stringPalindrome = (string) =>{
    let reversedString = ''
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }

    if(string == reversedString){
        console.log("It's a Palindrome!!")
    }
    else{
        console.log("It's not a Palindrome.")
    }
}

stringPalindrome('mam')
stringPalindrome('random')

// Assignment 5:
// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

function primeNum(num){
    debugger
    if(num > 0){
        for(i = num; i > 0; i--){
            if(isPrime(i)){
                console.log(i)
            }    
        }
    }
    else{
        console.log("Enter a positive number")
    }
}

function isPrime(n) { 
    
    if (n <= 1) 
        return false; 

    
    for (let i = 2; i < n; i++) 
        if (n % i == 0) 
            return false; 

    return true; 
} 

primeNum(20)

// Assignment 6:
// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.

calculator = (num1, num2 , operator) =>{
    if(operator == '+'){
        console.log(num1 + num2)
    }
    else if(operator == '-'){
        console.log(num1 - num2)
    }
    else if(operator == '*'){
        console.log(num1 * num2)
    }
    else if(operator == '/'){
        console.log(num1 / num2)
    }
}

calculator(10 ,2, '+')
calculator(10 ,2, '-')
calculator(10 ,2, '*')
calculator(10 ,2, '/')

// Assignment 7:
// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.

vowelCount = (string) =>{
    let count = 0
    for(i = 0; i <= string.length - 1; i++ ){
        if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u' ){
            count += 1;
        }
    }

    console.log(count)
}

vowelCount('zxxxx')
vowelCount('apple')

// Assignment 8:
// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.

isPerfectNumber = (n) =>{
    sum = 1; 
  
    for (let i=2; i*i<=n; i++) 
    { 
        if (n%i==0) 
        { 
            if(i*i!=n) 
                sum = sum + i + n/i; 
            else
                sum=sum+i; 
        } 
    } 
    
    if (sum == n && n != 1) 
        return true; 
 
    return false; 
}

console.log(isPerfectNumber(6))
console.log(isPerfectNumber(10))

// Assignment 9:
// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.

function generateFibonacciSeries(numTerms) {
    var fibonacciSeries = [];
  
    if (numTerms >= 1) {
      fibonacciSeries.push(0);
    }
    if (numTerms >= 2) {
      fibonacciSeries.push(1);
    }
  
    for (var i = 2; i < numTerms; i++) {
      var nextTerm = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
      fibonacciSeries.push(nextTerm);
    }
  
    return fibonacciSeries;
  }
 
  console.log(generateFibonacciSeries(10)); 

  
//   Assignment 10:
// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.
 
multiplicationTable = (num) =>{
    for(i = 1; i <= 10; i ++ ){

        console.log(`${num} * ${i} = ${(num * i)}`)
    }
}

multiplicationTable(5)