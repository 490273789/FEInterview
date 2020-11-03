/**
 * @msg: 防抖函数- 操作结束后一段时间wait秒内，没有再次触发该操作，fn才执行
 * 使用场景：input框输入的模糊查询、防止重复抽奖/支付等
 * @param {Function: func} 要执行的目标函数
 * @param {Number: wait} 等待的时间
 * @param {Boolean: immediate} 是否立即执行一次
 * @return: Function 
 */
function debounce (func, wait, immediate) {
    let timeout
    return function (...args) {
        if (timeout) clearTimeout(timeout)
        if (immediate) {
            let callNow = !timeout  // 第一次为false，之后看下面的timeout能否执行
            timeout = setTimeout(() => timeout = null, wait)
            callNow ? func(this, args) : null
        } else {
            timeout = setTimeout(() => func.apply(this, args), wait)
        }
    }
}

/**
 * @msg: 节流函数  - 每次间隔相同的时间执行一次函数
 * 使用场景：比如获取滚动条当前位置
 * @param {Function: func}  回调函数
 * @param {Number: wait} 等待时间
 * @param {*: type} type == 1 - 会立即执行一次；type == 2 - 不会立即执行
 * @return: Function 
 */
function throttle (func, wait, type) {
    if (type == 1) {
        var previous = 0
    } else if (type == 2) {
        var timeout
    } else {
        throw Error(`'type' Error`)
    }
    return function (...args) {
        if (type == 1) {
            const date = Date().now()
            if (date - previous >= wait) {
                previous = date
                func.apply(this, args)
            }
        } else {
            !timeout ? timeout = setTimeout(() => {
                timeout = null
                func.apply(this, args)
            }, wait) : null
        }
    }
}

// 节流函数和防抖函数结合，

// 获取Body元素当前滚动条的位置
/**
 * @msg: 节流函数  - 每次间隔相同的时间执行一次函数
 * 使用场景：比如获取滚动条当前位置
 * @return: Object 当前body元素滚动条的x, y坐标 
 */
function getScrollOffset () {
    if (window.pageYOffset) { // 可以忽略该步骤为了熟悉api
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    }
    return {
        x: document.documentElement.scrollLeft + document.body.scrollLeft,
        y: document.documentElement.scrollTop + document.body.scrollTop
    }
}


/**
 * @msg: 获取url中的参数
 * @param {String: name}  需要查询参数的name
 * @return: 查询到的参数值，没有查询到则返回null 
 */
function getQueryString (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg); // ?a=1&b=2&c=3  获取到问号以后的部分
    if (r != null) {
        return unescape(r[2]); // 可对通过 escape() 编码的字符串进行解码
    }
    return null;
}

/**
 * @msg: 获取当前时间格式化
 * @param {String: type}  时间的链接方式
 * @return: 时间字符串
 */
function getCurrentDate (type) {
    let date = new Date();
    let time = {
        Y: date.getFullYear(), // 年
        M: date.getMonth() + 1 < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1, // 月
        D: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(), // 日
        H: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(), // 小时
        m: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(), // 分钟
        s: date.getMilliseconds() < 10 ? '0' + date.getMilliseconds() : date.getMilliseconds() // 秒
    }
    let format = [time.Y, time.M, time.D, time.H, time.m, time.s].join(type)
    return format
}

/**
 * @msg: 日期转换时间戳
 * @param {Date: date}  时间的链接方式
 * @return: 时间戳
 */
function getTime (date) {
    // 处理ios的兼容性问题不识别“-”
    let time = date
        .replace(/\-/g, "/")
        .replace("T", " ")
        .replace(".000+0000", "");
    return new Date(time)
}

//获取当前窗口的高度与宽度
function getViewportOffset () {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    }
    if (document.compatMode == "CSS1Compat") {
        return {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight
        }
    } else if (document.compatMode == "BackCompat") {
        return {
            w: document.body.clientWidth,
            h: document.body.clientHeight
        }
    }
}

