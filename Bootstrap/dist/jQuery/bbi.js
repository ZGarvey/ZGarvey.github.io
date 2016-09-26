/**
 * Created by Administrator on 2016/9/10.
 */
// $(function () {
//     $(".ding").click(function () {
//         $('html,body').animate({scrollTop:0},500);
//     });
//
//
//     $(window).scroll(function () {
//         if($(this).scrollTop()>=300){
//             $(".ding").animate({bottom:100},500)
//         }else{
//             $(".ding").stop(true,false).animate({bottom:-100},500)
//         }
//     })
// })


$(function () {
    $(".ding").click(function () {
        $('html,body').animate({scrollTop:0},500);
    })
    $(window).scroll(function () {
        if($(this).scrollTop() >= 300){
            $(".ding").animate({bottom:100},500)
        }else{
            $(".ding").stop(true,false).animate({bottom:-100},500)
        }
    })
})