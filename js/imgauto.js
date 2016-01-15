/**
 * Created with JetBrains WebStorm.
 * User: zhaoyang
 * Date: 13-11-11
 * Time: 下午2:27
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    var img = $(".autoImg");
    var imgW = img.width();
    var imgH = img.height();
    var imgB = imgW / imgH;//图片的宽高比例
    function resizeImg(){
        console.log(imgW);
        imgW = img.width();
        imgH = img.height();
        imgB = imgW / imgH;//图片的宽高比例
        var winW = parseInt($(window).width());
        var winH = parseInt($(window).height());
        var winB = winW / winH;//浏览器窗口的宽高比例
        if(winB > imgB){//如果窗口的宽高比大于图片的宽高比，那么图片的宽按照窗口的计算
            var newH = parseInt(winW/imgW * imgH);
            var imgTop = parseInt((winH - newH)/2);
            img.css({
                "width" : winW + "px",
                "height" : newH + "px",
                "top" :  imgTop + "px",
                "left" : ""
            });
        }
        if(winB < imgB){//如果窗口的宽高比小于图片的宽高比，则以窗口的高为基准
            var newW = parseInt(winH/imgH * imgW);
            var imgLeft = parseInt((winW - newW)/2);
            img.css({
                "width" : newW + "px",
                "height" : winH + "px",
                "top" : "",
                "left" : imgLeft + "px"
            });
        }
    }
    img.load(function(){
        resizeImg();
    });
    $(window).resize(function(){
        resizeImg();
    });
});