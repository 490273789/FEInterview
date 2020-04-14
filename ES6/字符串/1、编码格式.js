const text = "ji" // 古汉字长度是2，占用了两个码元（32位），js默认会输出2
console.log('字符串长度：', text.length)  // 由于要兼容老的系统，所以不能改动此属性
console.log("使用正则：", /^.$/.test(text));
console.log("得到第一个码元", text.charCodeAt(0));
console.log("得到第二个码元", text.charCodeAt(1));

//ji:  \ud842 \udfb7
// 可以通过此值判断码点大于16位二进制的最大值，来判断此字符是否是32位的
console.log("得到第一个码点", text.codePointAt(0));
// 如果是32位的会获取到第二个码元的值
console.log("得到第二个码点", text.codePointAt(1));

// 早起由于存储空间宝贵，unicode使用16位二进制来存储文字。我们将16位二进制编码叫做一个码元（Code Unit）,一个码点对应一个码元
// 后来由于基础的发展，Unicode对文字编码进行了扩展，将某些文字扩展到了32位（占用两个码元），并且，将某个文字对应的二进制数字叫做马点（Code Point），一个码点对应两个码元
// 同事ES6位正则表达式添加量了一个flag -- u，如果添加量了该配置，则使用码点进行匹配
console.log("使用正则：", /^.$/u.test(text));
/**
 * 判断字符串的位数
 * @param {String} char
 * @returns Boolean
 */
function is32bit (char, i) {
    return char.codePointAt(i) > 0xffff
}

/**
 *
 *判断字符串真实(码点)长度
 * @param {String} str
 * @returns Number 字符串长度
 */
let str = 'asdc'
function getLengthOfCodePoint (str) {
    let len = 0
    for(let i = 0; i < str.length; i++) {
        if (is32bit(str, i)) {
            i++
        }
        len++
    }
    return len
}

let num = getLengthOfCodePoint(str)
console.log(num,'qwe');
