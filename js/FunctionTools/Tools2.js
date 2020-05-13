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
