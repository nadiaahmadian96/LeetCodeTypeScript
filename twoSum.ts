// Problem: LeetCode 1 - Two Sum
// Given an array of integers and a target, return the indices of the two numbers that add up to target.
// Each input has exactly one solution; the same element cannot be used twice.
// Example: nums = [2,7,11,15], target = 9 → [0,1]
//
// Solution: Hash map storing each number's index.
// For each number, check if its complement (target - num) is already in the map.
// Time: O(n) | Space: O(n)
function twoSum(nums: number[], target : number) : number[]{
    const map = new Map<number , number> ();
    for ( let i = 0 ; i < nums.length; i ++){
        const complement = target - nums[i]
        if(map.has(complement)){
            return [map.get(complement)!, i];

        }
        map.set(nums[i], i);
    }
    return [];

}

console.log(twoSum([2, 7, 11, 15], 9));
