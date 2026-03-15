// Problem: LeetCode 238 - Product of Array Except Self
// Given an integer array, return an array where output[i] is the product of all elements except nums[i].
// Must run in O(n) without using the division operator.
// Example: [1,2,3,4] → [24,12,8,6]
//
// Solution: Two-pass prefix/suffix products.
// First pass fills result[i] with the product of all elements to the left.
// Second pass multiplies in the product of all elements to the right.
// Time: O(n) | Space: O(1) (output array doesn't count)
function productExceptSelf(nums : number[]): number[]{
const result : number[] = new Array(nums.length).fill(1)

let prefix = 1 //Running Product from the Left
for ( let i = 0 ; i < nums.length ; i ++){
    result[i] = prefix
    //console.log(result)
    prefix *= nums[i]
   // console.log(prefix)
}


let suffix = 1 // running Product From the Right
for (let i  = nums.length -1 ; i >= 0 ; i--){
    result[i] *= suffix
    console.log(result)
    suffix *= nums[i]
    console.log(suffix)
}
 return result;
}

console.log(productExceptSelf([-1, 1, 0, -3, 3]));