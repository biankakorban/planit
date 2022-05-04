//Get the nth number in the fibonacci sequence given n


let n = 1;

// function returns the Fibonacci number
function fibonacci(n) {
if (n <= 1)
    return n;
return fibonacci(n-1) + fibonacci(n-2);
}

//function call
console.log(fibonacci(n));

