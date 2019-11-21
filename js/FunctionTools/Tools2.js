// $dispatch
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
// debounce

function debounce (fn, wait, type) {
    let timeout;
    return function (...args) {
        let context = this;
        if (timeout) clearTimeout(timeout);
        if(type) {
            let callNow = !timeout;
            timeout = setTimeout(() => {
                timeout= null;
            },wait)
            if (callNow) fn.call(context,...args);
        } else {
            timeout = setTimeout(() => {
                fn.call(context,...args)
            },wait)
        }
    }
}

// throttle

function throttle (fn, wait, type) {
    let previous;
    return function (...args) {
        let now = Date.now();
        if ( now - previous >= wait) {
            previous = now;
            fn.apply(this, args);
        }
    }

}

let arr = {};
console.log(arr.constructor)


function deepClone (value, hash = new WeakMap) {
    if (value === null) return value;
    if (value !== 'object') return value;
    if(value instanceof Date) return new Date(value);
    if (value instanceof RegExp) return new RegExp(value);
    let instance = new value.constructor;
    if(hash.has(value)) {
        return hash.get(value);
    }
    hash.set(value,instance);
    for (key in value) {
        if (value.hasOwnerPrototype(key)) {
            instance[key] = deepclone(value[key],hash);
        }
    }
}