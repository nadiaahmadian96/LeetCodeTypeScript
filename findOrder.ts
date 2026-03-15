// Problem: LeetCode 210 - Course Schedule II
// Given numCourses and a list of prerequisite pairs, return a valid course ordering.
// If it's impossible to finish all courses (cycle exists), return an empty array.
// Example: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]] → [0,1,2,3]
//
// Solution: Topological sort via BFS (Kahn's algorithm). Build an adjacency list and
// in-degree array. Enqueue all courses with no prerequisites, process them in order,
// and reduce in-degrees of dependent courses. A cycle is detected if not all courses
// are visited.
// Time: O(V + E) | Space: O(V + E)
function findOrder(numcoursers: number, prerequisites: number[][]): number[] {
    //build adjacency list and in-degree array

    const graph: number[][] = Array.from({ length: numcoursers }, () => [])
    const inDegree: number[] = new Array(numcoursers).fill(0)

    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course) //prereq -> course
        inDegree[course]++ //course has one more prereq
    }

    //start with courses that has no prerequisites
    const queue: number[] = []
    for (let i = 0; i < numcoursers; i++) {
        if (inDegree[i] === 0) queue.push(i)
    }

    const order: number[] = []

    while (queue.length > 0) {
        const course = queue.shift()!
        order.push(course)

        //reduce in-degree of dependant courses

        for (const dependant of graph[course]) {
            inDegree[dependant]--
            if (inDegree[dependant] === 0) {
                queue.push(dependant) //now available!
            }
        }

    }
    //if all courses taken -> valid, else cycle exists
    return order.length === numcoursers ? order : []
}

console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]))
console.log(findOrder(2, [[1,0],[0,1]]))