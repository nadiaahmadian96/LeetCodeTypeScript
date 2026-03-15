/*
 * Problem: Subsets  — LeetCode #78
 * ---------------------------------
 * Given an integer array of unique elements, return all possible subsets
 * (the power set). The solution set must not contain duplicate subsets.
 *
 * Example:
 *   Input:  [1, 2, 3]
 *   Output: [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
 *
 * Approach: Backtracking
 *   - At each step, record the current subset (every partial state is valid).
 *   - Loop from `start` to end: choose nums[i], recurse with i+1, then
 *     unchoose (pop) to explore the next branch.
 *
 * Time:  O(n × 2ⁿ) — 2ⁿ subsets, each copied in O(n)
 * Space: O(n)       — recursion depth and current-subset buffer
 */
function subsets(nums : number[]): number[][]{
    const result : number[][] = [] //stores all subsets
    const current : number[] = [] //current subset being built

    function backtrack(start : number): void {
        //1.record current subset (Always valid!)
        
        result.push([...current]) //spread to make a copy

        //2. try including each number from start onwards
        for(let i = start ; i<nums.length; i ++){
            current.push(nums[i]) //CHOOSE
            backtrack(i+1) //EXPLORE
            current.pop() //UNCHOOSE(backtrack)

        }
    }

    backtrack(0)
    return result

}

console.log(subsets([1,2,3]))