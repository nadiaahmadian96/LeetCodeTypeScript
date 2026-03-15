function mergeTwoLists(list1 : ListNode | null, list2 : ListNode | null) : ListNode|null{
    const dummy = new ListNode(0) //fake head
    let curr = dummy

    while (list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            curr.next = list1 //attach list1 node
            list1 = list1.next // move list 1 forward
        }else{
            curr.next = list2 //attach list2 node
            list2 = list2.next // move list 2 forward
        }
        curr = curr.next! // move curr forward
    }

    curr.next = list1 !== null ? list1 : list2
    return dummy.next
}