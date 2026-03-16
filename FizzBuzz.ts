// Problem: LeetCode 412 - Fizz Buzz
// Given an integer n, return a string array where each element is "FizzBuzz"
// if divisible by both 3 and 5, "Fizz" if by 3, "Buzz" if by 5, else the number.
// Example: n = 5 → ["1", "2", "Fizz", "4", "Buzz"]
//
// Solution: Iterate 1..n, check divisibility by 15 first (both), then 3, then 5.
// Time: O(n) | Space: O(n)
function fizzBuzz(n: number): string[] {
    const result: string[] = []
    for (let i = 1; i < n; i++) {
        if (i % 15 === 0) result.push("FizzBuss")
        else if (i % 3 === 0) result.push("Fizz")
        else if (i % 5 === 0) result.push("Buzz")
        else result.push(String(i))
    }
    return result

}

console.log(fizzBuzz(15))