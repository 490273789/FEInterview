Function.prototype.myCall = function () {
  // 通过arugments对象，我们能拿到所有实参
  const params = [...arguments];
  const args = params.slice(1);
  let thisArg = params[0];
  // 判断是不是严格模式
  let isStrict = (function () {
    return this === undefined;
  })();
  if (!isStrict) {
    // 如果是其他原始值，需要通过构造函数包装成对象
    const thisArgType = typeof thisArg;
    if (thisArgType === "number") {
      thisArg = new Number(thisArg);
    } else if (thisArgType === "string") {
      thisArg = new String(thisArg);
    } else if (thisArgType === "boolean") {
      thisArg = new Boolean(thisArg);
    }
  }
  // 第一参数值为undefined或null，被调用函数按普通函数形式调用
  if (thisArg === undefined || thisArg === null) {
    return this(...args);
  }
  // 创建一个全局唯一属性 fn
  const fn = Symbol(thisArg);
  // 改变被调用函数的 this 指向到 thisArg 上
  thisArg[fn] = this;
  // 返回目标函数执行的结果
  thisArg[fn](...args);
};
Function.prototype.myApply = function () {
  const params = [...arguments];
  const args = params[1];
  let thisArg = params[0];
  let isStrict = (function () {
    return this === undefined;
  })();
  if (!isStrict) {
    const thisArgType = typeof thisArg;
    if (thisArgType === "number") {
      thisArg = new Number(thisArg);
    } else if (thisArgType === "string") {
      thisArg = new String(thisArg);
    } else if (thisArgType === "boolean") {
      thisArg = new Boolean(thisArg);
    }
  }
  if (thisArg === undefined || thisArg === null) {
    return args ? this(...args) : this();
  }
  const fn = Symbol(thisArg);
  thisArg[fn] = this;
  args ? thisArg[fn](...args) : thisArg[fn]();
};
Function.prototype.myBind = function () {
  const params = [...arguments];
  const args = params.slice(1);
  let thisArg = params[0];
  let isStrict = (function () {
    return this === undefined;
  })();
  if (!isStrict) {
    const thisArgType = typeof thisArg;
    if (thisArgType === "number") {
      thisArg = new Number(thisArg);
    } else if (thisArgType === "string") {
      thisArg = new String(thisArg);
    } else if (thisArgType === "boolean") {
      thisArg = new Boolean(thisArg);
    }
  }
  if (thisArg === undefined || thisArg === null) {
    const _this = this;
    return function () {
      _this(...args);
    };
  }
  const fn = Symbol(thisArg);
  thisArg[fn] = this;
  return function () {
    thisArg[fn](...args);
  };
};
