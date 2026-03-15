/*
 * Problem: Merge Sort
 * ------------------
 * Implement merge sort to sort an array of integers in ascending order.
 *
 * Example:
 *   Input:  [5, 2, 3, 1]
 *   Output: [1, 2, 3, 5]
 *
 * Approach: Divide & Conquer
 *   - Recursively split the array in half until each piece has 1 element.
 *   - Merge sorted halves back together by comparing elements one by one.
 *
 * Time:  O(n log n) — log n levels of recursion, O(n) work per level
 * Space: O(n)       — temporary arrays created during merging
 */
function mergeSortArray(nums: number[]): number[] {

    function mergeSort(nums: number[]): number[] {
        if (nums.length <= 1) return nums; //base case

        const mid = Math.floor(nums.length / 2);
        const left = mergeSort(nums.slice(0, mid)); // sort left half
        const right = mergeSort(nums.slice(mid)); // sort right half
        return merge(left, right);
    }
    function merge(left: number[], right: number[]): number[] {
        const result : number[] = [];
        let i = 0; //pointer for left
        let j = 0; // pointer for right

        while(i<left.length && j<right.length){
            if(left[i] <= right[j]){
                result.push(left[i]);
                i++;
            }else{
                result.push(right[j]);
                j++;
            }
        }
        // add remaining elements
        while(i < left.length){result.push(left[i]); i++;}
        while(j<right.length){result.push(right[j]); j++;}

        return result;
    }

    return mergeSort(nums)
}

console.log(mergeSortArray([5,2,3,1]));