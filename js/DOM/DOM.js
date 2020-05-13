// 兼容性封装，求滚动条滚动的距离
function getScrollOffset () {//此方法封装意义不大，直接用else中的方法即可
    if (window.pageXOffset) {//当滚动距离为window.pageXOffset = 0时不会走此方法，因0时代表false
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

// 求元素相对于文档的坐标
function getElementPosition (dom) {
    let x = 0,
        y = 0;
    while (dom !== document.body) {
        x += dom.offsetLsft;
        y += dom.offsetTop;
        dom = dom.offsetParent;
    }
    return {
        x : x,
        y : y
    }
}