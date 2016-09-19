/**
 * Created by Administrator on 2016/9/18.
 */


window.onload = function () {

    //顶部大轮播图
    var lgBox= document.getElementById('lg-box');
    var dlBox = lgBox.getElementsByTagName('dl');
    var ha =document.getElementById('ha');

    var leftTu=document.getElementById('leftTu');
    var rightTu=document.getElementById('rightTu');


    var time1;
    var num=0;
    go();
    function go(){
        time1 =setInterval(function(){
            num++;
            if(num == dlBox.length){
                num=1;
                lgBox.style.left = 0;
            }
            mySport(lgBox,{left:-num*1200});

        },3000);

    }
    ha.onmouseover=function(){
        clearInterval(time1);
    };
    ha.onmouseout=function(){
        go();
    };

    // 按钮点击事件

    leftTu.onclick =function(){
        num--;
        if(num==-1){
            num=dlBox.length-1;
            lgBox.style.left=-num*1200+'px';
            num=dlBox.length-2;
        }
        mySport(lgBox,{left:-num*1200});
    };

    rightTu.onmouseover= leftTu.onmouseover=function(){
        clearInterval(time1);
    };
    rightTu.onmouseout= leftTu.onmouseout=function(){
        go();
    };

    rightTu.onclick=function(){
        num++;
        if(num==dlBox.length){
            num=1;
            lgBox.style.left = 0;
        }
        mySport(lgBox,{left:-num*1200});
    };



//xx事件
    var qgb = document.getElementById('qgb');
    var gbi = document.getElementById('gbi');

    gbi.onclick = function () {
        qgb.style.display = 'none';
    };

    gbi.onclick = function () {
        qgb.style.display = 'none';
    };

    //Store Featured Items,li头上的左右页点击事件
    var index=0;
    var ul1=document.getElementById('zx');
    var li1 = ul1.getElementsByTagName('li');
    var lt = document.getElementById('xzuo');
    var gt =document.getElementById('xyou');
    lt.onclick=function(){
        index--;
        if(index == -1){
            index =(li1.length/2)-1;
        }
        ul1.style.left = -index*300+'px';
    };
    gt.onclick=function(){
        index++;
        if(index == li1.length/2){
            index =0;
        }
        ul1.style.left = -index*301+'px';
    };
    

    var hou = document.getElementById('hou').getElementsByTagName('li');

    for (var i = 0; i < hou.length; i++) {
        console.log(hou[i]);
        var dl = hou[i].getElementsByTagName('dl')[0];
        dl.onmouseover = function () {
            mySport(this,{marginTop:0});
           // this.style.marginTop = '0'
        };
        dl.onmouseout = function () {
            mySport(this,{marginTop:170});
           // this.style.marginTop = '170px'
        }
    }

///////////////////////////////////////////////////////////
    var meiTop = document.getElementById('mei-top');
    var foor = document.getElementById('mei-middle');
    var  meiMiddle = foor.getElementsByTagName('div');
    var meiBottom = document.getElementById('mei-bottom');

    var index = 0;
    meiBottom.onclick = function () {
        index++;
        if(index == meiMiddle.length){
            index=1;
            foor.style.marginTop = 0;
        }
        mySport(foor,{marginTop :-172*index});
        // foor.style.marginTop = -172*index+'px'
    };
    console.log(meiMiddle.length);

    meiTop.onclick = function () {
        index--;
        if(index == -1){
            index = meiMiddle.length-1;
            foor.style.marginTop = -172*index+'px';
            index = meiMiddle.length-2;
        }
        mySport(foor,{marginTop :-172*index});
        // foor.style.marginTop = -172*index+'px'
    }

    ////////////////////////////////////////////////////////////

    function getStyle(obj,attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }else{
            return getComputedStyle(obj,null)[attr];
        }
    }

    function mySport(obj,attr,fn){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var falg = true;
            for(var i in attr){
                var cur;
                if(i=='opacity'){
                    cur = getStyle(obj,i)*100;
                }else{
                    cur = parseInt(getStyle(obj,i));
                }

                var speed =(attr[i]-cur)/6;
                speed =speed>0?Math.ceil(speed):Math.floor(speed);
                if(cur != attr[i]){
                    if(i=='opactiy'){
                        obj.style[i]= (speed + cur)/100;
                        obj.style.filter= 'alpha(opacity='+(speed+cur)+')';
                    }else{
                        obj.style[i]= speed +cur+'px';
                    }
                    falg =false;
                }
            }
            if(falg == true){
                clearInterval(obj.time);
            }
            if(fn){
                fn();
            }
        },30)
    }


}














