$(document).ready(function(){
    var winH = $(window).innerHeight();
    var mainH = $('#main').innerHeight();
    var loginH = $('#login').innerHeight();

    if(winH < mainH || winH < loginH) {
        $('.fix_area').addClass('no_fix');
    }else{
        $('.fix_area').removeClass('no_fix');
    }



    var pop = $('.pop1');
    var p_h1 = $('.pop .p_h1');
    var p_sub = $('.pop .p_sub');
    var p_btn = $('.pop .p_btn');

    var span = "<span class='bold'>"
    var span2 = "</span>"

    $('.login_btn').click(function(){
        var name = $('#login #user_name').val();
        var line_num = $('#login #line_num').val();
        var man_num = $('#login #manage_num').val();

        if(!name) {
            pop.addClass('on');
            p_h1.text("로그인 실패");
            p_sub.html(span + "이름을 입력" + span2 + " 해주세요.");
            scrollLock();

        }else if(!line_num){
            pop.addClass('on');
            p_h1.text("로그인 실패");
            p_sub.html(span + "회선 번호를 입력" + span2 + " 해주세요.");
            scrollLock();
        }else{
            location.href='index.php';
        }
    });


    p_btn.click(function(){
        $('.pop').removeClass('on');
        scrollAuto();
    });

    $('.pop .black_bg').click(function(){
        $('.pop').removeClass('on');
        scrollAuto();
    });

    $('.pop .close_btn').click(function(){
        $('.pop').removeClass('on');
        scrollAuto();
    });


    $('#main .autoset').click(function(){
        if($(this).hasClass('auto')){
            location.href='sub1.php';

        }else if($(this).hasClass('autohalf')){
            location.href='sub2.php';
        }
    });


    $('.fix_area .btn_common').click(function(){
        if($(this).hasClass('play')){
            $('.btn_common').removeClass('on');
            $('.btn_common.stop').addClass('on');

        }else if($(this).hasClass('stop')){
            $('.btn_common').removeClass('on');
            $('.btn_common.play').addClass('on');
        }
    });


    $('.sub .note_btn').click(function(){
        $('.notepop').addClass('on');
        scrollLock();
    });


    $('.logout_btn').click(function(){
        location.href='login.php';
    });
});

function scrollLock(){
    $('html').addClass('scrollLock');
}
function scrollAuto(){
    $('html').removeClass('scrollLock');
}