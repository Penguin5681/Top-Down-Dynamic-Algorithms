const fib = (n) => {
    if (n <= 2)
        return 1;
    return fib(n - 1) + fib(n - 2);
};  // too slow : takes O(2 ^ n) time and space

// memoization (hashmap equivalent or any other fast access data-structure)
// js obj, keys will be argument to the function and keys will be the return value

const optimized_fib = (n, memo = {}) => {   // smooth as butter
    if (n in memo) 
        return memo[n];
    if (n <= 2)
        return 1;

    memo[n] = optimized_fib(n - 1, memo) + optimized_fib(n - 2, memo);
    return memo[n];
};

console.log(optimized_fib(1476)); // runs smoothly
// The only limitation now is the computer that we use. not the time 
