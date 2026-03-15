// Problem: LeetCode 33 - Search in Rotated Sorted Array
// A sorted array was rotated at some pivot. Given a target, return its index or -1 if not found.
// Example: [4,5,6,7,0,1,2], target = 0 → 4
//
// Solution: Modified binary search.
// One half is always sorted. Determine which half is sorted, then check if the target
// falls within that range to decide which half to search next.
// Time: O(log n) | Space: O(1)
function search ( nums : number[] , target : number) : number { 
    let left = 0;
    let right = nums.length - 1 ; 

    while(left <= right){
        const mid = Math.floor((right + left)/2)

        if (target === nums[mid]) return mid;
        
        if(nums[left] <= nums[mid]){
            //left half is sorted
            if (target >= nums[left] && target < nums[right]){
                right = mid - 1
            }else{
                left = mid + 1
            }
        } else {
            //right half is sorted
            if( target > nums[mid] && target <= nums[right]){
                left = mid + 1
            }else{
                right = mid - 1 
            }
        }
    }
    
    return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));