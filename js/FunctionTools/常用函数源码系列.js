// 函数可以直接调用call、apply、bind所以这三个方法是函数原型上的方法：
 
// call函数源码
Function.prototype.call = function () {
    let [thisArg,...args] = [...arguments];
    if (!thisArg) {
        thisArg = typeof window === "undefined" ? global : window;
    }
    thisArg.fnc = this;
    let result = thisArg.fnc(...args);
    delete thisArg.fnc;
    return result;
}

// apply 函数源码
Function.prototype.apply = function(thisArg, rest) {
    let result;
    if (!thisArg) {
        thisArg = typeof window === "undefined" ? global : window;
    }
    thisArg.fnc = this;
    if(!rest) {
        result = thisArg.fnc();
    }else {
        result = this.fnc(...rest);
    }
    delete thisArg.fnc;
    return result;
}

// bind 函数源码
Function.prototype.bind = function () {
    
}

// new 实现原理
// 1、创建一个空对象，构造函数中的this指向这个空对象
// 2、这个对象被执行[[原型链接]]
// 3、执行构造韩式方法，属性和函数添加到this引用的对象中
// 4、如果构造函数没有返回其他对象，那么返回this，即创建的这个空对象，否则返回构造函数中返回的对象。
function _new() {
    let target = {};//内部创建一个对象
    let [constructor, ...args] = [...arguments];//第一个参数是构造函数
    target.__proto__ = constructor.prototype;
    let result = constructor.apply(target, args);//执行构造函数
    // 判断函数返回的类型
    if (result && (typeof result === "object" || typeof result === "function")) {
        return result;
    }
    // 如果返回的不是对象或者函数则返回创建的新对象
    return target;

}

// Object.create()实现原理

// Promise.all函数的实现


// 深拷贝和浅拷贝
let obj = {
    age:2,
    hobby:["篮球","足球"],
    say: function(){
        console.log("say")
    },
    reg: /\w/,
    father: {
        name:"wsn",
        age:16
    }
}
// 1、浅拷贝
// 可以使用for in、Object.assign()、...、Array.prototype.slice、Array.prototype.concat()
// 1.1for in实现
let obj1 = cloneForIn(obj);
function cloneForIn (val) {
    let newObj = {}
    for(let key in val) {
        if (key.hasOwnProperty()) {
            newObj[key] = val[key];
        }
    }
    return newObj;
}
console.log(obj)
// 1.2 Object.assign(obj1,obj2，...) 次方方法是将后面对象上的属性拼接到第一个对象上，在改变obj1的同时还会返回一个新的对象
let obj2 = Object.assign({},obj)
console.log(obj2)
// slice()
let arr = [1,{a:1}]
let arr1 = arr.slice();
let arr2 = arr.concat([]);
console.log(arr1);
console.log(arr2);

// 深拷贝

let obj = {
    age:2,
    hobby:["篮球","足球"],
    say: function(){
        console.log("say")
    },
    reg: /\w/,
    father: {
        name:"wsn",
        age:16
    }
}

// 1、使用JSON
// 缺点：2.1:不能识别function，RegExp，Data这写函数类型
//      2.2:所有对象的constructor属性都会被改变为Object函数  
//      2.3:会忽略Symbol和undefined
let obj4 = JSON.parse(JSON.stringify(obj));

// 2、使用递归实现深拷贝
function deepClone(val,hash = new WeakMap()) {
    if (val === null) return val;
    if (typeof val !== obj) return val;
    if (val instanceof Data) return new Data(val);
    if (val instanceof RegExp) return new RefExp(val);
    let instance = new val.constructor;
    if (hash.has(val)) {
        return hash.get(val);
    }
    hash.set(val,instance);
    for (let key in val) {
        if (key.hasOwnProperty()) {
            instance[key] = deepClone(val[key],hash);
        }
    }
    return instance;
}

var obj6 = {
    a: obj6
}
console.log(obj6);


