/*
 * Problem: Quick Sort
 * -------------------
 * Implement quicksort to sort an array of integers in ascending order in-place.
 *
 * Example:
 *   Input:  [6, 9, 1, 5, 4, 2, 8]
 *   Output: [1, 2, 4, 5, 6, 8, 9]
 *
 * Approach: Divide & Conquer (Lomuto partition scheme)
 *   - Pick the last element as pivot.
 *   - Partition: move all elements ≤ pivot to the left, then place pivot in
 *     its final sorted position.
 *   - Recursively sort the left and right sub-arrays around the pivot.
 *
 * Time:  O(n log n) average, O(n²) worst case (already-sorted input)
 * Space: O(log n)   — recursion stack depth
 */
function quickSortArray(nums: number[]): number[] {

    function partition(nums: number[], left: number, right: number): number {
        const pivot = nums[right]; // pick last element as pivot
        let i = left - 1;         // boundary of smaller elements

        for (let j = left; j < right; j++) {
            if (nums[j] <= pivot) {
                i++;
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }

        // place pivot in correct position
        [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]];

        return i + 1; // pivot's final index
    }

    function quickSort(nums: number[], left: number, right: number): void {
        if (left >= right) return; // base case!

        const pivotIdx = partition(nums, left, right);

        quickSort(nums, left, pivotIdx - 1);  // sort left side
        quickSort(nums, pivotIdx + 1, right); // sort right side
    }

    quickSort(nums, 0, nums.length - 1);
    return nums;
}

console.log(quickSortArray([6, 9, 1, 5, 4, 2, 8])); // [1, 2, 4, 5, 6, 8, 9]