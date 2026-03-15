class ListNode{
    val : number;
    next : ListNode | null;

    constructor(val? : number, next? : ListNode | null){
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

function reverseList( head : ListNode | null) : ListNode | null {
    let prev : ListNode | null = null;
    let curr : ListNode | null = head;

    while(curr !== null){
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}


const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
//node4.next = node2;
node4.next = null;

console.log(reverseList(node1));