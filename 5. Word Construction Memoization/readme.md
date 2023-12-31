# Can you construct the word?

## Problem Statement: <br> <br> Write a function canConstruct(target, wordBank) that accepts a target string and an array of strings. <br> The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating elements of 'wordBank' array. <br> You can reuse the elements of wordBank as many times as needed.

## Approach: <ol> <li> if the the prefix substring is present in the word bank then branch down the recursive tree and subtract the chosen word from the parent node.  </li>  <li> Branch down the tree till it becomes and empty string </li> <li> return true early if the leaf becomes an empty string. </li> </ol>

## Let's think of some of the base cases: <br> <br> Case: When an empty string is passed is should return true, because an empty string can always be constructed using none of the elements of word bank

## Example: Consider canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]). This evaluates to true see why.. <br> <br> The recursive tree should look something like the following: 

![image](https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/7bd12b57-0cd2-4458-8dde-20ce92b1bd65)

## Another Example: Consider canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]). This evaluates to true.  <br> <br> The recursive tree should look something like the following: 
![image](https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/6ac4ba9d-642f-4f07-95b4-c361f98e8916)


### Note that the nodes marked in red are just an dead end, i.e. we can't branch down any further and it simply returns false. and the node marked in blue hits the affirmative base case and returns a true. All these returned boolean values are bubbled up at their respective parent node and evaluates to true if any one of the return is true

## JavaScript Implementation: 
```javascript
const canConstruct = (target, word_bank) => {
    if (target === '') 
        return true;

    for (let word of word_bank) {
        if (!target.indexOf(word)) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, word_bank)) {
                return true;
            }
        }
    }
    return false;
};
```
### Time Complexity: O(n^m * m) where m = target.length, and n = word_bank.length
### Space Complexity: O(m^2)

### This code has correctness but is not efficient (obviously). So let's MEMOIZE IT!

## Memoized Approach: 
### Example: Consider canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])

### The Solution tree looks something like: 

![Screenshot 2023-09-06 144951](https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/a5842c30-7fe9-4fd4-8285-21e6b9fb42a9)

### To actually optimize this we need to get rid of overlapping subproblems
![image](https://github.com/Penguin5681/Dynamic-Algorithms/assets/85027012/a4f3758e-2770-41fb-947a-c6c6fe8c5907)

### The nodes marked in blue has the same structure all the way down and they calculate the same thing just with a few extra steps, to get rid of this we throw in a memo object and store the returns within the memo

### JavaScript implementation:
```javascript
const canConstruct = (target, word_bank, memo = {}) => {
    if (target in memo) 
        return memo[target];
    if (target === '')
        return true;

    for (let word of word_bank) {
        if (!target.indexOf(word)) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, word_bank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
};
```
