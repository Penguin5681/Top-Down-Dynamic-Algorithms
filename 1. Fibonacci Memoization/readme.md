# Fibonacci Memoization

### Here's a naive recursive approach of the same problem(not optimized)

```javascript
const fib = (n) => {
    if (n <= 2)
        return 1;
    return fib(n - 1) + fib(n - 2);
};  
```

### Time and Space Complexity: O(2<sup>n</sup>) => Exponential
### if you were to put n = 50, the number of calls would be over one quadrillion!

##

## Memoization is a technique to optimize such recursive algorithms by storing intermediate results in memory (usually in an array or a dictionary) so that you don't have to recalculate them every time they are needed

## Here's how it works for Fibonacci numbers:

1. Create a data structure (usually an array or a dictionary) to store the Fibonacci numbers you've already calculated.

2. When you need to calculate a Fibonacci number, first check if it's already in your data structure. If it is, simply return the stored value.

3. If it's not in your data structure, calculate it as you normally would (using the recursive formula), but before returning the result, store it in your data structure.

4. Repeat steps 2 and 3 as needed.

### Here's a javascript example of the implementation:

```javascript
const fib = (n, memo = {}) => {   
    if (n in memo) 
        return memo[n];
    if (n <= 2)
        return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};
```

### Time and Space Complexity: O(n) => Linear

### So, we have optimized the problem. so what really happens at the back?
### The following animation depicts the actual process (consider n = 7):

https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/0f5b9518-7038-4d49-ac9b-9a2faa9f2728

### What's happening here?

### You notice a root node has two subnodes (Binary Tree), this is because of the recursive calls happening twice.
```javascript
return fib(n - 1) + fib(n - 2);
```

### The root is getting divided into two nodes with the values of (n - 1) and (n - 2). It stays in the recursive chain until it hits the following base case: 
```javascript
    if (n <= 2) return 1;
```

### When the node hits the base case it returns 1 to the parent node (root) and it adds them and redirects to its preceding parent node.

### This process takes a total of 2<sup>n</sup> steps which is not very doable for large n.

### This is where memoization comes into play
### the following animations shows the memoization process visually:

https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/49403251-53f0-4155-bf5f-519d0b4e754e

### It keeps getting rid of the duplicate subtrees but using its stored value for further calculation

