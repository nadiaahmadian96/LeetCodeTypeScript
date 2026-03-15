/*
 * Problem 200: Number of Islands (Medium)
 * https://leetcode.com/problems/number-of-islands/
 *
 * Given a 2D grid of '1's (land) and '0's (water), count the number of islands.
 * An island is surrounded by water and formed by connecting adjacent land cells
 * horizontally or vertically.
 *
 * Example:
 *   Input:
 *     [["1","1","0","0","0"],
 *      ["1","1","0","0","0"],
 *      ["0","0","1","0","0"],
 *      ["0","0","0","1","1"]]
 *   Output: 3
 *
 * Approach: DFS (Flood Fill)
 *   Scan every cell. When a '1' is found, increment the island count and run DFS
 *   to "sink" the entire island (mark all connected land as '0') so it isn't
 *   counted again.
 *
 * Time:  O(m × n) — every cell is visited at most once
 * Space: O(m × n) — worst-case recursion stack depth (fully connected grid)
 */
function numIslands(grid: string[][]): number {
    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;


    function dfs(i: number, j: number): void {
        //1. stop if out of bounds
        if (i < 0 || i >= rows || j < 0 || j >= cols) return;

        //2. stop if water
        if (grid[i][j] === '0') return;

        //3. sink this cell
        grid[i][j] = '0';

        //4. go in all four directions

        dfs(i - 1, j);
        //console.log(grid);
        dfs(i + 1, j);
        //console.log(grid);
        dfs(i, j - 1);
        //console.log(grid);
        dfs(i, j + 1);


    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {

            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
}

console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]));