//获取当前元素的位置
function getElementOffset (ele) {
    var box = ele.getBoundingClientRect();
    var w = box.width || (box.right - box.left);
    var h = box.height || (box.bottom - box.top);
    return {
        w: w,
        h: h
    }
}

//元素距离Body元素的距离
function getElementPostion (ele) {

    var x = 0,
        y = 0;

    while (ele != document.body) {
        x += ele.offsetLeft;
        y += ele.offsetTop;
        ele = ele.offsetParent;
    }

    return {
        x: x,
        y: y
    }
}

//封装兼容性方法
// style可以设置样式，只能获取行间样式
// getComputedStyle和currentStyle - 不能设置样式，只能获取样
// getComputedStyle - 该属性是兼容火狐谷歌,不兼容IE
// currentStyle - 该属性只兼容IE,不兼容火狐和谷歌
// https://www.cnblogs.com/cythia/p/6721145.html
function getStyle(elem, prop){
    if(window.getComputedStyle){
        return window.getComputedStyle(elem, null)[prop];
    }else{
        return elem.currentStyle[prop];
    }
}

// 添加事件兼容性写法
function addEvent (elem, type, handler) {

    if (elem.addEventListener) {
        elem.addEventListener(type, handler, false);
    } else if (elem.attachEvent) {

        elem['temp' + type + handler] = handler;
        elem[type + handler] = function () {
            elem['temp' + type + handler].call(elem);
        };
        elem.attachEvent('on' + type, elem[type + handler]);

    } else {
        elem['on' + type] = handler;
    }
}


// 移除事件兼容性写法
function removeEvent (elem, type, handler) {
    if (elem.removeEventListener) {
        elem.removeEventListener(type, handler, false);
    } else if (elem.detachEvent) {
        elem.detachEvent('on' + type, handler);
    } else {
        elem['on' + type] = null;
    }
}


// 阻止事件冒泡
function stopBubble (event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}


// 取消默认事件
function cancelHandler (event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }

}

// 实现拖拽
function drag (elem) {
    var disX,
        disY;
    addEvent(elem, 'mousedown', function (e) {
        var event = e || window.event;
        disX = event.clientX - parseInt(getStyle(elem, 'left'));
        disY = event.clientY - parseInt(getStyle(elem, 'top'));
        addEvent(document, 'mousemove', mouseMove);
        addEvent(document, 'mouseup', mouseUp);
        stopBubble(event);
        cancelHandler(event);
    });
    function mouseMove (e) {
        var event = e || window.event;
        elem.style.left = event.clientX - disX + "px";
        elem.style.top = event.clientY - disY + "px";
    }
    function mouseUp (e) {
        var event = e || window.event;
        removeEvent(document, 'mousemove', mouseMove);
        removeEvent(document, 'mouseup', mouseUp);
    }
}

// 异步加载
function asyncLoaded (url, callback) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    if (script.readyState) {//IE
        script.onreadystatechange = function () {
            if (script.readyState == "complete" || script.readyState == "loaded") {
                obj[callback]();
                script.onreadystatechange = null;
            }
        }
    } else {//chrome safari firefox
        script.onload = function () {
            obj[callback]();
        }
    }
    script.src = url;
    document.head.appendChild(script);
}

// 判断数据类型
function type (target) {
    var typeStr = typeof (target),
        toStr = Object.prototype.toString,
        objStr = {
            "[object Object]": "object - Object",
            "[object Array]": "array - Object",
            "[object Number]": "number - Object",
            "[object Boolean]": "boolean - Object",
            "[object String]": "string - Object"
        }
    if (target === null) {
        return null;
    } else if (typeStr === "function") {
        return "function";
    }
    if (typeStr !== "object") {
        return typeStr;
    } else {
        return objStr[toStr.call(target)];
    }
}

