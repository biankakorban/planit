//Get the nth number in the fibonacci sequence given n
//formula F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1
//in the following integer sequence 0,1,1,2,3 the next number will be x = 3 + 2; x = 5

let n = 10;

// function returns the Fibonacci number
function fibonacci(n) {
if (n <= 1)
    return n;
return fibonacci(n-1) + fibonacci(n-2);
}

//function call
console.log(fibonacci(n));

