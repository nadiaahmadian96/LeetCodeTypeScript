# LeetCode Solutions in TypeScript

A collection of LeetCode problem solutions implemented in TypeScript, organized by data structure / topic.
Each file includes a comment block at the top describing the problem, example, approach, and time/space complexity.

## Problems

### Arrays

| # | File | Problem | What You're Solving | Difficulty |
|---|------|---------|---------------------|------------|
| 1 | [twoSum.ts](twoSum.ts) | Two Sum | Return indices of the two numbers that add up to a target | Easy |
| 217 | [containsDuplicate.ts](containsDuplicate.ts) | Contains Duplicate | Return true if any value appears more than once | Easy |
| 121 | [bestTimeToBuyAndSellStock.ts](bestTimeToBuyAndSellStock.ts) | Best Time to Buy and Sell Stock | Find the max profit from a single buy/sell transaction | Easy |
| 53 | [maximumSubarray.ts](maximumSubarray.ts) | Maximum Subarray | Find the contiguous subarray with the largest sum | Medium |
| 238 | [productOfArrayExcepSelf.ts](productOfArrayExcepSelf.ts) | Product of Array Except Self | Return array where each element is the product of all others | Medium |
| 152 | [maxProductSubArray.ts](maxProductSubArray.ts) | Maximum Product Subarray | Find the contiguous subarray with the largest product | Medium |
| 153 | [minInRotatedSortedArray.ts](minInRotatedSortedArray.ts) | Find Minimum in Rotated Sorted Array | Find the minimum element after an unknown rotation | Medium |
| 33 | [SearchInRotatedSortedArray.ts](SearchInRotatedSortedArray.ts) | Search in Rotated Sorted Array | Find a target's index in a rotated sorted array | Medium |
| 15 | [ThreeSum.ts](ThreeSum.ts) | 3Sum | Find all unique triplets that sum to zero | Medium |
| 11 | [containerWithMostWater.ts](containerWithMostWater.ts) | Container With Most Water | Find two lines forming the container that holds the most water | Medium |
| 56 | [mergeIntervals.ts](mergeIntervals.ts) | Merge Intervals | Merge all overlapping intervals into non-overlapping intervals | Medium |
| 303 | [NumArray.ts](NumArray.ts) | Range Sum Query - Immutable | Answer range sum queries in O(1) using a prefix sum array | Easy |
| 268 | [missingNumber.ts](missingNumber.ts) | Missing Number | Find the one missing number in a range [0, n] using Gauss's formula | Easy |
| 283 | [moveZeroes.ts](moveZeroes.ts) | Move Zeroes | Move all zeros to the end in-place while preserving relative order | Easy |
| 169 | [majorityElement.ts](majorityElement.ts) | Majority Element | Find the element appearing more than n/2 times using Boyer-Moore voting | Easy |
| 412 | [FizzBuzz.ts](FizzBuzz.ts) | Fizz Buzz | Map each number 1..n to "Fizz", "Buzz", "FizzBuzz", or itself | Easy |

### Strings & Sliding Window

| # | File | Problem | What You're Solving | Difficulty |
|---|------|---------|---------------------|------------|
| 3 | [lengthOfLongestSubstring.ts](lengthOfLongestSubstring.ts) | Longest Substring Without Repeating Characters | Find the length of the longest substring with all unique characters | Medium |
| 20 | [validParantheses.ts](validParantheses.ts) | Valid Parentheses | Determine if a bracket string is correctly opened and closed | Easy |
| 13 | [romanToInteger.ts](romanToInteger.ts) | Roman to Integer | Convert a roman numeral string to an integer using subtractive notation rules | Easy |
| 125 | [palindromeCheck.ts](palindromeCheck.ts) | Valid Palindrome | Check if a string reads the same forward and backward after cleaning | Easy |
| 242 | [anagram.ts](anagram.ts) | Valid Anagram | Determine if two strings are anagrams using a character frequency map | Easy |
| 344 | [reverseString.ts](reverseString.ts) | Reverse String | Reverse a character array in-place using two pointers | Easy |
| 387 | [firstUniqueChar.ts](firstUniqueChar.ts) | First Unique Character in a String | Find the index of the first non-repeating character | Easy |

### Linked Lists

