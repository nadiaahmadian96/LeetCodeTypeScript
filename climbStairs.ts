// Problem: LeetCode 70 - Climb Stairs
// You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps.
// Return the number of distinct ways to reach the top.
//
// Solution: Dynamic programming (space-optimized Fibonacci).
// ways(n) = ways(n-1) + ways(n-2) — the same recurrence as Fibonacci.
// We only need the last two values, so we use two variables instead of an array.
// Time: O(n) | Space: O(1)
function climbStairs(n : number) : number {
    let prev2 = 1
    let prev1 = 1 

    for (let i = 2; i <= n ; i ++){
        const curr = prev1 + prev2 //ways(n) = ways(n-1) + ways(n-2)
        prev2= prev1 // slide window forward
        prev1 = curr //slide window forward
    }

    return prev1
}

console.log(climbStairs(8))