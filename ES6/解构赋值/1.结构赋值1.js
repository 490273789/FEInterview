// 一、对象解构
//实质：模式匹配
const resData = {
    director: 'xxx',
    imgs: [1],
    casts: {},
}

// let {director, imgs, casts} = resData1;//结果：director = 'xxx',imgs = [],casts = {}   进一步的写法如下
// let {director, imgs, casts} = {director: 'xxx',imgs: [],casts: {}}//{director, imgs, casts}是ES6的属性简写，最中完整版写法如下
// let {director: director, imgs: imgs, casts: casts} = {director: 'xxx', imgs: [],casts: {}}//通过后面的值取值
//key为规则，比如前半部分的imgs的value写为img简写也是可以的

// 写法二
let director, imgs, casts;
({ director, imgs, casts } = resData);
let { imgs: qwe } = resData // 跟换变量的名字
console.log(qwe);

// 解构失败：解构出来的值为undefined
// let {director,imgs,value,casts} = resData;//value的值不存在

// 不完全解构，
let { PI, random, pow, floor } = Math;
// 总结:结构失败是结构了对象不存在的值，存在的值可以正常使用。 不完全结构是没有将对象中的值全部解构

// 解构默认值
// 只解构了部分函数,可以给默认参数，如果对象中没有此参数则走默认值
// let {PI = 0, random, pow, floor,A = 0} = Math;

//嵌套解构
let node = {
    type: 1,
    parentNode: {
        tagName: 'div',
        values: {
            value: 123
        }
    }
}
let { type, parentNode, parentNode: { tagName, values: { value } } } = node;
console.log(type, parentNode, tagName, value);

// 二、数组解构
//数组的解构赋值,特点位置对应
let [a, b, c] = [1, 2, 3];
let [d, [e], f] = [1, [2], 3];
let [g = 10, h, i] = [, , 10];

console.log(a, b, c, d, e, f, g, h, i);
//swap  交换a 与 b的值
// let x = 1;
// let y = 2;
// let temp = x;
// 	x = y;
// 	y = temp;

let x = 1;
let y = 2;
[x ,y] = [y, x];//原始值开辟新的存储空间空间

// 进行赋值操作会开辟新的空间
//0X000 x 1
//0X001 y 2
// 赋值
//0x002 x 2
//0X003 y 1

// 剩余解构
let arr3 = [1,2,3,4,5]
let [r, t, ...args] = arr3
console.log(r, t , args);