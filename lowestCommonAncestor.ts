import { TreeNode } from "./TreeNode";

function lowestCommonAncestor( root : TreeNode , p:TreeNode, q : TreeNode) : TreeNode{

    if(p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left!, p , q)
    
    if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right!, p, q)
    
    return root
    
}
const node3 = new TreeNode(3)
const node5 = new TreeNode(5)
const node0 = new TreeNode(0)
const node4 = new TreeNode(4,node3,node5)
const node7 = new TreeNode(7)
const node9 = new TreeNode(9)
const node2 = new TreeNode(2,node0,node4)
const node8 = new TreeNode(8,node7,node9)
const rootNode= new TreeNode(6,node2,node8)

console.log(lowestCommonAncestor(rootNode,node2,node8))