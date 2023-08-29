# Target Sum Memoization

## Problem Statement:
Write a function 'canSum(targetSum, numbers)' that takes in a
targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it
is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are non-negative.

## Approach: 
### Consider a case where we have targetSum = 7 and numbers = [5, 3, 4, 7]
### The answer would be "true" since we can take 3 & 4 and add it up to 7 OR just take 7 and we are already at the solution 

## Let's think about the base cases:
### If you look at the problem statement you'll find out that the number is always non-negative, so once we reach at a number where It can be broken down further, we know that we hit a base case and return something. <br><br> Base Case 1: When target sum is 0 we return true. This is because if we hit zero we know that we can reach the targetSum. <br> <br> Base Case 2: When target sum is non-zero but can't be broken down further, we return false. This indicates that there no possible solution present in the tree

## Lets Implement the solution using the following recursive tree: 
![image](https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/7c919923-e386-4dd0-b88f-bf3b80f3d7a1)

## Starting with the target sum as the root of the tree. We initially have n choices, where n is the length of the "numbers" array <br> <br> This approach has correctness but is not very efficient. <br> 
## JavaScript Implementation:
```javascript
const canSum = (targetSum, numbers) => {
    if (targetSum === 0)
        return true;
    if (targetSum < 0)
        return false;

    for (let number of numbers) {
        const remainder = targetSum - number;
        if (canSum(remainder, numbers))
            return true;
    }
    return false;
};
```
## Time Complexity: O(n<sup>m</sup>) <br> Space Complexity: O(m) <br>[m is the length of the numbers array]

## A Better Approach (Memoization)
### Consider a case where targetSum = 8 and numbers = [2, 3, 5]
![image](https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/b8352251-72ae-4860-a3db-8cacab914804)

### The Solution tree is quite large, but notice that we have overlapping sub problems i.e the tree rooted at 3 is getting repeated thrice and providing the same answer taking many extra steps and hence decreasing the overall runtime <br> the overlapping subtrees are marked in the following diagram:

![image](https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/1d032202-ee36-4799-91ac-2ed774c1a89b)

### We will not reconstruct the same subtree again and again for the same node. So instead we memoize it and check if the value is already present in the memo or not. If it is we return whatever we have at the value. 

## JavaScript Implementation:
```javascript
const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return true;
    if (targetSum < 0)
        return false;

    for (let number of numbers) {
        const remainder = targetSum - number;
        if (canSum(remainder, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};
```

## Time Complexity: O(n*m) <br> Space Complexity: O(m) <br>[m is the length of the numbers array]
