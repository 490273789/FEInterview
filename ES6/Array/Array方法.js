let arr = [1,2,3,4,5]
let arr2 = [4,2,6,1,8,3]

arr.sort((a, b) => {
    return a + b
})
console.log(arr);

arr2.sort((a, b) => {
    return -(a - b)
})
console.log(arr2);
// 一、改变原数组
let arr3 = [1, 2, 3, 4];
let str = '1-2-3-4';
arr.push(3); //从数组尾部插入一位
arr.pop(3); //从数组尾部移除一位
arr.shift(2); //删除数组的第一位
arr.unshift(2); //在数组的前面添加一位 
arr.reverse(); //反转数组
//arr.splice(n, m, k); 从第n位开始， 截取m长度 ， 在切口处添加新的数据k
arr.splice(0, 2, 5)
//数组排序,不写值按照升序方法排序
//看返回值 1）当返回值位负数时，那么前面的数放在前面
//        2）为正数，那么后面的数在前
//        3）为0,不动
arr.sort(function (a, b) {
    return a - b;//按照升序排列
});
// 升序的数组使用此方法排序后变为降序
arr.sort(function (a, b) {
    return -(a + b);//按照降序排列
});

// 二、不改变原数组
var arr5 = [1, 2, 3, 4];
let arr55 = arr5.join('-'); //将数组中的每一位使用-连接成字符串:1-2-3-4
let arr66 = str.split("-") //按照括号内的字符进行拆分，拆分成数组.
let arr77 = arr5.concat(0, 0, 0); //将数组添加三位(可以添加n位),不会改变原数组.
let arr88 = arr5.concat(arr1); //参数是数组，拼接两个数组，不写参数，就是copy原数组，数组克隆
let arr99 = arr5.length; //返回数组的长度
let arr100 = arr5.toString(); //将数组以字符串的形式展示出来"1,2,3,4"
let arr110 = arr5.indexOf(n); //返回n在数组中第一次出现的索引值,如果数组中没有n则返回-1.
let arr120 = arr5.lastIndexOf(n); //返回n在数组中最后一次出现的索引值.
let arr130 = arr5.slice(n, m) //两个参数从n位开始截取到m位（包含第n位，不包含m位）,一个参数，是从该位截取到最后,不写参数，复制整个数组，多数用在将类数组转化为数组
//判断数组的每一位是否都满足条件，返回值为布尔类型
//相当于逻辑运算的"与",都满足条件才会返回true
let arr140 = arr5.every(function (ele) {
    return ele > 0
});
//判断数组是否有满足条件的，返回值为布尔类型
//相当于逻辑运算中的"或",有一个满足条件就为true
let arr150 = arr5.some(function (ele) {
    return ele > 3
});
