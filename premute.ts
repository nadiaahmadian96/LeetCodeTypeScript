/*
 * Problem 46 - Permutations (Medium)
 * https://leetcode.com/problems/permutations/
 *
 * Given an array of distinct integers, return all possible permutations
 * in any order.
 *
 * Example:
 *   Input:  [1, 2, 3]
 *   Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * Approach: Backtracking — at each step, pick any unused number, add it
 * to the current permutation, recurse, then undo the choice (backtrack).
 * A boolean `used` array tracks which elements are already in the path.
 *
 * Time:  O(n * n!) — n! permutations, each of length n
 * Space: O(n)     — recursion depth + current path
 */
function permute(nums: number[]): number[][] {
    const result: number[][] = []
    const current: number[] = []
    const used: boolean[] = new Array(nums.length).fill(false)

    function backtrack(): void {
        //base case : premutation is complete
        if (current.length === nums.length) {
            result.push([...current])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue //skipped used numbers

            current.push(nums[i]) //CHOOSE
            used[i] = true //marked as used

            backtrack() //explore

            current.pop() //UNCHOOSE
            used[i] = false //unmark
        }
    }
    backtrack()
    return result

}

console.log(permute([1, 2, 3]))