| # | File | Problem | What You're Solving | Difficulty |
|---|------|---------|---------------------|------------|
| 206 | [reverseLinkedList.ts](reverseLinkedList.ts) | Reverse Linked List | Reverse a singly linked list in-place | Easy |
| 141 | [linkedListCycle.ts](linkedListCycle.ts) | Linked List Cycle | Detect whether a linked list contains a cycle | Easy |
| — | [mergeTwoSortedLists.ts](mergeTwoSortedLists.ts) | Merge Two Sorted Lists | Merge two sorted linked lists into one sorted list | Easy |

### Binary Trees

| # | File | Problem | What You're Solving | Difficulty |
|---|------|---------|---------------------|------------|
| 94 | [inorderTraversal.ts](inorderTraversal.ts) | Binary Tree Inorder Traversal | Return node values via left→root→right traversal | Easy |
| 104 | [maxDepth.ts](maxDepth.ts) | Maximum Depth of Binary Tree | Find the longest root-to-leaf path length | Easy |
| 102 | [levelOrder.ts](levelOrder.ts) | Binary Tree Level Order Traversal | Return node values grouped by level (BFS) | Medium |
| 235 | [lowestCommonAncestor.ts](lowestCommonAncestor.ts) | Lowest Common Ancestor of a BST | Find the deepest node that is an ancestor of both p and q | Medium |
| 98 | [validBST.ts](validBST.ts) | Validate Binary Search Tree | Determine if a binary tree is a valid BST | Medium |
| — | [TreeNode.ts](TreeNode.ts) | Shared TreeNode class | Reusable tree node definition used across tree problems | — |

### Graphs

| # | File | Problem | What You're Solving | Difficulty |
|---|------|---------|---------------------|------------|
| 200 | [numIslands.ts](numIslands.ts) | Number of Islands | Count connected groups of land cells in a 2D grid using DFS flood fill | Medium |
| 200 | [numIslandsBFS.ts](numIslandsBFS.ts) | Number of Islands (BFS) | Same as above but uses BFS flood fill instead of DFS | Medium |
| 210 | [findOrder.ts](findOrder.ts) | Course Schedule II | Return a valid course ordering using topological sort (Kahn's BFS) | Medium |

### Sorting Algorithms

| # | File | Problem | What You're Solving | Difficulty |
|---|------|---------|---------------------|------------|
| — | [mergeSort.ts](mergeSort.ts) | Merge Sort | Sort an array using divide-and-conquer merging of sorted halves | — |
| — | [quickSortArray.ts](quickSortArray.ts) | Quick Sort | Sort an array in-place using pivot partitioning (Lomuto scheme) | — |

### Backtracking

| # | File | Problem | What You're Solving | Difficulty |
|---|------|---------|---------------------|------------|
| 46 | [premute.ts](premute.ts) | Permutations | Generate all possible permutations of a distinct integer array | Medium |
| 78 | [subsets.ts](subsets.ts) | Subsets | Generate all possible subsets (power set) of a unique integer array | Medium |

### Dynamic Programming

| # | File | Problem | What You're Solving | Difficulty |
|---|------|---------|---------------------|------------|
| 70 | [climbStairs.ts](climbStairs.ts) | Climb Stairs | Count distinct ways to reach the top climbing 1 or 2 steps at a time | Easy |
| 322 | [coinChange.ts](coinChange.ts) | Coin Change | Find the fewest coins that sum to a target amount | Medium |
| 1143 | [longestCommonSubsequence.ts](longestCommonSubsequence.ts) | Longest Common Subsequence | Find the length of the longest common subsequence of two strings | Medium |
| 139 | [workBreak.ts](workBreak.ts) | Word Break | Determine if a string can be segmented into valid dictionary words | Medium |

### Math & Bit Manipulation

| # | File | Problem | What You're Solving | Difficulty |
|---|------|---------|---------------------|------------|
| 204 | [countPrimes.ts](countPrimes.ts) | Count Primes | Count primes less than n using the Sieve of Eratosthenes | Medium |
| 231 | [powerOfTwo.ts](powerOfTwo.ts) | Power of Two | Determine if n is a power of two using a single bitwise AND check | Easy |

## Setup

```bash
npm install
```

## Running Tests

```bash
npm test
```

## Tech Stack

- **Language:** TypeScript
- **Test Runner:** Jest (`ts-jest`)
