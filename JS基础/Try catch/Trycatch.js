//try catch:在try里面的发生错误不会执行错误后的try里面的代码
try{
    console.log('a');
    console.log(b);
    console.log('v');
}catch(e){//error error.message error.name
    console.log(e.message + " " + e.name);
}