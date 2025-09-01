function insertNodeAtPosition(llist, data, position) {
    let newNode = new SinglyLinkedListNode(data);

    if (position === 0) {
        newNode.next = llist;
        return newNode;
    }

    let current = llist;
    let index = 0;
    while (index < position - 1 && current !== null) {
        current = current.next;
        index++;
    }

    newNode.next = current.next;
    current.next = newNode;

    return llist;
}
