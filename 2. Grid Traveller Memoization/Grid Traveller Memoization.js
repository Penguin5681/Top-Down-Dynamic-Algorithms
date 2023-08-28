// Say that you are a traveler on a 2D grid. You begin in the
// top-left corner and your goal is to travel to the bottom-right
// corner. You may only move down or right.

// In how many ways can you travel to the goal on a grid with
// dimensions m * n?
// write a function •gridTrave1er(m, n)' that calculates this.

const gridTraveler = (m, n, memo = {}) =>  {   // Not optimized
    if (m === 0 || n === 0)       // Invalid Grid
        return 0;
    if (m === 1 && n === 1)
        return 1;               // only 1 possible way (There is only a single cell)

    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

const optimized_gridTraveler = (m, n, memo = {}) => {   // A better approach
    const key = m + ',' + n;

    if (key in memo)
        return memo[key];
    if (m === 0 || n === 0)       
        return 0;
    if (m === 1 && n === 1)
        return 1;

    memo[key] = optimized_gridTraveler(m - 1, n, memo) + optimized_gridTraveler(m, n - 1, memo);
    return memo[key];
};

// console.log(gridTraveler(0, 3));        // Invalid Grid (Hits negative base case)
// console.log(gridTraveler(2, 3));        // 3
// console.log(gridTraveler(5, 3));        // 15
// console.log(gridTraveler(1, 1));        // Valid Grid (Hits affirmative base case)
console.log(optimized_gridTraveler(100, 100));    // 2333606220
