


function ajax(method, url, callback, data, flag) {
    var xhr = null;
    if(window.XMLHttpRequest) {
        xhr =  new XMLHttpRequest();
    }else {
        xhr = new ActiveXObject('Microsoft.XMLHttp')
    }
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                callback(xhr.responseText);
            }else {
                console.log('error');
            }
        }
    }
    method = method.toUpperCase();
    if(method == 'GET') {
        var date = new Date(),
            timer = date.getTime();
        xhr.open(method, url + '?' + data + '&timer=' + timer, flag);
        xhr.send();
    }else if(method == 'POST') {
        xhr.open(method, url, flag);
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(data);
    }
}



var oSubmit = document.getElementById('submit'),
    oBtn = document.getElementById('getNews');

oSubmit.onclick = function (e) {
    e.preventDefault();
    var oUsername = document.getElementById('username'),
        oAge = document.getElementById('age'),
        str = oUsername.name + '=' + oUsername.value + '&' + oAge.name + '=' + oAge.value;
    ajax('post', './post.php', showPerson, str, true);
}
oBtn.onclick = function () {
    ajax('get', './getNews.php', getNews, '', true);
}

function getNews(data) {
    var value = JSON.parse(data),
        oNewsList = document.getElementById('newsList'),
        htmlStr = '';
    oNewsList.innerHTML = '';
    value.forEach(function (ele, index) {
        htmlStr += '<li><a href="#">' + ele.title + ' [' + ele.date + ']</a></li>'
    })
    oNewsList.innerHTML = htmlStr;
}
function showPerson(data) {
    alert(data)
}

