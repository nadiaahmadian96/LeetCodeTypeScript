import { TreeNode } from './TreeNode';

const treeNode1 = new TreeNode(1);
const treeNode3 = new TreeNode (3);
const treeNode5 = new TreeNode (5);
const treeNode7 = new TreeNode (7);

const treeNode2 = new TreeNode (2, treeNode1, treeNode3);
const treeNode6 = new TreeNode (6, treeNode5, treeNode7);

const root = new TreeNode(4, treeNode2,treeNode6);


function inorderTraversal ( root : TreeNode | null ) : number[]{
    const result : number[] = []

    function inorder(node : TreeNode | null) : void{
        if( node === null) return // base case

        inorder(node.left) // go left
        result.push(node.val)//vist
        inorder(node.right)//go right
    }

    inorder(root)
    return result
}

console.log(inorderTraversal(root));