// 实现深拷贝
const deepClone = (value, hash = new WeakMap) => {
    if (value == null) return value;//排除掉null和undefined的情况
    if (typeof value !== 'object') return value;//这里包含了函数类型
    if (value instanceof RegExp) return new RegExp(value);
    if (value instanceof Date) return new Date(value);
    // 拷贝的内容可能是一个对象也可能是一个数组（循环） for in
    let instance = new value.constructor;//根具当前的数据类型创建一个新的实例
    if (hash.has(value)) {//防止死循环，对象中的属性存的还是此对象
        return hash.get(value);
    }
    hash.set(value, instance);
    // 循环遍历对象
    for (let key in value) {
        if (value.hasOwnProperty(key)) {//过滤掉原型上的属性
            instance[key] = deepClone(value[key], hash);
        }
    }
    return instance;
}

let obj = {
    a: { b: 1 },
    c: "1",
    d: [1, 2]
}

let obj2 = deepClone(obj)
console.log(obj2)

/**
 *
 *
 * @param {*} componmentName
 * @param {*} eventName
 * @param {*} params
 */
function dispatch(componmentName, eventName, params) {
    let parent = this.parent;
    let name = this.$options.name;

    while (parent && (!name || name !== componmentName)) {
        parent = parent.$parent;
        if (parent) {
            name = parent.$options.name;
        }
    }

    if (parent) {
        parent.$emit.call(parent, eventName, params);
    }
}

// $broadcast

/**
 *
 *
 * @param {*} componmentName
 * @param {*} eventName
 * @param {*} params
 */
function broadcast(componmentName, eventName, params) {
    this.child.forEach(child => {
        const name = child.$options.name;
        if (name === componmentName) {
            child.$emit.apply(child, [eventName].concat[params]);
        } else {
            broadcast.apply(child, [eventName].concat[params]);
        }
    })
}
// trim函数实现
function trim (str) {
    return str.replace(/^(\s)|*(\s)*$/g, "");
}
let str = "  iiq  "
console.log(trim(str));
console.log("iiq");

// 下划线转驼峰函数
// replace函数，第一个参数会将为正则或者字符串
// 第二个参数可以是字符串，$1$2... 或者是字符串，或者是函数，函数第一个值为匹配到项，第二个值为子项，第三个值为匹配到位置的索引，第四个至为整个字符串
// 没匹配到一次函数就会执行一次
function toHump (str) {
    return str.replace(/-(\w)/g, (str1, str2, str3, str4) => {//(\w) 没有括号就只有一个表达式，函数也就只有一个参数，多一个子表达式函数就多一个参数
        console.log(str1, str2, str3, str4);
        return str2.toUpperCase();
    })
}
let hump = toHump("qw-er-rt");
console.log(hump);

// 驼峰转下划线
function toLine (str) {
    return str.replace(/([A-Z])/g, "_$1").toLowerCase();//注意正则表达式中的括号
}
let str8 = "sdDateCase"
console.log(toLine(str8));

/**
 * @msg: 工具函数获取前（后）n天的时间
 * @param {Number} AddDayCount 传入要减少的天数
 * @param {String} type 日期之间连接的字符，不传默认为‘-’
 * @return: {String} 格式化后的日期字符串 eg：2020-04-29
 */
function getDateStr (AddDayCount, type = '-') {
    const date = new Date();
    date.setDate(date.getDate() + AddDayCount);//获取AddDayCount天后的日期
    const year = date.getFullYear();
    const month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);//获取当前月份的日期，不足10补0
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();//获取当前几号，不足10补0
    return [year, month, day].join(type)
}

/**
 * @msg: 选择后展示在头部上的日期格式
 * @param {Date} date 日期 
 * @param {String} type 日期连接的字符
 * @return: {String} 格式化后的日期字符串
 */
function formatDate(date, type) {
    const month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);//获取当前月份的日期，不足10补0
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();//获取当前几号，不足10补0
    return `${date.getFullYear()}${type}${month}${type}${day}`
}