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