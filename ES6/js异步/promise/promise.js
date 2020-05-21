const MyPromise = (() => {
    const PENDING = 'pending',
        RESOLVED = 'resolved',
        REJECTED = 'rejected',
        PromiseValue = Symbol('PromiseValue'), // 状态数据
        PromiseStatus = Symbol('PromiseStatus'), // 当前状态
        changeStatus = Symbol('changeStatus'),
        thenables = Symbol('thenables'),
        catchables = Symbol('catchables'),
        settleHandle = Symbol('settleHandle'), // 后续处理的通用函数
        linkPromise = Symbol('linkPromise') // 串联Promise

    return class MyPromise {
        /**
             * 处理状态
             * @param {*} status
             */
        [changeStatus] (newStatus, newValue, queue) {
            if (this[PromiseStatus] !== PENDING) {
                return
            }
            this[PromiseStatus] = newStatus
            this[PromiseValue] = newValue
            queue.forEach(handle => handle(newValue))
        }
        constructor(executor) {
            this[PromiseStatus] = PENDING
            this[PromiseValue] = undefined
            this[thenables] = []
            this[catchables] = []
            const resolve = data => {
                this[changeStatus](RESOLVED, data, this[thenables])
            }
            const reject = reason => {
                this[changeStatus](REJECTED, reason, this[catchables])
            }
            try {
                executor(resolve, reject)
            } catch (err) {
                reject(err)
            }

        }

        /**
         *
         * 后续处理函数
         * @param {*} handler 后续处理函数
         * @param {*} immediatelyStatus 处理状态
         * @param {*} queue 处理队列
         */
        [settleHandle] (handler, immediatelyStatus, queue) {
            if (typeof handler !== 'function') return
            if (this.PromiseStatus === immediatelyStatus) {
                setTimeout(() => {
                    handler(this[PromiseValue])
                }, 0)
            } else {
                queue.push(handler)
            }
        }
        [linkPromise] (thenable, catchable) {
            function exec (data, handle, resolve, reject) {
                try {
                    let result = handle(data)
                    if (result instanceof MyPromise) {
                        result.then(d => {
                            resolve(d)
                        }, err => {
                            reject(err)
                        })
                    }
                    else {
                        resolve(result)
                    }
                } catch (err) {
                    reject(err)
                }

            }
            return new MyPromise((resolve, reject) => {
                this[settleHandle](data => {
                    exec(data, thenable, resolve, reject)
                }, RESOLVED, this[thenables])
                this[settleHandle](reson => {
                    exec(reson, catchable, resolve, reject)
                })
            })
        }
        then (thenable, catchable) {
            this[linkPromise](thenable, catchable)
        }
        catch (catchable) {
            this[linkPromise](undefined, catchable)
        }

        static resolve () {

        }

        static reject () {

        }

        static all () {

        }

        static race () {
            
        }
    }
})()
