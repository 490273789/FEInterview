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

// 如何正确的判断this指向
// 1、全局环境中的this
// 浏览器环境：无论是否在严格模式下，在全局环境中（热河函数体外部）this都指向全局对象window；
// node环境：无论是否在严格模式下，在全局执行环境中（在任何函数体外部），this都是空对象；
// 2、是否是new绑定:
// 如果是new绑定，并且构造函数中没有返回function或者是object，那么this指向这个新对象；
// 3、函数是否通过 call，apply调用，或者使用了bind绑定，如果是this绑定的就是指定的对象（显示绑定）
function info() {
    console.log(this.age);
}
var person = {
    age: 20,
    info
}
var age = 28;
var info = person.info;
info.call(person);
info.apply(person);
info.bind(person)();
// 需要注意，拖过call、apply、bind的第一个参数传入是undefined或者null，在严格模式下this的值为undefined或者null，实际应用的默认绑定规则，this指向全局对象（node环境为global，浏览器环境为window）
"use strict"
function info() {
    //浏览器环境：严格模式指向null，非严格指向window
    // node环境：严格指向null，非严格指向global
    console.log(this);
    // 严格模式下：浏览器环境和node环境均报错：Cannot read property 'age' of null
    // 非严格模式：
    // 浏览器环境：如果使用var，找到了全局环境中的age = 28，如果使用let则值为undefined，let声明的值不会挂在到window属性中；
    // 在node环境中为undefined，age变量不会挂在到global中
    console.log(this.age);
}
var person = {
    age: 20,
    info
}
let age = 28;
var info = person.info;
info.call(null);
info.apply(null);
info.bind(null)();

// 4、隐式绑定：
// 函数的电泳在某个对象上，，即调用位置存在上下文对象，xxx.fn();
function info() {
    console.log(this.age);//20
}
var person = {
    age: 20,
    info
}
let age = 28;
var info = person.info();

// 5、默认绑定
// 没有其他的函数绑定规则
"use strict"
function info() {
    //浏览器环境：严格模式指向undefined，非严格指向window
    // node环境：严格指向undefined，非严格指向global
    console.log(this);
    // 严格模式下：浏览器环境和node环境均报错：Cannot read property 'age' of undefined
    // 非严格模式：
    // 浏览器环境：如果使用var，找到了全局环境中的age = 28，如果使用let则值为undefined，let声明的值不会挂在到window属性中；
    // 在node环境中为undefined，age变量不会挂在到global中
    console.log(this.age);
}
var person = {
    age: 20,
    info
}
let age = 28;
info();

// 6、箭头函数
// 箭头函数没有自己的this，继承外层上下文绑定的this
let obj = {
    age: 20,
    info: function(){
        return () => {
            console.log(this.age);
        }
    }
}
let person = {
    age:20
}
let info = obj.info();
info();//20

let info2 = obj.info.call(person);
info2();

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


