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

// Time Complexity: O(n^m * m) where m == target.length, and n == word_bank.length
// Space Complexity: O(m^2)

const optimized_canConstruct = (target, word_bank, memo = {}) => {
    if (target in memo) 
        return memo[target];
    if (target === '')
        return true;

    for (let word of word_bank) {
        if (!target.indexOf(word)) {
            const suffix = target.slice(word.length);
            if (optimized_canConstruct(suffix, word_bank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
};

// Time Complexity: O(n * m"2)
// Space Complexity: O(m^2)

console.log(optimized_canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));  // true
console.log(optimized_canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));   // false
console.log(optimized_canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));     // true
console.log(optimized_canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
    [
        "eeeeeeeeeeeeeeee", 
        "eeeeeeeeeeeeeeeeeeeeee", 
        "eeeeeeeeeeeeeeeeeeee", 
        "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", 
        "e", 
        "eeee", 
        "eeeee"
    ]    
));     // false
 
