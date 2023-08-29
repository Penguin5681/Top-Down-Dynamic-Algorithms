/*
    Write a function •canSum(targetSum, numbers)' that takes in a
    targetSum and an array of numbers as arguments.

    The function should return a boolean indicating whether or not it
    is possible to generate the targetSum using numbers from the array.

    You may use an element of the array as many times as needed.

    You may assume that all input numbers are nonnegative.
*/

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
// O(n ^ m) time (m = numbers.length) 
// O(m) Space

const optimized_canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return true;
    if (targetSum < 0)
        return false;

    for (let number of numbers) {
        const remainder = targetSum - number;
        if (optimized_canSum(remainder, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};
// O(n * m) time and O(m) space
console.log(canSum(7, [5, 3, 4, 7]));   // true
console.log(canSum(7, [5, 4]));     // false
// console.log(canSum(300, [7, 14]));  // false but slower runtime
console.log(optimized_canSum(300, [7, 14]));  // false but faster runtime