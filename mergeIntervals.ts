/*
 * Problem 56 - Merge Intervals (Medium)
 * https://leetcode.com/problems/merge-intervals/
 *
 * Given an array of intervals, merge all overlapping intervals and return
 * an array of the non-overlapping intervals that cover all the input intervals.
 *
 * Example:
 *   Input:  [[1,3],[2,6],[8,10],[15,18]]
 *   Output: [[1,6],[8,10],[15,18]]
 *   Explanation: [1,3] and [2,6] overlap → merged into [1,6]
 *
 * Approach: Sort by start time, then iterate and either merge the current
 * interval into the last one (if they overlap) or push it as a new interval.
 *
 * Time:  O(n log n) — dominated by the sort
 * Space: O(n) — result array
 */
function merge(intervals: number[][]): number[][] {
    //1. sort by start time
    intervals.sort((a, b) => a[0] - b[0])

    const result: number[][] = [intervals[0]] //start with first interval

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i]
        const last = result[result.length - 1] //last merged interval

        if (current[0] <= last[1]) {
            //overlap ->merge by extending if needed
            last[1] = Math.max(last[1], current[1])
        } else {
            //no overlap -> add as new interval
            result.push(current)
        }
    }

    return result
}
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))