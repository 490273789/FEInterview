/**
 * 一般的语言实现链表都需要指针来实现
 * 而js的引用类型本来就是按值引用的
 * 变量中保存的实质上是一个指向其对应对象的一个指针
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {  //传入和返回都是Node类型，第一个元素下标0
    constructor(node) {
        this.head = node;
        this.length = 1;
    }
    get isEmpty () {
        return !this.length;
    }
    append (node) {
        var lastNode = this.findAsIndex(this.length - 1);
        lastNode.next = node;
        this.length++;
    }
    insert (index, node) {   //在哪个元素之前插入
        var targetNode = this.findAsIndex(index - 1);
        node.next = targetNode.next;
        targetNode.next = node;
    }
    remove (index) {
        var preNode = this.findAsIndex(index - 1);
        var nextNode = this.findAsIndex(index + 1);
        preNode.next = nextNode;
    }
    findAsIndex (index) {
        if (index > this.length) {
            console.log('越界');
            return
        }
        if (index === 0) {
            return this.head;
        }
        var curNode = this.head;
        while (index && curNode) {
            index--;
            curNode = curNode.next;
        }
        return curNode;
    }
    toString () {
        var curNode = this.head;
        var arr = [];
        var i = 0;
        while (curNode) {
            arr[i++] = curNode.val;
            curNode = curNode.next;
        }
        return arr.toString();
    }
}
let list = new LinkedList(new Node('a'));

list.append(new Node('b'));
console.log(list);
list.append(new Node('d'));
list.insert(2, new Node('c'));
list.remove(1);
console.log(list.toString())

