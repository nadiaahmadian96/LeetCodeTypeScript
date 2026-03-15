// Problem: LeetCode 15 - 3Sum
// Given an integer array, return all unique triplets [nums[i], nums[j], nums[k]]
// such that i, j, k are distinct and nums[i] + nums[j] + nums[k] == 0.
// Example: [-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]]
//
// Solution: Sort + two pointers.
// Fix one element with the outer loop, then use a left/right pointer on the remainder.
// Skip duplicates at both the outer loop and pointer levels to avoid repeated triplets.
// Time: O(n²) | Space: O(1) (excluding output)
function threeSum(nums: number[]) : number[][]{
    const result : number[][] = [];
    nums.sort((a,b)=> a-b);

    for(let i  = 0 ; i < nums.length -2 ; i ++ ){

      if( i > 0 && nums[i] === nums[i-1]) continue;  //skipping the duplicates

      let left = i + 1; 
      let right = nums.length - 1; 

      while(left < right) { 
        const sum = nums[i] + nums[left] + nums[right];

        if( sum === 0){
            result.push([nums[i] , nums [left] , nums[ right]]);
            while ( left < right && nums[left] === nums[left -1 ])left ++
            while(left < right && nums[right]=== nums[right + 1]) right --
            left ++
            right --
        }
        else if (sum < 0){
            left ++
        }else{
            right --
        }
      }
    }
     return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));