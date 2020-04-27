function *show(arr, string){
    yield *arr;
    yield *string;
}

let u = show([1,3,2,4], 'hello');
// for(let item of u){
//     console.log(item);
// }