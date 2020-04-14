// 模版字符串
// 基本用法
let name1 = 'w';
let name2 = 'm';
let str6 = name1 + ' Love ' + name2;
console.log('str6:', str6);
// 等同于上面的写法
let str5 = `${name1} Love ${name2}`; //插值语法
console.log('str5:', str5);

// 原始方法
// 只是写法上换行
let str7 = '<div>\
<span></span>\
</div>';
console.log('str7:', str7);

// 内容换行
let str8 = '<div>\n \
<span></span>\n \
</div>';
console.log('str8:', str8);

// 使用模板字符串不需要考虑换行和回车，怎么写怎么展示
let title = 'test';
let str9 = `<div>
<span>${title}</span>
</div>`;
console.log('str9:', str9);
//${}方法会调用当前值得toString操作 --> 括号内可以放 
// 1原始值
// 2引用值：${{}}==>[object objet]  /  ${[1,2,3]}==> "1,2,3,4"
//模板字符串支持 -->表达式 函数 运算
function returnStr(a, b) {
    return `${a}X${b}=${a*b}`;
}
console.log('returnStr:',returnStr(1,2));// "1X2=2"

//转义字符的使用
let str10 = `\``;
console.log('str10:',str10);// `
let str11 = `\${}`;
console.log('str10:',str11);//${}
let str12 = `\\`;
console.log('str10:',str12);// \

// 模板字符串的转义符号内容都当做普通字符使用
let str13 = String.raw`abc\n${123}bcd`
console.log('str13:', str13);//abc\n123bcd

//模板字符串的标记

// alert('hello');
// alert `hello`;//支持函数执行
console.log(parseInt `123`);//123
console.log(parseInt `12${3}`); //5 将12和3分开执行了 --> parseInt(12, 3)
// 相当于上面的写法
console.log(parseInt (['12',''],3))//5

let people1 = 'sn'
let people2 = 'zy'
let text = myTag`我是${people1},她是${people2}。`
// 相当于：
// text = myTag(["我是", ",她是"，"。"], "sn","zy")

function myTag(parts) {
    const values = Array.prototype.slice.apply(arguments).slice(1)
    let str = ""
    for(let i = 0; i < values.length; i++) {
        str += parts[i] + values[i]
        if(i === values.length - 1) {
            str += parts[i + 1]
        }
    }
    return str
}
console.log('text:',text);// text: 我是sn,她是zy。

// 防止xss（脚本注入）攻击
// <script>while(ture){}<\/script>
const container = document.getElementById('container')
const txt = document.getElementById('txt')
const btn = document.getElementById('btn')
btn.onclick = function(){
    container.innerHTML = safe`<p>
        ${txt.value}
    </p>`
}

function safe(parts, ...args) {
   let str = ''
   for(let i = 0; i < args.length; i++) {
       const v = args[i].replace(/</g, '&lt;').replace(/>/g, '&gt;')
       str += parts[i] + v
       if (i === args.length - 1) {
           str += parts[i + 1]
       }
   }
   return str
}


