// Problem: LeetCode 141 - Linked List Cycle
// Given the head of a linked list, determine if it contains a cycle.
// A cycle exists if a node's next pointer points back to a previous node.
// Example: 3→2→0→-4→(back to 2) → true
//
// Solution: Floyd's fast/slow pointer algorithm (tortoise and hare).
// Move slow by 1 and fast by 2 each step. If they ever meet, there's a cycle.
// Time: O(n) | Space: O(1)
//
// class ListNode{
//     val : number; 
//     next : ListNode | null; 

//     constructor(val?:number, next? : ListNode | null){
//         this.val = val ?? 0; 
//         this.next = next ?? null; 
//     }

// }

function hasCycle ( head : ListNode | null) : boolean{
    let slow = head; 
    let fast = head;

    while( fast !== null && fast.next !== null){
        slow = slow!.next;
        fast = fast.next.next;

        if(slow === fast) return true;

    }
    return false;

}

// const node1 = new ListNode(3);
// const node2 = new ListNode(2);
// const node3 = new ListNode(0);
// const node4 = new ListNode(-4);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
//node4.next = node2;
// node4.next = null;

console.log(hasCycle(node1));
