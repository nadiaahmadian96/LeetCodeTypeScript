// Problem: LeetCode 344 - Reverse String
// Write a function that reverses a character array in-place.
// Do not allocate extra space — modify the input array directly.
// Example: ['h','e','l','l','o'] → ['o','l','l','e','h']
//
// Solution: Two-pointer swap. Start with left = 0 and right = s.length - 1,
// swap the characters, then move the pointers toward the center until they meet.
// Time: O(n) | Space: O(1)
function reverseString(s: string[]): void {
    let left = 0
    let right = s.length - 1

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]]

        left++
        right--

    }

}

const s = ['h','e','l','l','o']
reverseString(s)
console.log(s)