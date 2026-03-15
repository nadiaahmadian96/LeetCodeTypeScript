// Problem: LeetCode 125 - Valid Palindrome
// A phrase is a palindrome if, after lowercasing and removing all non-alphanumeric
// characters, it reads the same forward and backward.
// Example: "A man, a plan, a canal: Panama" → true
//
// Solution: Strip non-alphanumeric characters and lowercase the string, then use
// two pointers (left and right) converging inward to compare characters.
// Time: O(n) | Space: O(n) for the cleaned string
function isPalindrome(s: string): boolean {
    const cleaned = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '')
    let left = 0
    let right = cleaned.length - 1

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false

        left++
        right--
    }
    return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))