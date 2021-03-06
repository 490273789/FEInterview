//返回长度为n的随机数字符串的函数
function Random(n) {
    let max = 1;
    for (let i = 0; i < n; i++) {
        max *= 10;
    }
    return function () {
        let str = '' + parseInt(Math.random() * max); //parseInt
        let count = n - str.length;
        for (let i = 0; i < count; i++) {
            str += '0';
        }
        return str;
    }
}
let random8 = Random(8);
random8();

//函数的默认值
function Person(name) {
    //this.name = name || 'none' //兼容性写法，缺点当name为0、null、undefined、false、‘’的时候会显示都会是none。
    this.name = name === undefined ? 'none' : name; //改进写法，ES参数默认值的原理
}

let p1 = new Person('wxb');
let p2 = new Person('');
let p3 = new Person();
let p4 = new Person(undefined);
let p5 = new Person(0);

//一、es6 函数默认值 --  惰性函数  --  不传值得时候才会使用
// 方式1：一个参数
function Person1(name = 'none') {
    this.name = name;
}
let p11 = new Person1('wxb');
let p21 = new Person1('');
let p31 = new Person1();
let p41 = new Person1(undefined);
let p51 = new Person1(0);

// 方式2：多参数
//在所传的参数绝对等于undefined的时候会走默认值
function Person3(name, age = 0, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
}
let p12 = new Person('wxb', 6, 30);

//arguments
//ES5中无论是改变实参列表还是改变形参另一个都会跟着改变
function max1(num1, num2) {
    console.log(num1, arguments[0]);//1,1
    console.log(num2, arguments[1]);//5,5
    num1 = 4;
    console.log(num1, arguments[0]);//4,4
    arguments[0] = 6;
    console.log(num1, arguments[0]);//6,6
}
max1(1, 5);
//添加严格模式或者是使用es6的写法（自动添加严格模式），改变形参或者实参不会影响另外一个参数的值
function max2(num1 = 0, num2) {
    console.log(num1, arguments[0]);//1, 1
    console.log(num2, arguments[1]);//5, 5
    num1 = 4;
    console.log(num1, arguments[0]);//4, 1
    arguments[0] = 6;
    console.log(num1, arguments[0]);//4, 6
}
max2(1, 5);

//方式3:调用函数
function getValue() {
    console.log('hello');
    return 6;
}

function count(n, m = getValue()) {
    console.log(n + m);
}

//方式4 --> TDZ
function add(m, n = m) {
    console.log(m + n);
}
add(1, 2);//3
add(1);//2
// 执行原理
// 第一步扫描代码 --> TDZ = [n,m]
// 第二步执行:let m;  --> TDZ = [n]
// 第三步执行:let n = m; --> TDZ[]

// 二、扩展运算符
// 一个函数，把若干数字+1，添加到指定数组当中
// 收集作用- 专门用于收集末尾的所有参数，将其放置到一个形参数组中
// 一个函数，仅能出现一个剩余参数
// // 必须是最后一参数 --> 计算以从左向右执行，当执行到不定参数的时候后计算机不知道还要留几个参数，所以要写在最后一位
function count(arr, ...arg) {//arg = [1,2,3,4,5], ...是将括号去掉的操作，所以 ...arg = 1,2,3,4
    console.log(arg);//不定参数是一个类数组
    console.log(arguments);//是一个对象
    for (let i = 0; i < arg.length; i++) {
        arr[i] = arg[i] + 1;
    }
}
let arr = [];
count(arr, 1, 2, 3, 4, 5)

// 扩展运算符 --> ... 扒掉括号的操作([],{}) ...[1,2,3,[4],5] -->1,2,3,[4],5
//求去掉最大值和最小值得平均数
function avearge(...arg) {//restArguments
    arg.sort(function (a, b) {
        return a - b;
    })
    arg.pop;
    arg.shift;
    return computedScore(...arg);//读的操作，将数组展开
}
//求平均数
function computedScore(...arg) {//写的操作，收集数组
    let sum = 0;
    arg.forEach(function (ele) {
        sum += ele;
    })
    return sum / arg.length;
}
let avg = avearge(12, 13, 45, 98, 1, 23);

var arr1 = [1, 2, 3, 4];
var arr2 = [4, 5, 6, 7];

arr1.concat(arr2);//合并数组
var arr3 = [...arr1, ...arr2];//合并数组


