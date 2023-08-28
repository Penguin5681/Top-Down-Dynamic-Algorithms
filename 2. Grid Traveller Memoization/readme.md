# Grid Traveler Memoization 

## Problem Statement: 
Say that you are a traveler on a 2D grid. You begin in the
top-left corner and your goal is to travel to the bottom-right
corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with
dimensions m * n?
write a function •gridTrave1er(m, n)' that calculates this.

### Brute Force Thinking Process:
### Consider the following 3 x 7 grid:
![image](https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/06e55972-3ba5-4089-a0ab-104f98391cf3)


### Since We are allowed to move only in downward and rightward direction, we proceed as follow:
![image](https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/1cab0fdd-e656-4ab0-b619-82a11adeeefe)

### One possible solution is: 
#### start => down => down => right => right => right => right => right => finish

### There does exists 27 other solutions

### Here's the implementation of the brute force approach (TLE)

```javascript
    const gridTraveler = (m, n) => {
    if (m === 0 || n === 0)       
        return 0;
    if (m === 1 && n === 1)
        return 1;

    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);   
};
```

### So what really happened here is every time we go down we decrease the row by 1 and every time we go right, we decrease the column by 1.

### Let's discuss the base cases:
### Base case 1: either of the row or column is zero. this is because if we would have the row or/and column as 0, it would just be an invalid grid and there is absolutely no path to finish
### Base case 2: both the row and column is zero, this is because if we we had both row and column as 1, we would have only a single cell, where start and finish are overlapped, so there is only is single path (start => end), or we could say that we are already at the finish.

### Lets draw a recursion tree for a smaller grid (2 x 3):
![image](https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/9e72a194-f149-4bba-9c74-60ef890bc003)

### (Left, Right) = ((m - 1, n), (m, n - 1))
### Nodes circled in Red hit the negative base case (returns 0)
### Nodes circled in Blue hit the affirmative base case (returns 1)
### Each value returned is added at the parent node.

![image](https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/d8a8a812-8d0e-4bbd-9074-1e3bc09fa59c)


### The above solution takes Time: O(2<sup>m + n</sup>) and Space: O(m + n)
### Upon the analysis we figure out that the bottle-neck is time.
### Let's think of a better solution. How about memoizing it?

<br>

# Memoized Approach

### Upon a closer look notice that the (1, 2) subtree is getting repeated thrice [(1, 2) is same as (2, 1) if you deeply think about it]

### The repeating subtree is highlighted in green:

![image](https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/8f58b932-2f77-4eca-9d7c-e819f6c3dd9a)

### All three of the subtree return the same value i.e gridTraveler(1, 2) = gridTraveler(2, 1) = 1
![image](https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/65154644-caaf-4528-b705-7779d3c19ed1)


### Here's the implementation of the memoized approach

```javascript
const gridTraveler = (m, n, memo = {}) => {   // A better approach
    const key = m + ',' + n;

    if (key in memo)
        return memo[key];
    if (m === 0 || n === 0)       
        return 0;
    if (m === 1 && n === 1)
        return 1;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
};
```

### The optimized approach takes Time: O(m + n) and Space: O(m + n)
