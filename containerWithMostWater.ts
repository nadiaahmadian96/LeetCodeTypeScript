// Problem: LeetCode 11 - Container With Most Water
// Given an array of heights, find two lines that form a container holding the most water.
// Area = min(height[left], height[right]) * (right - left)
// Example: [1,8,6,2,5,4,8,3,7] → 49
//
// Solution: Two pointers starting at both ends.
// Always move the pointer with the shorter height inward — moving the taller one
// can only decrease or maintain the width while not guaranteeing a taller boundary.
// Time: O(n) | Space: O(1)
function maxArea(height : number[]) : number {
    let left = 0; 
    let right = height.length - 1 ;
    let maxArea = 0;

    while( left < right){
        const area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(area, maxArea);

        if(height[left]< height [right]){
            left ++;
        }else{
            right --;
        }
    }
    return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));