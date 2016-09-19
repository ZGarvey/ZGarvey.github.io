/**
 * Created by Administrator on 2016/9/18.
 */

window.onload = function () {

    var allimg = document.getElementById('allimg').getElementsByTagName('p');

    var box = document.getElementById('box');

    var xy = document.getElementById('xy');

    var sy = document.getElementById('sy');

    var timer; //时间
    var index = 0; //下标
    function damo() {
        timer = setInterval(function () { //定时轮播

            index++;
            if (index == allimg.length - 5) {
                index =1;
                box.style.left=0;

            }
            startMove(box, {left: -407 * index});

        }, 3000);

    }

    damo();
    //////////
    for (var j = 0; j < allimg.length - 6; j++) {
        allimg[j].num = j;

        allimg[j].onmouseout = function () { // 鼠标离开
            this.className = 'b-img' + this.num;
            damo();
        };

        allimg[j].onmouseover = function () { //鼠标移上
            clearInterval(timer);
            this.className = 'bb-img' + this.num;

        };
    }

    //下页点击
    xy.onclick = function () {//点击事件

        index--;
        if (index == -1) {
            index = allimg.length - 6;
            box.style.left=-407 * index+'px';
            index=index-1;

        }
        startMove(box, {left: -407 * index});

    };
    sy.onclick = function () {//点击事件
        clearInterval(timer);
        index++;
        if (index == allimg.length - 5) {
            index =1;
            box.style.left=0;
        }
        startMove(box, {left: -407 * index});

    };
    xy.onmouseover = sy.onmouseover = function () {//鼠标移上停止轮播
        clearInterval(timer);

    };
    xy.onmouseout = sy.onmouseout = function () {//鼠标离开重启轮播
        damo();
    };


///////第二个轮播
    var bxy = document.getElementById('bxy');
    var bsy = document.getElementById('bsy');
    var box2 = document.getElementById('box2');
    var allbox2 = box2.getElementsByTagName('div');
    var sum = 0;
    bxy.onclick = function () {
        sum--;
        if (sum == -1) {
            sum = allbox2.length - 1;
            box2.style.left=-604 * sum+'px';
            sum=sum-1;
        }
        startMove(box2, {left: -604 * sum});

    };
    bsy.onclick = function () {
        sum++;
        if (sum == allbox2.length) {
            sum = 1;
            box2.style.left=0;
        }
        startMove(box2, {left: -604 * sum});
    };


    // 第三个轮播
    var exy = document.getElementById('exy');
    var esy = document.getElementById('esy');
    var allbox3 = document.getElementsByClassName('allbox3');
    var box3 = document.getElementById('box3');
    var pimg = box3.getElementsByTagName('p');
    var lb = 0;
    var sur = 0;
    var timer2;
    exy.onclick = function () {
        sur--;
        if (sur == -1) {
            sur = allbox3.length - 1;
            box3.style.left=-886 * sur+'px';
            sur=sur-1;
        }
        startMove(box3, {left: -886 * sur});
    };
    esy.onclick = function () {
        sur++;
        if (sur == allbox3.length) {
            sur = 1;
            box3.style.left=0;
        }
        startMove(box3, {left: -886 * sur});
    };
    // 鼠标移上停止轮播
    exy.onmouseover = esy.onmouseover = function () {
        clearInterval(timer2);

    };
    exy.onmouseout = esy.onmouseout = function () {
        show();

    };

    show();
    //box3定时轮播,封装
    function show() {

        timer2 = setInterval(function () {

            lb++;
            if (lb == allbox3.length) {
                lb = 1;
                box3.style.left=0;

            }
            startMove(box3, {left: -886 * lb});


        }, 3000);

    }

// 鼠标移上图片的时候停止轮播
    for (var i = 0; i < pimg.length; i++) {
        pimg[i].num = i;

        pimg[i].onmouseover = function () {
            clearInterval(timer2);
        };
// 移开重启
        pimg[i].onmouseout = function () {
            show();
        }
    }


// 运动框架

    function $(id) {
        return document.getElementById(id);
    }

    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, null)[attr];
        }
    }

    function startMove(obj, args, fu) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var i in args) {
                if (i == 'opacity') {
                    var sur = getStyle(obj, i) * 100;
                } else {
                    var sur = parseInt(getStyle(obj, i));
                }
                var speed = (args[i] - sur) / 6;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (args[i] != sur) {
                    if (i == 'opacity') {
                        obj.style.opacity = (sur + speed) / 100;
                        obj.style.filter = 'alpha(opacity=' + (sur + speed) + ')';
                    } else {
                        obj.style[i] = sur + speed + 'px';
                    }
                    flag = false;
                }
            }
            if (flag == true) {
                clearInterval(obj.timer);
                if (fu) {
                    fu();
                }
            }
        }, 30)
    }

};