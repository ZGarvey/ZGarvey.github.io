/**
 * Created by Administrator on 2016/9/23.
 */
$(function () {
    $(".dong-tu li").hover(function () {

        //当鼠标移入第一个 li 的时候使他的背景图片换成 Y值是 -24的那张图， 同时使他同级兄弟 siblings的li 不跟着一起换，也得设置等于原来的值
        $(this).stop().animate({backgroundPositionY:-24},200).siblings().stop().animate({backgroundPositionY:5},200);
        var index = $(this).index();
        if(index ==1){
            $('.wei-ma').css('display','block');
        }else{
            $('.wei-ma').css('display','none');
        }
    },function () {
        $(".dong-tu li").stop().animate({backgroundPositionY:5},200);
        $('.wei-ma').css('display','none');
    });

    $('.gu-ding li').hover(function () {
        $(this).stop().animate({backgroundPositionY:-51},200).siblings().stop().animate({backgroundPositionY:0},200);
    },function () {
        $('.gu-ding li').stop().animate({backgroundPositionY:0},200);
    });

    $('.fan-hui').click(function () {      //给 fan-hui 添加点击事件
        $("html,body").stop().animate({scrollTop:0},1000);      //当点击 fan-hui 就会以动画效果回到顶部
    });


    var two;
    var index = 0;

     function show(){
    two = setInterval(function () {

        index++;
        if(index == 6){
            index=0;
        }
        console.log(index);
        $('.img-one li').eq(index).stop().fadeIn().siblings().stop().fadeOut();   //eq（index1）表示第二个 li
        $('.dian-two li').eq(index).addClass('hei').siblings().removeClass('hei');
         },2000);
     };
    show();

    $('.dian-two li').click(function () {
        clearInterval(two);
        index = $(this).index();
        $('.img-one li').eq(index).stop().fadeIn().siblings().stop().fadeOut();
        $('.dian-two li').eq(index).addClass('hei').siblings().removeClass('hei');
        

    });

    $('.dian-two li').mouseleave(function () {
        show()
    })

        setTimeout(function () {
            $('.ding-one').stop().slideDown()
        },1000)




    })