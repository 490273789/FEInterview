//通用柯里化练习
const curring = (fn, arr=[]) => {
    let length = fn.length;
    return (...args) => {
        arr = arr.concat(args);
        if (arr.length < length) {
            return curring(fn, arr);
        }
         return fn(...arr);
    }
}

const add = (a,b,c,d) => {
    return a+b+c+d;
}
let result1 = curring(add)(1)(2)(3)(4)
let result2 = curring(add)(1,2,3,4);
console.log(result1)
console.log(result2)

// 事务练习

const transaction = (anymethod,wrap) => {
    wrap.forEach(ele=>{
        ele.initlizae();
    });
    anymethod("你好Any");
    wrap.forEach(ele => {
        ele.close();
    });

}

transaction((content) => {
    console.log("I am Anymethod" + content);
},[
    {
        initlizae () {
            console.log("I am Initlizae1")
        },
        close () {
            console.log("I am Close1")
        }
    },
    {
        initlizae () {
            console.log("I am Initlizae2")
        },
        close () {
            console.log("I am Close2")
        }
    }
])

// 装饰器模式
Function.prototype.before = function(beforeFn){
    return (...args) => {
        beforeFn();
        this(...args);
    }
}

const core = (...args) => {
    console.log("I am Core: " + args)
}

const decorate = core.before(() => {
    console.log("I am BeforeFn")
});

decorate("Hello World")

// 观察者模式
class Subject {
    constructor () {
        this.state = 0;
        this.observer = []
    }

    getState () {
        return this.state;
    }
    setState (state) {
        this.state = state;
        this.notifityObserver(state);
    }
    notifityObserver (state) {
        this.observer.forEach( obs => {
            obs.update(state)
        })
    }

    addObserver (obs) {
        this.observer.push(obs)
    }
}

class Observer {
    constructor (subName,name,subject) {
        this.name = name;
        this.subjectName = subName;
        this.subject = subject
        this.subject.addObserver(this);
    }
    update (state) {
        console.log(this.subjectName + " state update: " + state);
        console.log(this.name + "收到 " + state);
    }
}

let sub1 = new Subject();
let sub2 = new Subject();

let obs1 = new Observer("sub1","obs1",sub1);
let obs2 = new Observer("sub1","obs2",sub1);
let obs3 = new Observer("sub1","obs3",sub1);
let obs4 = new Observer("sub2","obs4",sub2);
let obs5 = new Observer("sub2","obs5",sub2);
let obs6 = new Observer("sub2","obs6",sub2);
sub1.setState(2);
sub2.setState(3);

// 发布订阅模式，这个很重要
class Bus {
    constructor () {
        this.callback = {};
    }
    $on (name, fn) {
        this.callback[name] = this.callback[name] || [];
        this.callback[name].push(fn);
    }
    $emit (name, ...args) {
        this.callback[name].forEach(cb => cb(...args))
    }
}

let bus = new Bus;

bus.$on("add1",(a,b,c) => {
    console.log(a + b + c)
    return a + b + c;
})
bus.$on("add1",(a,b,c) => {
    console.log(a + b + c + 100)
    return a + b + c + 100;
})
bus.$on("add2",(a,b) => {
    console.log(a + b + "add2")
    return a + b + "add2";
})
bus.$on("add2",(a,b) => {
    console.log(a + b + "add2" + ":2")
    return a + b + "add2" + ":2";
})

bus.$emit("add1",1,1,1);
bus.$emit("add2",2,2)


// after函数
const after = (times,fn) => (...args) => --times === 0 && fn(...args);

let newAfter = after(2,(...args)=>{
    console.log(...args);
})

newAfter(1);
newAfter(2);