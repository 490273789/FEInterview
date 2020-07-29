// 递归大法
// 感受一下
// 1、阶乘
// n!  -> n × (n-1)
function factorial () {
    if (n === 1) return n
    return n * factorial(n - 1)
}

// 2、斐波那切数列
// n(n-1) + (n-2)
function fibonacci (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

// 3、遍历n叉树
// 1.后序遍历
// a
var postorder = function (root) {
    const res = []
    function traversal (root) {
        if (root !== null) {
            root.children.forEach(child => {
                traversal(child)
            })
            res.push(root.val)
        }
    }
    traversal(root)
    return res
}
// b
var postorder = function (root) {
    const res = []
        ; (function (root) {
            if (root !== null) {
                root.children.forEach(child => {
                    arguments.callee(child)
                })
                res.push(root.val)
            }
        })(root)
    return res
}
// c
var postorder = function (root) {
    if (root === null) {
        return []
    }
    const res = []
    const arr = [root]
    while (arr.length) {
        const cur = arr.pop()
        res.push(cur.val)
        for (let i = cur.children.length - 1; i >= 0; i--) {
            arr.push(cur.children[i])
        }
    }
    return res.reverse()
}
// 2.前序遍历
var preorder = function (root) {
    const res = []
    function traversal (root) {
        if (root !== null) {
            res.push(root.val)
            root.children.forEach(child => traversal(child))
        }
    }
    traversal(root)
    return res
}