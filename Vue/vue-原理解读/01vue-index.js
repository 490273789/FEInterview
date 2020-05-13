function VNode (dom, type, value) {
    this.dom = dom;
    this.type = type;
    this.value = value;
    this.childNodes = [];

    this.appendChild = function (vnode) {
        if (!(vnode instanceof VNode)) {
            throw new Error('vnode is not instanceof VNode')
        }
        this.childNodes.push(vnode);
    }
}

function buildVirtualNode (node) {
    var temp = new VNode(node, node.nodeType, node.nodeValue);
    for (let i = 0; i < node.childNodes.length; i++){
        // console.log("type:" + node.childNodes[i].nodeType)
        if(node.childNodes[i].nodeType == 1){//1 代表dom节点
            var child = buildVirtualNode.call(this,node.childNodes[i]);
            temp.appendChild(child);
        } else if(node.childNodes[i].nodeType == 3) {
            var arr = analysisTemplate(node.childNodes[i].nodeValue);
            console.log(arr);
            for (let j = 0; arr && j < arr.length; j ++ ) {
                if(this.mapping.get(arr[j])){
                    let templatesArr = this.mapping.get(arr[j]);
                    templatesArr.push(node.childNodes[i]);
                    this.mapping.set(arr[j], templatesArr)
                } else {
                    this.mapping.set(arr[i],[node.childNodes[i]])
                }
                
            }
            var child = buildVirtualNode.call(this,node.childNodes[i]);
            temp.appendChild(child);
        } else {
            continue;
        }
    }
    return temp;
}

function deepClone(data) {
    return JSON.parse(JSON.stringify(data));
}

function proxyObj(obj, newObj) {
    var self = this;
    console.log(this);
    for(let temp in obj) {
        if (obj[temp] instanceof Object) {
            porxyObj(obj[temp],newObj[temp]);
        }else{
            Object.defineProperty(obj, temp, {
                get:function(){
                    return newObj[temp];
                },
                set: function (value) {
                    newObj[temp] = value;
                    render(self.el, self.originTemplate, self.templates, self.data)
                }
            })
        }
    }
}

function analysisTemplate (data) {
    return data.match(/{{[a-zA-Z_]+[a-zA-Z0-9_]*}}/g);
}

function dropBorder (text) {
    return text.substring(2, text.length - 2);
}

function render (el, originTemplate, templates, data) {
    var result = originTemplate;
    for (var i = 0; i < templates.length; i++) {
        var tempValue = data[dropBorder(templates[i])];
        if (tempValue) {
            result = result.replace(templates[i],tempValue)
        }
    }
    el.innerHTML = result;
}

function myMVVM(id , data) {
    this.id = id;
    this.data = data;
    this.el = document.getElementById(this.id);
    this.originTemplate = this.el.innerHTML;
    this.templates = analysisTemplate(this.el.innerHTML);
    this.cloneObj = deepClone(this.data);
    this.mapping = new Map();
    proxyObj.call(this,this.data, this.cloneObj);
    
    this.VNodeRoot = buildVirtualNode.call(this,this.el);

    render(this.el, this.originTemplate, this.templates, this.data);
    
}