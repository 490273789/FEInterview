// 一、Object.assign(target, ...source) mix-in 混合
// 合并对象，会改变第一个参数的对象并返回该对象，如果后面的对象属性和前面重复则会覆盖，属于浅克隆
// 一般的使用Object.assign({}, ...source),可以将第一个参数写为空对象，这样不会改变原对象
function mixin (receive, obj) {//此方法赋值属性会覆盖
  for (let prop in obj) {
    receive[prop] = obj[prop]
  }
  return receive
}

// 二、Object.is() 比较两个值是否相等，引用类型的对象比较内存地址是否相等
// 比较和 === 大致相同，不同在于：
console.log(NaN === NaN); // false
console.log(+0 === -0); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false

// 三、Object.create({}, [propertiesObject]) 第一个参数可以是空对象、null、对象的prototype
// 第二个参数propertiesObject : 可选。 添加到新创建对象的可枚举属性（即其自身的属性，而不是原型链上的枚举属性）对象的属性描述符以及相应的属性名称。这些属性对应Object.defineProperties()的第二个参数。
// 返回值新的对象
const a = {
  name: 'w'
}

let b = Object.create(a)
console.log(b);
console.log(b.__proto__);

// 四、Object.defineProperties(obj, prop) 给对象添加新的属性
let obj = {
  name: 'obj'
};

Object.defineProperties(obj, {
  name: {
    value: 'newName',
    writable: true
  },
  newProp1: {
    value: 'newProp1',
    writable: true,
    enumerable: true
  },
  newProp2: {
    value: 'newProp2',
    writable: true
  }
});

console.info(JSON.stringify(obj));
// 输出结果如下
//   {
//       "name":"newName",
//       "newProp1":"newProp1",
//       "newProp2": "newProp2"
//   }

// 五、Object.defineProperty(obj, prop, descriptor)
let obj3 = {};

let mame = 'w';
Object.defineProperty(obj3, 'name', {
  configurable: true,
  enumerable: true,
  get: function () {
    console.info('get name .');
    return mame;
  },
  set: function (newName) {
    console.info('set new name is ' + newName);
    mame = newName;
  }
});

console.info(JSON.stringify(obj));
obj.name = 'xxx';
console.info(JSON.stringify(obj));
// 输出结果如下：
// get name .
// {"name":"obj"}
// set new name is xxx
// get name .
// {"name":"xxx"}

// 六、
// Object.keys()返回对象的可枚举属性数组。Object.keys(obj)还会对属性名进行排序
// Object.value 返回一个数组存放对象的属性
// Object.entries(obj)遍历获取对象上所有可枚举的属性，返回结果是一个二维数组[['key1', 'value1'], ['key2', 'value2'], ......]

const person = {
  name: "wsb",
  age: 18,
  height: 19
}
console.log(Object.keys(person));//返回一个数组存放对象的属性：["name","age","height"]
console.log(Object.values(person));//返回一个数组存放对象的值：["wsb","18","180"]
console.log(Object.entries(person));//返回一个类数组存放键值对：["name":"wsb","age":"18","height":"180"]

// 七、Object.freeze(obj)
// 将一个对象上的属性冻结，阻止添加、删除、更新属性到该对象及其原型。返回被冻结的对象。

// 八、Object.getOwnPropertyDescriptor(obj, prop)
// 获取一个对象指定名称的直接属性的描述信息（直接在对象上的属性，而不是原型链上的属性），存在则返回该属性的描述信息，不存在则返回undefined。

// 九、Object.getOwnPropertyDescriptors(obj)
// 获取一个对象所有的直接属性的描述信息（直接在对象上的属性，而不是原型链上的属性）。

// 十、Object.getOwnPropertyNames()
// 获取一个对象所有的直接属性的属性名称（直接在对象上的属性，而不是原型链上的属性）。返回属性名称字符串数组。

// 十一、Object.getOwnPropertySymbols()
// 获取对象上所有的Symbol类型的属性列表。

// 十二、Object.getPrototypeOf(obj) Object.setPrototypeOf(obj)
// 获取一个对象上的原型对象，其功能和 obj._ proto _等同。
// ES5中需要使用__proto__来获得原型的属性，不推荐，因为是内部属性
function Person (name = 'none') {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);//none
}
var p1 = new Person();
let p3 = {
  name: 'p3',
  sayName () {
    Object.getPrototypeOf(this).sayName.call(this);
    //Object.getPrototypeOf(this) = super  :访问当前对象的原型
    //要注意如果不是简写函数会报错，不能够使用super，函数内部的私有属性[[homeObject]] = p3，匿名函数没办法绑定此属性所以会报错
    //super.sayName.call(this); //等于这句话Object.getPrototypeOf(this).sayName.call(this)
  }
}

Object.setPrototypeOf(p3, p1)
p3.sayName()