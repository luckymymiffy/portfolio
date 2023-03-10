  $(function(){

    var now = 0; //현재 보고 있는 페이지
    var want; //보고자 하는 페이지
    var now_stop = true; //에니메이션이 멈춘 상태인지
    $(window).on('mousewheel',function(e){

        if(now_stop){ //에니메이션이 끝나야 실행
            if( e.originalEvent.deltaY > 0 ){ //마우스 휠을 내렸을 때
                if(now < 4){ //마지막 페이지가 아닌 경우
                    want = now + 1;
                    //현재 보고 있는 페이지를 위로 올림
                    now_stop = false;
                    $('section').eq(now).stop(true,true).animate({top:'-100%'},500);
                    $('section').eq(want).stop(true,true).animate({
                        top:0
                    }, 500, function(){
                        $('.bg_wrap').removeClass('on');
                        $('section').eq(want).find('.bg_wrap').addClass('on');
                        now = want;
                        now_stop = true;
                    });
                } // if(now < 4)
            } else { //마우스 휠을 올렸을 때
                if(now > 0){ //첫 페이지가 아닌 경우
                    want = now - 1;
                    //현재 보고 있는 페이지를 아래로 내림
                    now_stop = false;
                    $('section').eq(now).stop(true,true).animate({top:'100%'},500);
                    $('section').eq(want).stop(true,true).animate({
                        top:0
                    }, 500, function(){
                        $('.bg_wrap').removeClass('on');
                        $('section').eq(want).find('.bg_wrap').addClass('on');
                        now = want;
                        now_stop = true;
                    });
                } // if(now < 4)
            } // if(e.originalEvent.deltaY > 0) else
        } // if(now_stop)
    });


    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });


}); //제이퀴리 레디 끝

