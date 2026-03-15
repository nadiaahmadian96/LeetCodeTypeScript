// Problem 1143 – Longest Common Subsequence
// https://leetcode.com/problems/longest-common-subsequence/
//
// Given two strings text1 and text2, return the length of their longest
// common subsequence. A subsequence does not need to be contiguous.
// If there is no common subsequence, return 0.
//
// Example:
//   text1 = "abcde", text2 = "ace"  →  3  ("ace")
//   text1 = "abc",   text2 = "abc"  →  3
//   text1 = "abc",   text2 = "def"  →  0
//
// Approach: 2-D bottom-up DP
//   dp[i][j] = LCS length of text1[0..i-1] and text2[0..j-1].
//   - If characters match: dp[i][j] = dp[i-1][j-1] + 1
//     (extend the LCS found without these two characters).
//   - Otherwise:           dp[i][j] = max(dp[i-1][j], dp[i][j-1])
//     (best LCS ignoring the current character of one string or the other).
//   The first row and column are implicitly 0 (empty-string base cases).
//   Answer lives at dp[text1.length][text2.length].
//
// Time:  O(m * n)  where m = text1.length, n = text2.length
// Space: O(m * n)

function longestCommonSubsequence(text1: string , text2: string) : number{
    //creat a 2D table filled with 0s:
    const dp : number[][] = Array(text1.length + 1).fill(null)
    .map(() => Array(text2.length + 1).fill(0)) 

    //fill it row by row

    for(let i = 1; i <= text1.length; i ++){
        for(let j = 1; j <= text2.length; j ++){
            if(text1[i-1]=== text2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1] //match!
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])//no match, take the best you've seen so far!
            }
        }
    }
    //return bottom right corner
    return dp[text1.length][text2.length]
}

console.log(longestCommonSubsequence("abcde", "ace"))