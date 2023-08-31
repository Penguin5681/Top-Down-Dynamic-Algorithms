# Target Sum Memoization

## Problem Statement: 
### Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments. <br> <br> The function should return an array containing any combination of elements which add up to exactly the targetSum. If there is no such combination return null <br> <br> If there are multiple possible combinations, return any one of them.

## Approach:
### Case 1: targetSum = 7, numbers = [5, 3, 4, 7]. <br> Possible returns: [3, 4], [7]  
### Case 2: targetSum = 8, numbers = [5, 3, 2]. <br> Possible returns: [5, 3], [2, 2, 2, 2], [3, 3, 2]
### Case 3: targetSum = 300, numbers [7, 14] <br> No Possible solution, returns null

### Logical Tree for case 1: 
![Screenshot 2023-08-31 143417](https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/382b5765-148d-45a9-a032-4c5a1533cd75)

### The above tree is the same as canSum Problem, i.e we have n choices for a target sum where n = numbers.length <br> <br> Let's now get down to the base cases: <br> <br> Base Case 1: When targetSum reaches zero, we just simply return an empty array "[]" because to get zero as a targetSum we add up exactly nothing! <br> <br> Base Case 2: When targetSum reaches to a point where it can't be broken down further i.e: targetSum < 0, in such case we return "null". 

### Now we already know that the returns from the base case goes up to the parent node. This time we'll be manipulating the values. For an example when zero returns and empty array we push in the choice taken to get to that value. <br> Have a look at this for a better understanding

https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/e46a33c0-0a74-4e46-a159-a8e9371152e9

## Here's a JavaScript implementation for the approach:
```javascript
const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;

    for (let number of numbers) {
        const remainder = targetSum - number;
        const remainder_result = howSum(remainder, numbers, memo);
        if (remainder_result !== null) {
            memo[targetSum] =  [...remainder_result, number];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};
```

### Time: O (n<sup>m</sup>) * m where m = targetSum and n = numbers.length <br> Space: O (m)

# A better approach (Memoization):

## The memoized problem is pretty much similar to the problems we've previously discussed i.e: <br> <br> 1. Check if the targetSum is already present in the memo or not. if yes return the value at targetSum. <br> <br> 2. When we finish the iteration over the number number array and don't find any possible solution, just return nulls

### JavaScript Implementation:

```javascript
const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;

    for (let number of numbers) {
        const remainder = targetSum - number;
        const remainder_result = howSum(remainder, numbers, memo);
        if (remainder_result !== null) {
            memo[targetSum] =  [...remainder_result, number];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};
```
