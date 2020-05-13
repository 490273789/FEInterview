function debounce (func, wait, immediate) {
    let timeout
    return function (...args) {
        if(timeout) clearTimeout(timeout)

        if(immediate) {
            let callNow = !timeout  // 第一次为false，之后看下面的timeout能否执行
            timeout = setTimeout( () => timeout = null , wait)
            callNow ? func(this, args) : null
        } else {
            timeout = setTimeout(() => func.apply(this, args), wait)
        }
    }
}

function throttle (func, wait, type) {
    if(type == 1) {
        let previous = 0
    } else if (type == 2) {
        let timeout
    } else {
        throw Error(`'type' Error`)
    }
    return function(...args) {
        if(type == 1) {
            const date = Date().now()
            if(date - previous >= wait) {
                previous = date
                func.apply(this, args)
            }else {
                if(!timeout) {
                    timeout = setTimeout(() => {
                        timeout = null
                        func.apply(this, args)
                    }, wait)
                }
            }
        }
    }
}