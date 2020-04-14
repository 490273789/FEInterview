const str = '学习字符串'
// 字符串实例上的方法
// includes：判断字符串中是否包含指定的子字符串
console.log('是否包含“字”：', str.includes('字'));
// startsWith：判断字符串中是否以指定的字符串开始
// 第二个参数：从字符串的第n位，以指定的字符串开始
console.log('是否以“学”开头：', str.startsWith('学'));
// endsWith：判断字符串中是否以指定的字符串结束
// 第二个参数：字符串的第n位，是指定的字符串
console.log('是否以“串”结尾：', str.endsWith('字',2));
// repeat：建字符串重复指定的次数，返回一个新的字符串
console.log('重复四次：', str.repeat(4));

// 正则表达式y g u
// y 匹配时，完全按照正则对象中的lastIndex位置开始匹配，并且匹配的位置必须在lastIndex位置。
// lastIndex 的值默认是0，可以更改
const str1 = 'Hello Word!!!'
const reg1 = /W\w+/ 
const reg2 = /W\w+/y 
const reg3 = /W\w+/y 
reg3.lastIndex = 6
console.log(reg1.test(str1));// true
console.log(reg2.test(str1));// false
console.log(reg3.test(str1));// true