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
