// function ListNode(x) {
//     this.val = x;
//     this.next = null;
// }

function EntryNodeOfLoop(pHead) {
    if (pHead === null)
        return null;
    var fast = pHead;
    var slow = pHead;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast)
            break;
    }

    if (fast === null || fast.next === null)
        return null;
    // 有环，slow重新回到链表头
    slow = pHead;

    // slow和fast重新相遇时，相遇节点就是入环节点
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}
function EntryNodeOfLoop(pHead) {
    if (pHead == null) return null;

    var fast = pHead,
        slow = pHead;

    while (fast.next != null && slow.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    if (fast == null && fast.next.next == null) return null;
    slow = pHead;

    while(slow!==fast){
        slow = slow.next;
        fast=fast.next;
    }
    return slow;
}

