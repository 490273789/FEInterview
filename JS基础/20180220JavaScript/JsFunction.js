//累加求和
/*function sum(){
	var result = 0;
	for(i = 0; i < arguments.length; i++){
		result += arguments[i];
	}
	console.log(result);
}*/

// sum(1,2,3,4,5,6,7,8,9);

//写一个函数,功能是告知你所选定的小动物叫声.
/*function animal(a) {
	if(a == 'Tiger'){
		document.write('吼吼吼')
	}else if(a == 'chicken'){
		document.write('鸡够够')
	}else{
		document.write('无法识别')
	}
}*/

//定义一个函数,输入数字,逆转并输出汉子形式

/*function convert(){
	var num = window.prompt("input");
	var str = '';
	for(i = num.length - 1; i >= 0; i--){
		 str += transfer(num[i]);
	}
	document.write(str);
}

function transfer(target){
 	switch(target){
 		case "1":
 			return "壹";
 		case "2":
 			return "贰";
 		case "3":
 			return "叁";
 		case "4":
 			return "肆";
 		case "5":
 			return "伍";
 		case "6":s
 			return "陆";
 		case "7":
 			return "柒";
 		case "8":
 			return "捌";
 		case "9":
 			return "玖";
 		case "0":
 			return "零";
 	}
 }*/
 //递归:注意两点1.找规律	2.找出口.
 //写一个函数,实现n的阶乘
 //找规律:n! = n * (n - 1)!
 function mul(n){
 	//找出口
 	if(n == 1 || n == 1){
 		return 1;
 	}
 	return n * mul(n - 1);
 }


//实现斐波那契数列
//找规律
//fb(n) = fb(n - 1) + fb(n - 2)
function fb(n) {
	//找出口
	if(n == 1 || n == 2){
		return 1;
	}
	return fb(n - 1) + fb(n - 2)
}
//作用域:并列的函数之间的变量不能互相访问,互相嵌套的函数底层函数可访问外层函数,外层函数不能访问底层函数.
//变量:函数内部的变量为局部变量,定义在全局的变量为全局变量,定义在全局的函数称为全局函数.
