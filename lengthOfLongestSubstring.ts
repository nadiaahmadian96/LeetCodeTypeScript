// Problem: LeetCode 3 - Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.
// Example: "abcabcbb" → 3 ("abc")
//
// Solution: Sliding window with a Set.
// Expand the right pointer; when a duplicate is found, shrink from the left until it's gone.
// Time: O(n) | Space: O(min(n, alphabet size))
function lengthOfLongestSubstring(s:string) : number{
    const set = new Set<string>()
    let left = 0
    let maxLen = 0 

    for(let right = 0 ; right < s.length ; right ++){
        //shrink window while duplicate exists

        while(set.has(s[right])){
            set.delete(s[left])
            left ++
        }
        //add current char and update max
        set.add(s[right])
        maxLen = Math.max(maxLen, right-left + 1)
    
    }
    return maxLen

}

console.log(lengthOfLongestSubstring("abcabcbb"))