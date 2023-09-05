// The function should return an array containing any combination of
// elements that add up to exactly the targetSum. If there is no
// combination that adds up to the targetSum, then return null.

const howSum = (targetSum, numbers) => {
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;

    for (let number of numbers) {
        const remainder = targetSum - number;
        const remainder_result = howSum(remainder, numbers);
        if (remainder_result !== null) {
            return [...remainder_result, number];
        }
    }
    return null;
};

const optimized_howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;

    for (let number of numbers) {
        const remainder = targetSum - number;
        const remainder_result = optimized_howSum(remainder, numbers, memo);
        if (remainder_result !== null) {
            memo[targetSum] = [...remainder_result, number];
            return memo[targetSum]
        }
    }

    memo[targetSum] = null;
    return null;
};

console.log(howSum(7, [2, 3, 4]));
console.log(howSum(7, [5, 8, 12]));
console.log(optimized_howSum(300, [7, 14]));