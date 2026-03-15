/*
 * Problem 303 - Range Sum Query - Immutable (Easy)
 * https://leetcode.com/problems/range-sum-query-immutable/
 *
 * Given an integer array, handle multiple range sum queries efficiently.
 * sumRange(left, right) returns the sum of elements between indices left
 * and right inclusive.
 *
 * Example:
 *   nums = [2, 3, 1, 4, 5]
 *   sumRange(0, 2) → 6   (2+3+1)
 *   sumRange(1, 3) → 8   (3+1+4)
 *   sumRange(0, 4) → 15  (2+3+1+4+5)
 *
 * Approach: Build a prefix sum array where prefix[i] = sum of nums[0..i-1].
 * Then sumRange(left, right) = prefix[right+1] - prefix[left] in O(1).
 *
 * Time:  O(n) to build, O(1) per query
 * Space: O(n) — prefix array
 */
class NumArray{
    private prefix : number[]
    constructor(nums:number[]){
        this.prefix = new Array(nums.length + 1 ).fill(0)

        for (let i =0; i < nums.length; i ++){
            this.prefix[i+1] = this.prefix[i] + nums[i]
        }
    }

    sumRange(left:number, right: number): number{
        return this.prefix[right + 1] - this.prefix[left]
    }
}

const numArray = new NumArray([2,3,1,4,5])
console.log(numArray.sumRange(0,2))
console.log(numArray.sumRange(1,3))
console.log(numArray.sumRange(0,4))