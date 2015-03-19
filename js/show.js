 $(document).ready(function(){
    $mask = $('.mask');
    $footer = $('.footer');
    var $window = $(window),
        $W_width = $window.width(),
        $content=$('.content'),
        $wallpaper = $('.wallpaper'),
        $wall_page = $wallpaper.find('.wall_page'),
        $dot =$('.dot_list'),
        li_Nun =$dot.find('li').length,
        top_n = 0;
     if($W_width>1190 && $W_width < 1500){
         $('body').addClass('mid');
     }
    $content.on('mousewheel',function(a,b){
        if(!$wallpaper.is(':animated')){
            if(top_n < 0 && top_n > -($wall_page.length-1) || top_n == 0 && b == -1 || top_n == -($wall_page.length-1) && b == 1){
                top_n += b>0?1:-1;
                $wallpaper.animate({
                    'top':top_n*$window.height()
                },800);
                $dot.find('li').eq(-top_n).addClass('current').siblings().removeClass('current');
                $wall_page.eq(-top_n).addClass('current').siblings().removeClass('current');
                if($dot.find('li').eq(3).hasClass('current')){
                    $('.four .img').stop().animate({
                        'opacity': 1,
                        'left':150,
                        'bottom': 10
                    },1500);
                } else {
                    $('.four .img').stop().animate({
                        'opacity': 0,
                        'left': 140,
                        'bottom': -10
                    }, 800);
                }
                if($wall_page.hasClass('current')){
                    var src = $wall_page.eq(-top_n).find('.img img').attr('data-url');
                    $wall_page.eq(-top_n).find('.img img').attr('src',src);
                }
            }
        }
    });
    $dot.find('li').click(function(){
        var now =$(this).index();
        top_n += -now;
        $wallpaper.animate({
            'top':-now*$window.height()
        },800);
        $(this).addClass('current').siblings().removeClass('current');
        if($dot.find('li').eq(3).hasClass('current')){
            $('.four .img').stop().animate({
                'opacity': 1,
                'left': 150,
                'bottom': 10
            },1500);
        } else {
            $('.four .img').stop().animate({
                'opacity': 0,
                'left': 140,
                'bottom': -10
            }, 800);
        }
    });
    $wall_page.height($window.height());
    $window.resize(function(){
        $wall_page.height($window.height());
        $wallpaper.stop().animate({
            'top':top_n*$window.height()
        },800);
        window.location.reload();
    });
    $('.contact').click(function(){
       $mask.show().animate({
           'opacity':0.5
       },400);
       $footer.stop().animate({
           'bottom':0
       },400);
    });
    $mask.click(function(){
       $footer.stop().animate({
           'bottom':-100
       },400,function(){
            $mask.animate({
               'opacity':0
            },400,function(){
                $mask.hide();
            });
       });
       $('.code').removeClass('current');
       $('.code_img').css('opacity',0);
    });
    $('.code').click(function(){
        if($(this).hasClass('current')){
            $(this).removeClass('current');
            $(this).find('.code_img').hide().animate({
                'opacity':0
            },400);
        }else{
            $(this).addClass('current');
            $(this).find('.code_img').fadeIn().animate({
                'opacity':1
            },400);
        }
    });
});