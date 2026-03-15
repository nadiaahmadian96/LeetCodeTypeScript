/*
 * Problem 139: Word Break (Medium)
 * https://leetcode.com/problems/word-break/
 *
 * Given a string s and a dictionary of strings wordDict, return true if s can
 * be segmented into a space-separated sequence of one or more dictionary words.
 *
 * Example:
 *   Input:  s = "leetcode", wordDict = ["leet", "code"]
 *   Output: true  ("leet" + "code")
 *
 * Approach: Bottom-Up Dynamic Programming
 *   dp[i] = true means the substring s[0..i-1] can be fully formed from wordDict.
 *   Base case: dp[0] = true (empty string is always valid).
 *   For each position i, try every word in the dictionary. If the word ends at i
 *   and dp[start] is true (the prefix before the word was valid), mark dp[i] = true.
 *
 * Time:  O(n × w) — n = length of s, w = total characters across all words
 * Space: O(n)     — the dp array
 */
function wordBreak(s:string, wordDict : string[]): boolean{
    const dp : boolean[] = new Array(s.length + 1).fill(false)
    dp[0] = true // base case: empty string is always valid

    for (let i = 1; i <= s.length ; i++){
        for (const word of wordDict){
            const start = i - word.length

            if(start >= 0 //word fits
                && dp[start] === true // part before is valid
                && s.slice(start, i) === word //word matches here
            ){
                dp[i] = true
                break // no need to check more words
            }
        }
    }
    return dp[s.length]
}

console.log(wordBreak("leetcode" , ["leet", "code"]))