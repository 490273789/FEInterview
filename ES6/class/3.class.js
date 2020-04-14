// # 类：构造函数的语法糖
//  ## 传统构造函数的问题
// 1. 属性和原型定义方法分离，降低了可读性
// 2. 原型成员可以被枚举
// 3. 默认情况下，构造函数仍可以被当做普通函数使用

// ## 类的特点
// 1. 类的声明不会被提升，于let const一样存在暂时性死区
// 2. 类中所有代码均在严格模式下执行
// 3. 类所有方法都是不可枚举的
// 4. 累的所有方法内部都无法当做构造函数使用
// 5. 类的构造器必须使用new来调用

const isFly = 'canFly'
const isSwim = 'canSwim'
class Animal {
    // 字段初始化
    a = 1
    constructor (type, name, age, sex) {
        this.type = type
        this.name = name
        this.age = age
        this.sex = sex
        this[isSwim] = '看自己'
    }
    // 字段初始化 此写法是定义在成员中而不再原型上
    eat = () => {}
    print() {
        console.log(`【种类】: ${this.type}`);
        console.log(`【名字】: ${this.name}`);
        console.log(`【年龄】: ${this.age}`);
        console.log(`【性别】: ${this.sex}`);
    }
    // 可计算的成员
    [isFly] (fly) {
        return fly
    }
    // 静态成员，构造函数本身的成员
    // 静态变量
    static myClassName = 'Animal'
    // 静态方法
    static isSupper () {
        return true
    }
}

class Dog extends Animal {
    constructor (name, age, sex, love) {
        super('犬类', name, age, sex)
        this._love = love
    }
    // 对象的getter和setter 原理就是Object.defineProperty
    get love () {
        return this._love
    }
    // 创建一个love属性并给他加上setter，给该属性赋值时，会运行该函数
    set love (val) {
        this._love = val
    }

    // 同名方法会覆盖原型方法
    print () {
        // 调用父类的print方法
        super.print()
        // 自己特有的代码
        console.log(`【性别】: ${this.love}`);
    }
}

const dog = new Dog('66', 100, '公', '骨头')
dog.love = '狗粮'
console.log(dog.love);
console.log(dog[isFly]('不会飞')); 
console.log(dog.canFly('不会飞+1')); 