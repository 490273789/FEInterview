class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkList {
    constructor() {
        this.head = null
        this.length = 0
    }
    /**
     *获取链表
     */
    getList () {
        return this.head
    }
    /**
     *查询节点,返回节点的索引，如果没有查到则返回-1
     */
    search (node) {
        if (this.head) {
            if (this.head.element === node) {
                return 0
            } else {
                let current = this.head
                let index = 0
                while (current.next && current.element !== node) {
                    index ++
                    current = current.next
                }
                return current.next ? index : -1
            }


        }

    }
    /**
     *追加节点
     */
    append (val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
            this.length++
        }
    }

    /**
     *插入节点
     */
    insert (position, val) {

        if (position >= 0 && position <= this.length) {
            let node = new Node(val)
            let current = this.head
            let index = 0
            let pre = null
            if (position === 0) {
                current.next = this.head
                this.head = node
            } else {
                while (current.next && position !== index) {
                    index++
                    pre = current
                    current = current.next
                }
                pre.next = node
                node.next = current
                this.length++
            }
        } else {
            console.log('越界');
        }
    }

    /**
     *删除节点
     */
    remove () {

    }

    /**
     *链表是否为空
     */
    isEmpty () {
        return !this.length
    }

    /**
     *查询链表大小
     */
    size () {
        return this.length
    }
}