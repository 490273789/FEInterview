
/**
 * 创建一个斐波那切数列的迭代器
 * createFeiboIterator 迭代器创建函数
*/
function createFeiboIterator () {
    let pre1 = 1,
        pre2 = 1,
        n = 1
    return {
        next(){
            let value
            if(n <= 2) {
                value = 1
            } else {
                value = pre1 + pre2
            }
            const result = {
                value,
                done: false
            }
             n++ 
             pre2 = pre1
             pre1 = value
             return result
        }
    }
}

let iterator1 = createFeiboIterator()

/**
 * 创建数组的迭代器
*/

let arr1 = [1,2,3,4]
let arr2 = [3,4,5]

function createArrayIterator (arr) {
    let index = 0
    return {
        next() {
            const result = {
                value: arr[index++],
                done: index < arr.length ? false : true
            }
            return result
        }
    }
}

let arrayIterator1 = createArrayIterator(arr1)
let arrayIterator2 = createArrayIterator(arr2)

let arrI1 = arrayIterator1.next()
while(!arrI1.done){
    console.log(arrI1.value);
    arrI1 = arrayIterator1.next()
}