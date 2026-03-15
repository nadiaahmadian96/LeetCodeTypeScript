// Problem: LeetCode 217 - Contains Duplicate
// Given an integer array, return true if any value appears at least twice, false if all are distinct.
// Example: [1,2,3,1] → true, [1,2,3,4] → false
//
// Solution: Hash set.
// Track seen numbers; return true as soon as a duplicate is found.
// Time: O(n) | Space: O(n)
function containsDuplicate(nums: number[]) : boolean{
    const seen = new Set<number>();
    for (const num of nums){
        if(seen.has(num)){
            return true;
        }
         seen.add(num)

    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 4]));