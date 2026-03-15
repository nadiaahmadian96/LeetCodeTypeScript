// Problem: LeetCode 387 - First Unique Character in a String
// Given a string s, find the first non-repeating character and return its index.
// Return -1 if no such character exists.
// Example: s = "leetcode" → 0  |  s = "aabb" → -1
//
// Solution: Two-pass approach using a frequency map. First pass counts occurrences
// of every character; second pass returns the index of the first character with count 1.
// Time: O(n) | Space: O(1) (at most 26 lowercase letters)
function firstUniqueChar(s: string ) : number{
    const map = new Map<string, number>()

    for(const char of s){
        map.set(char, (map.get(char) ?? 0 ) + 1)
    }

    for(let i = 0 ; i < s.length ; i ++){
        if(map.get(s[i]) === 1) return i
    }

    return -1
}

console.log(firstUniqueChar("leetcode")) 
console.log(firstUniqueChar("aabb"))