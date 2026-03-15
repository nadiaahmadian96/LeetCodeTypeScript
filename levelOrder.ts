import { TreeNode } from "./TreeNode";

function levelOrder( root : TreeNode | null) : number[][]{
    const result : number[][] = []
    if (root === null) return []
    const queue : TreeNode[] = [root]

    while (queue.length > 0){
        const levelSize = queue.length //how many nodes at this level
        const level : number[] = []

        for (let i = 0 ; i < levelSize ; i++){
            const node = queue.shift()! // remove from front

            level.push(node.val) //record value

            if(node.left) queue.push(node.left) // add left child
            if(node.right) queue.push (node.right) // add right child
        }
        result.push(level)

    }
    return result
}

const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
const node9 = new TreeNode(9);
const node20 = new TreeNode(20, node15, node7);
const root = new TreeNode(3, node9, node20);

console.log(levelOrder(root));