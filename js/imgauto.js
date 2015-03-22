
$(function(){
    setTimeout(function(){
        var img = $(".autoImg");
        var imgW = img.width();
        var imgH = img.height();
        var imgB = imgW / imgH;//图片的宽高比例
        //alert(imgH);
        function resizeimg(){
            var winW = $(window).width();
            var winH = $(window).height();
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
        resizeimg();
    },200);
    $(window).resize(function(){
        resizeimg();
    });
    window.onresize=function(){
        location.reload();
    };
});