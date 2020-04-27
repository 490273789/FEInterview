// Symbol 符号
// ## 普通符号
// 符号是ES6新增的一个数据类型，它通过使用函数``` Symbol(符号名)```，来创建。
// 符号设计的初衷，是为了给对象设置私有属性
// 符号具有以下特点：
// -没有字面量
// -使用type of得到的类型是symbol
// -**每次调用 Symbol 函数得到的符号永远不相等，无论符号名是否相同**
// -符号可以作为对象属性名存在，这种属性称之为符号数形
//      -符号属性是不能被枚举的，因此在for in循环中无法读取到符号属性，Object.key()方法也无法读取到符号属性
//      -Object.getOwnPropertyNames,尽管可以读到无法枚举的属性，但是仍然无法读取符号属性，
//      -es6新增Object.getOwnPropertySymbol 方法，可读取符号
// - 符号无法被隐式转换因此不能被用于数学运算、字符串拼接或其他隐式转换场景，单符号可以显示的转换为字符串，通过String构造函数进行装换即可。console.log之所以能够输出符号，是他在内部进行了显示转换。
const sys1 = Symbol('a')
const sys2 = Symbol('a')
console.log(sys1 === sys2) // fasle

// ## 共享符号 Symbol.for()
// SymbolFor内部实现
const SymbolFor = (() => {
    const global = {}
    return function (name) {
        if (!global[name]) {
            global[name] = Symbol(name)
        }
        return global[name]
    }
})()

const sbl1 = SymbolFor('a')
const sbl2 = SymbolFor('a')
console.log('SymbolFor: ', sbl1 === sbl2) // true

// ## 知名符号 
// 知名符号是一些具有特殊含义的共享符号，通过Symbol的静态属性得到
// ES6延续了ES5的思想：减少魔法，暴露内部实现
// 因此ES6用知名符号暴露了某些场景的内部实现
// 1.Symbol.hasInstance
function A () { }
const obj = new A()
Object.defineProperty(A, Symbol.hasInstance, {
    value: function () {
        return false
    }
})
console.log('instanceod: ', obj instanceof A) // true
console.log('hasInstance: ', A[Symbol.hasInstance](obj)) // false

// 2.Symbol.isConcatSpreadable
const arr1 = [3]
const arr2 = [5,6,7]

// arr2[Symbol.isConcatSpreadable] = false // false 链接的数组不会展开
arr2[Symbol.isConcatSpreadable] = true // 默认是true  链接的数组会展开
// const result = arr1.concat(9, arr2) // [ 3, 9, [5, 6, 7 ]]
const result1 = arr1.concat(9, arr2) // [ 3, 9, 5, 6, 7 ]
// console.log(result);
console.log(result1);

// 3.Symbol.toStringTag
// 该知名符号会影响Object.prototype.toString 的返回值

class Person {
    get [Symbol.toStringTag] (){
        return "Person"
    }
}
const p = new Person()
const arr3 = [32,43]
console.log(Object.prototype.toString.apply(p))
console.log(Object.prototype.toString.apply(arr3))
// 4.Symbol.toPrimitive
// 该知名符号会影响数据类型转换

// 5.其他知名符号