// 三、箭头函数
// 1.对于小括号(),函数的参数有且只能有一个，才可以不写小括号()
// 2.对于大括号{},函数体仅有一条语句的时候可以不写，不写大括号默认返回name
let getName = name => name;

// 3.上一个函数的等价写法
let getName1 = function (name) {
    return name;
}

// 4.两个参数
let show = (name, age) => console.log(name, age);

//5.空函数
let fn = () => { };
function fn() { }//等价上面的函数

//6.在箭头函数中，返回对象的简写，将对象使用括号括起来
let returnObj = name => ({ name: name }); //简写-->let returnObj = name => ({name})

// 7.箭头函数的嵌套
function sum2(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}
var sum3 = sum2(1);
var sum4 = sum3(2);
console.log(sum4(3)); //6
// 等价上面函数的写法
let sum5 = x => y => z => x + y + z;
console.log(sum5(1)(2)(3)); //6

//8.立即执行箭头函数
let fn = (name => name)('wsn');//默认返回name
let name = function (name) {
    return name;
}('wsn')//等价上面的函数
// this绑定分为4种：
// 1.默认绑定(控制性的函数，函数单纯执行，this指向window,dom事件函数，this指向事件源)
// 2.隐式绑定（谁调用this指向谁）
// 3.显示绑定（通过apply call bind）
// 4.new绑定
//权重：4>3>2>1

var name = 'window';
var obj = {
    name: 'obj',
    print: function () {
        console.log(this.name);
    }
}
obj.print();//obj
var newPrint = obj.print.bind(window);//window
var newnewPrint = newPrint.bind(obj);//bind执行window

newPrint();
newnewPrint();

var obj1 = {
    name: 'obj1',
    print: () => console.log(this.name)
}
obj1.print();//window

var newPrint = obj1.print.bind(obj1);
newPrint();//window

// 1、箭头函数中 没有this 没有arguments 没有 new.target 没有super 没有prototype 
// 2、不能被new操作符执行
// 3、箭头函数不能被作为构造函数，更多功能用于计算，数据流向，方便javascript引擎优化代码
// 4、箭头函数具有绑定this的能力，绑定后就不会改变，this不会像es5中的this根据函数不同的调用方式而改变。
// 5、箭头函数内部的arguments this由定义时外围最接近的一层非箭头函数的arguments this的值决定
// 6、箭头函数定义以后必须要有存储的位置

// a、使用变量存储
let sum6 = (a, b) => {
    let c = a + b
}
sum6();
// b、使用对象属性存储
let obj = {
    fn: () => {

    }
}
obj.fn();
// c、使用数组存储
let arr = [() => { }];
arr[0]();

// argument举例
// 如果返回函数中需要使用父级的arguments，就可以将返回函数写成箭头函数
let sum7 = (a, b) => {
    //console.log(arguments)//arguments is not defined
}
sum7(1, 2);

function outer() {
    // argumnets = [4, 5, 6]
    let sum8 = (a, b) => {
        console.log(arguments) //[4, 5, 6]
    }
    sum8(1, 2);
}
outer(4, 5, 6);

// 箭头函数的this
var k = 'window-a';

let obj1 = {
    k: 'obj1-a',
    fn: () => {
        // this指向window
        console.log(this.k); //window-a
    }
}
obj1.fn();

let obj2 = {
    k: 'obj2-a',
    function() {
        // this指向调用者
        let fn2 = () => {
            // this指向非箭头函数的this
            console.log(this.k); //obj2-a
        }
        fn2();
    }
}
obj2.function();

// this的实际使用
var ms = 'outerms';
let obj3 = {
    ms: 'abd',
    fn() {
        var self = this;
        setTimeout(function () {
            console.log(this.ms);//outerms -- this指向window
            console.log(self.ms);//abd -- this指向obj3
        }, 200);
    },
    fn2() {
        // this指向调用者
        setTimeout(() => {
            console.log(this.ms);//abd -- this指向fn2的this，在函数定义时决定的，不会改变
        }, 500);
    }
}
obj3.fn();

// 箭头函数处理数组
// 与之前相比代码量更少了
let arr3 = [10, 20, 30, 40];
console.log(arr3.filter(function (ele) {
    return ele > 20;//[30, 40]
}))
console.log(arr3.filter(ele => ele > 20));//[30, 40]