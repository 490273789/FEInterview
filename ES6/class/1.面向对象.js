// # 面向对象简介
// 面向对象一种编程思想，跟具体的语言
// 对比面向过程：
// - 面向过程：思考的切入点是功能的步骤
// - 面向对象：思考的切入点是对象的划分
// 举例： 大象装冰箱过程

// 1、面向过程
// 1. 打开冰箱门
function openDoor() {}
// 2. 装大象
function entryElement () {}
// 3. 关闭冰箱门
function closeDoor () {}

// 2、面向对象
// 1. 定义大象对象
function Element (name) {
    this.name = name
}
// 2. 定义冰箱对象
function firdge () {
    this.name = name
    this.openDoor = function(){}
    this.entryElement = function(){}
    this.closeDoor = function(){}
}
// 3.使用
const ele = new Element()
const firdge = new firdge()
firdge.openDoor()
firdge.entryElement(ele)
firdge.closeDoor()
