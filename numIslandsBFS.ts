/*
 * Problem: Number of Islands (BFS)  — LeetCode #200
 * --------------------------------------------------
 * Given a 2D grid of '1's (land) and '0's (water), count the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent land
 * cells horizontally or vertically.
 *
 * Example:
 *   Input:
 *     [["1","1","0","0","0"],
 *      ["1","1","0","0","0"],
 *      ["0","0","1","0","0"],
 *      ["0","0","0","1","1"]]
 *   Output: 3
 *
 * Approach: BFS flood fill
 *   - Scan every cell; when a '1' is found, increment the count and BFS to
 *     sink (mark as '0') the entire connected island so it isn't counted again.
 *
 * Time:  O(m × n) — every cell is visited at most once
 * Space: O(min(m, n)) — maximum BFS queue size along the shorter dimension
 */
function numIslandsBFS(grid: string[][]): number {
    let count: number = 0
    const rows = grid.length
    const cols = grid[0]. length

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    function bfs(row: number, col: number): void {
        const queue: [number, number][] = [[row, col]]
        grid[row][col] = '0' //sink immediately when adding to queue!

        while (queue.length > 0) {
            const [r, c] = queue.shift()!

            for(const [dr , dc] of directions){
                const newRow = r + dr
                const newCol = c +dc 

                if(newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === '1'){
                    grid[newRow][newCol] = '0'
                    queue.push([newRow,newCol])
                }
            }
        }

    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                count++;

                bfs(i, j) //sink the whole island


            }
        }
    }

    return count

}


console.log(numIslandsBFS([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]));