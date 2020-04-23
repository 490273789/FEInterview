// 一、创建对象的方法
// 对象自面量
let obj = {};
// new操作符
let obj1 = new Object();
Object.create //可以明确定义原型的指向
let obj2 = Object.create(null);//创建的对象没有原型

// 二、复习对象操作
obj2.name = 'xxxx' // 增加或者修改
obj2['name'] = 'xxxx';// 增加或者修改
obj2.name// 查询
delete obj2.name;// 删除

// 三、对象新增方法
const front = 'elem-';
const name = "wang"
const game = "GAME"
const obj5 = {
    name, // 成员速写
    say () { }, // 方法速写
    [front + stuff]: name,//slem-stuff: 'zhangsan'
    [game] () {
        console.log('lol');
    },
    //height: 180,//ES5定义重复属性会报错
    height: 180 //ES6定义重复属性不会报错下面会覆盖上面的属性
}

console.log(obj5[game]());
console.log(obj5['elem-' + stuff]);

// 四、setTimeout第三个参数
const st = setTimeout((id) => {
    console.log(id);
    console.log('1');
}, 1000, setTimeout(() => {
    console.log('2')
}, 3000));

const three = function () {
    console.log('last')
    return 'three'
}

const st1 = setTimeout((val) => {
    console.log(val);
    console.log('1');
}, 1000, three());