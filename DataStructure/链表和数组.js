function Node (value) {
    this.value = value
    this.next = null
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
node1.next = node2
node2.next = node3
node3.next = node4

/**
 * msg: 翻转链表
 * @param {root} 根节点
 */
function convert(root) {
    if(root.next.next == null) {
        root.next.next = root
        return root.next
    } else {
        let result = nizhi(root.next)
        root.next.next = root;
        root.next = null;
        return result
    }
}

/**
 * msg: 遍历链表
 * @param {*} root 
 */
function traverseLink (root) {
    if(root === null) return
    
}