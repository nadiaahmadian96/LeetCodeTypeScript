function maxDepth(root : TreeNode | null) : number {
    if(root === null) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
class depthTreeNode { 
    val : number; 
    left : depthTreeNode | null;
    right : depthTreeNode | null;

    constructor(val?: number, left?: depthTreeNode | null, right? : depthTreeNode | null){
        this.val = val ?? 0; 
        this.left = left ?? null;
        this.right = right ?? null;
    }
}


const Node1 = new depthTreeNode(1);
const Node3 = new depthTreeNode (3);
const Node5 = new depthTreeNode (5);
const Node7 = new depthTreeNode (7);

const Node2 = new depthTreeNode (2, Node1, Node3);
const Node6 = new depthTreeNode (6, Node5, Node7);

const DepthRoot = new depthTreeNode(4, Node2,Node6);


console.log(maxDepth(DepthRoot));