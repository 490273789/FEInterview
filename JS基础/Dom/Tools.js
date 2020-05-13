//计时器
var minutesNode = document.getElementsByTagName('input')[0];
var secondsNode = document.getElementsByTagName('input')[1];
var minutes = 0,
    seconds = 0;
var timer = setInterval(function(){
    seconds ++;
    if(seconds == 60){
        seconds = 0;
        minutes ++;
    }
    minutesNode.value = minutes;
    secondsNode.value = seconds;
    if(minutes == 3){
        clearInterval(timer);
    }
},1000)

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
 //给一个DOM对象添加该事件类型的处理函数
 function addEvent(elem, type, handle){
    if(elem.addEventListener){
        elem.addEventListener(type, handle ,false);
    }else if(elem.attachevent){
        elem.attachEvent('on' + type, function(){
            handle.call(elem);
        })
    }else{
        elem['on' + type] = handle;
    }
}