// Problem: LeetCode 242 - Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An anagram uses all characters of the original string exactly once.
// Example: s = "anagram", t = "nagaram" → true
//
// Solution: Use a frequency map. Count each character in s, then decrement for each
// character in t. Return false if a character is missing or the count goes negative.
// Time: O(n) | Space: O(1) (at most 26 lowercase letters)
function isAnagram(s:string, t : string ): boolean{
    if(s.length !== t.length) return false
    
    const map = new Map<string,number>()

    for(const char of s){
        map.set(char, (map.get(char)?? 0)+1)
    }
    for(const char of t){
        if(!map.has(char)) return false
        map.set(char, map.get(char)! -1)
        if(map.get(char)! < 0 ) return false
    }
   return true
}
console.log(isAnagram("anagram","anagram"))