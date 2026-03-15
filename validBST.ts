import { TreeNode as BST } from './TreeNode';

function isValidBST(root : BST | null) : boolean {

    function validate(node : BST |null, min : number, max : number): boolean{
        if (node === null) return true // base case

        if (node.val <= min ) return false // too small
        if (node.val >= max) return false // too big

        return validate(node.left, min , node.val) // tighten max for left
        && validate(node.right, node.val, max) // tighten min for right
     }

     return validate(root, -Infinity , +Infinity)
}



const BSTNode1 = new BST(1);
const BSTNode3 = new BST (3);
const BSTNode5 = new BST (5);
const BSTNode7 = new BST (7);

const BSTNode2 = new BST (2, BSTNode1, BSTNode3);
const BSTNode6 = new BST (6, BSTNode5, BSTNode7);

const BSTDepthRoot = new BST(4, BSTNode2,BSTNode6);


console.log(isValidBST(BSTDepthRoot));
