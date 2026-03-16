// Problem: LeetCode 231 - Power of Two
// Given an integer n, return true if it is a power of two.
// Example: n = 16 → true, n = 18 → false
//
// Solution: A power of two has exactly one bit set. Subtracting 1 flips all lower
// bits, so n & (n-1) === 0 iff n is a power of two (also guard n > 0).
// Time: O(1) | Space: O(1)
function isPowerOfTwo(n : number) : boolean {
    if(n <= 0) return false
    return(n & (n-1)) === 0 
}

console.log(isPowerOfTwo(16)) 
console.log(isPowerOfTwo(18)) 