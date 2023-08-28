# Dynamic Programming Tutorial

Dynamic programming is a powerful problem-solving technique used in computer science and mathematics to efficiently solve a wide range of problems by breaking them down into smaller subproblems and storing the results of these subproblems in a table (usually an array or matrix). This approach is particularly useful when a problem can be broken down into overlapping subproblems, as it helps avoid redundant calculations by storing and reusing intermediate results.

Here are the key principles of dynamic programming:

1. **Optimal Substructure**: Dynamic programming problems can be divided into smaller, overlapping subproblems, and the solution to the larger problem can be constructed from the solutions to these subproblems.

2. **Overlapping Subproblems**: The same subproblems are often solved multiple times in the process of solving the larger problem. Dynamic programming saves time by storing the solutions to subproblems in a data structure (often an array or a matrix) and reusing them when needed.

There are two main approaches to dynamic programming:

1. **Top-Down (Memoization)**: In this approach, you start from the original problem and work your way down to smaller subproblems. You use a data structure (usually a dictionary or an array) to store the results of subproblems as you solve them. When you encounter a subproblem you've already solved, you look up its solution rather than recalculating it.

2. **Bottom-Up (Tabulation)**: In this approach, you start by solving the smallest subproblems and gradually build up to the original problem. You use a table (usually an array or a matrix) to store the solutions to subproblems and fill it in a systematic way, ensuring that you never calculate the same subproblem more than once.


# Recipe for Memoization:
![](https://media.giphy.com/media/sJTG6mVgO8SrWmpWbB/giphy.gif)

## 1. Make it Work: <br>
### &nbsp; &nbsp; &nbsp; • Visualize the problem as a tree <br>
### &nbsp; &nbsp; &nbsp; • Implement the tree using recursion <br>
### &nbsp; &nbsp; &nbsp; • Test it  <br>

## 2. Make it Efficent:
### &nbsp; &nbsp; &nbsp; • Add a memo object
### &nbsp; &nbsp; &nbsp; • Add a base case to return memo values
### &nbsp; &nbsp; &nbsp; • Store the return values in the memo

## NOTE: Don't try to cook up an efficient solution all at a single go.
