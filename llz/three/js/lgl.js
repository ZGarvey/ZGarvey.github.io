/**
 * Created by Administrator on 2016/9/17.
 */
window.onload=function(){

    var box =document.getElementById('lglRBox');
    var dl =box.getElementsByTagName('dl');
    var lt =document.getElementById('lt');
    var gt =document.getElementById('gt');

    var index =0;
    var time;
    //定时器
    function sport(){
        clearInterval(time);
        time =setInterval(function(){
            index++;
            if(index == dl.length){
                index =1;
                box.style.left = 0;
            }
            mySport(box,{left:-index*880});
            // box.style.left = -index * 880 +'px';

        },3000);
    }
    sport();

    lt.onclick=function(){
        clearInterval(time);
        index--;
        if(index==-1){
            index = dl.length -1;
            box.style.left = -index*880+'px';
            index = dl.length -2;
        }
        mySport(box,{left:-index*880});
        setTimeout(sport(),10000);
    };
    gt.onclick=function(){
        clearInterval(time);
        index++;
        if(index==dl.length){
            index =1;
            box.style.left = 0 ;
        }
        mySport(box,{left:-index*880});
        setTimeout(sport(),10000);
    };

//运动样式
};
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