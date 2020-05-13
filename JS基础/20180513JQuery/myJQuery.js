(function(){
    function JQuery (selector) {
        return new JQuery.prototype.init(selector);
    }

    JQuery.prototype.init = function (selector) {
        //this = {}
        //选择出dom并包装成JQuery对象 返回

        //创建类数组length属性初始化为0
        this.length = 0;
        //通过class选择
        if(selector.indexOf('.') != -1){
            var dom = document.getElementsByClassName(selector.slice(1));
        }else if(selector.indexOf('#') != -1){
            var dom = document.getElementById(selector.slice(1))
        }
        //判断选择器类型，将结果放到this对象中
        if ( dom.length == undefined ) { 
            this[0] = dom;
            this.length ++;
        }else { //其他选择器直接循环类数组中的内容
            for (var i = 0; i < dom.length; i++){
                this[i] = dom[i];
                this.length++;
            }
        }
        //return this;
    }

    JQuery.prototype.css = function (config) {
        //循环操作每一个dom
        for (var i = 0; i < this.length; i++){
            for (var attr in config) {
                this[i].style[attr] = config[attr];
            }
        }

        //链式操作
        return this;
    }

    JQuery.prototype.get = function (num) {
        // if (num == null) {
        //     return [].slice.call(this, 0);
        // }else{
        //     if(num >= 0) {
        //         return this[num];
        //     }else {
        //         return this[num + this.length]
        //     }
        // }

        return num != null ? (num >= 0 ? this[num] : this[num + this.length]) : [].slice.call(this, 0);
    }

    JQuery.prototype.init.prototype = JQuery.prototype;

    window.$ = window.JQuery = JQuery;
}())