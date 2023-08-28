# Grid Traveler Memoization 

## Problem Statement: 
Say that you are a traveler on a 2D grid. You begin in the
top-left corner and your goal is to travel to the bottom-right
corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with
dimensions m * n?
write a function •gridTrave1er(m, n)' that calculates this.

### Here's the implementation of the brute force approach

```javascript
    const gridTraveler = (m, n) => {
    if (m === 0 || n === 0)       
        return 0;
    if (m === 1 && n === 1)
        return 1;

    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);   
};
```

### Brute Force Thinking Process:
### Consider the following 3 x 7 grid:


### Since We are allowed to move only in downward and rightward direction, we proceed as follow:
