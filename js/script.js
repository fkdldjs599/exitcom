$(document).ready(function(){

    var leftH = $('.left_menu').innerHeight();

    var rightH = $('.right_ct').innerHeight();

    

    if(leftH < rightH) {

        $('.left_menu').css({'height': rightH + 'px'});

    }else{

        $('.right_ct').css({'height': leftH + 'px'});

    }





    $('.pop .black_bg').click(function(){

      if($('.pop').hasClass('go_login')){

        location.href='login.html';

        scrollAuto();



      }else if($('.pop').hasClass('blacklist_reset')){

        $('.blacklist .f_btn').removeClass('on');

        $('.blacklist .add').addClass('on');

        $('.blacklist #black_num').val("");

        $('.pop').removeClass('on');

        scrollAuto();

      

      }else if($('.pop').hasClass('ck_remove')){

        $('.pop').removeClass('on');

        $('#line_manage .line:checked').prop('checked', false);

        $('#line_manage #all_ck').prop('checked', false);



        $('#record_manage .line:checked').prop('checked', false);

        $('#record_manage #all_ck').prop('checked', false);

        scrollAuto();



      }else if($('.pop').hasClass('rc_return')){

        //녹취파일 업로드실패 일때 다시 녹취업로드 팝업으로감

        $('.pop').removeClass('on');

        $('.pop').removeClass('rc_return');

        $('.rc_pop.new').addClass('on');

        scrollLock();



      }else if($('.pop').hasClass('rc_return2')){

        //녹취파일 수정실패 일때 다시 녹취수정 팝업으로감

        $('.pop').removeClass('on');

        $('.pop').removeClass('rc_return2');

        $('.rc_pop.edit').addClass('on');

        scrollLock();



      }else{

        $('.pop').removeClass('on');

        scrollAuto();

      }





    });

    $('.pop .close_btn').click(function(){

      if($('.pop').hasClass('go_login')){

        location.href='login.html';

        scrollAuto();



      }else if($('.pop').hasClass('blacklist_reset')){

        $('.blacklist .f_btn').removeClass('on');

        $('.blacklist .add').addClass('on');

        $('.blacklist #black_num').val("");

        $('.pop').removeClass('on');

        scrollAuto();

      

      }else if($('.pop').hasClass('ck_remove')){

        $('.pop').removeClass('on');

        $('#line_manage .line:checked').prop('checked', false);

        $('#line_manage #all_ck').prop('checked', false);



        $('#record_manage .line:checked').prop('checked', false);

        $('#record_manage #all_ck').prop('checked', false);

        scrollAuto();



      }else if($('.pop').hasClass('rc_return')){

        //녹취파일 업로드실패 일때 다시 녹취업로드 팝업으로감

        $('.pop').removeClass('on');

        $('.pop').removeClass('rc_return');

        $('.rc_pop.new').addClass('on');

        scrollLock();



      }else if($('.pop').hasClass('rc_return2')){

        //녹취파일 수정실패 일때 다시 녹취수정 팝업으로감

        $('.pop').removeClass('on');

        $('.pop').removeClass('rc_return2');

        $('.rc_pop.edit').addClass('on');

        scrollLock();



      }else{

        $('.pop').removeClass('on');

        scrollAuto();

      }



    });

    $('.pop .p_btn').click(function(){

      if($('.pop').hasClass('go_login')){

        location.href='login.html';

        scrollAuto();



      }else if($('.pop').hasClass('blacklist_reset')){

        $('.blacklist .f_btn').removeClass('on');

        $('.blacklist .add').addClass('on');

        $('.blacklist #black_num').val("");

        $('.pop').removeClass('on');

        scrollAuto();

      

      }else if($('.pop').hasClass('ck_remove')){

        $('.pop').removeClass('on');

        $('#line_manage .line:checked').prop('checked', false);

        $('#line_manage #all_ck').prop('checked', false);



        $('#record_manage .line:checked').prop('checked', false);

        $('#record_manage #all_ck').prop('checked', false);

        scrollAuto();



      }else if($('.pop').hasClass('rc_return')){

        //녹취파일 업로드실패 일때 다시 녹취업로드 팝업으로감

        $('.pop').removeClass('on');

        $('.pop').removeClass('rc_return');

        $('.rc_pop.new').addClass('on');

        scrollLock();



      }else if($('.pop').hasClass('rc_return2')){

        //녹취파일 수정실패 일때 다시 녹취수정 팝업으로감

        $('.pop').removeClass('on');

        $('.pop').removeClass('rc_return2');

        $('.rc_pop.edit').addClass('on');

        scrollLock();



      }else{

        $('.pop').removeClass('on');

        scrollAuto();

      }



    });

    $('.pop .p_btns.btn1').click(function(){

      $('.pop').removeClass('on');



      scrollAuto();

    });





    $('#status #group').change(function(){

        if($(this).val() != 'default'){

            $(this).addClass('black');

        }else{

            $(this).removeClass('black');

        }

    });



    //index.html

    var progress = 30; //진척도

    var gp_time = 20 * progress



    $('#status .color_bar').stop().animate({'width': progress + '%'}, gp_time);

    var start_num = 0;



    counterFn();



    function counterFn() {

        start_num = setInterval(count0Fn, 20);



      function count0Fn() {

        start_num++;

        if (start_num > progress) {

          clearInterval(start_num);



        } else {

          $("#status .status .num").text(start_num);

        }

      }

    }





    $('#status .s_btns').click(function(){

      $('#status .s_btns').removeClass('on');



      if($(this).hasClass('play')){

          $('#status .stop').addClass('on');

      }else{

          $('#status .play').addClass('on');

      }

    });



    $('.left_menu .inq_btn').click(function(){

      $('.inqpop').addClass('on');



      scrollLock();

    });



    var p1 = $('.pop1');

    var p1_h1 = $('.pop1 .p_h1');

    var p1_sub = $('.pop1 .p_sub');

    var p1_blue = $('.pop1 .p_blue');



    var p2 = $('.pop2');

    var p2_h1 = $('.pop2 .p_h1');

    var p2_sub = $('.pop2 .p_sub');

    var p2_btn2 = $('.pop2 .btn2');



    var span = '<span class="bold">';

    var span2 = '</span>';





    p2_btn2.click(function(){

      var title = p2_h1.text();



      p2.removeClass('on');



      if(title == "회선 번호 추가 확인")

      {

        p1.addClass('on');

        p1_h1.text("회선 번호 추가 완료");

        p1_sub.html( span + "회선 번호가 추가" + span2 + " 되었습니다.");

      }

      else if(title == "로그아웃 확인"){

        p1.addClass('on');

        p1.addClass('go_login');

        p1_h1.text("로그아웃 완료");

        p1_sub.html( span + "성공적으로 로그아웃" + span2 + " 하였습니다.");

      }

      else if(title == "회선 번호 삭제 확인"){

        p1.addClass('on');

        p1.addClass('ck_remove');

        p1_h1.text("회선 번호 삭제 완료");

        p1_sub.html( span + "선택한 회선 번호가 삭제" + span2 + " 되었습니다.");

      }

      else if(title == "프로젝트 설정 저장 확인"){

        p1.addClass('on');

        p1_h1.text("프로젝트 설정 저장 완료");

        p1_sub.html( span + "선택한 프로젝트 설정이 저장" + span2 + " 되었습니다.");

      }

      else if(title == "프로젝트 설정 제거 확인"){

        p1.addClass('on');

        p1_h1.text("프로젝트 설정 제거 완료");

        p1_sub.html( span + "선택한 프로젝트 설정이 제거" + span2 + " 되었습니다.");

      }

      else if(title == "프로젝트 관리 설정 저장 확인"){

        p1.addClass('on');

        p1_h1.text("프로젝트 관리 설정 저장 완료");

        p1_sub.html( span + "프로젝트 관리 설정이 저장" + span2 + " 되었습니다.");

      }

      else if(title == "연결 DB 삭제 확인"){

        p1.addClass('on');

        p1_h1.text("연결 DB 삭제 완료");

        p1_sub.html( span + "연결된 DB의 삭제가 완료" + span2 + " 되었습니다.");

      }

      else if(title == "블랙리스트 등록 확인"){

        p1.addClass('on');

        p1_h1.text("블랙리스트 등록 완료");

        p1_sub.html( span + "입력한 블랙리스트 번호의 등록이 완료" + span2 + " 되었습니다.");

      }

      else if(title == "블랙리스트 수정 확인"){

        p1.addClass('on');

        p1.addClass('blacklist_reset');

        p1_h1.text("블랙리스트 수정 완료");

        p1_sub.html( span + "입력한 블랙리스트 번호의 수정이 완료" + span2 + " 되었습니다.");

      }

      else if(title == "블랙리스트 삭제 확인"){

        p1.addClass('on');

        p1.addClass('blacklist_reset');

        p1_h1.text("블랙리스트 삭제 완료");

        p1_sub.html( span + "선택한 블랙리스트 번호의 삭제가 완료" + span2 + " 되었습니다.");

      }

      else if(title == "프로젝트 관리 설정 삭제 확인"){

        p1.addClass('on');

        p1_h1.text("프로젝트 관리 설정 삭제 완료");

        p1_sub.html( span + "프로젝트 관리 설정 삭제가 완료" + span2 + " 되었습니다.");

      }

      else if(title == "녹취파일 업로드 확인"){

        p1.addClass('on');

        p1_h1.text("녹취파일 업로드 완료");

        p1_sub.html( span + "선택한 녹취파일의 업로드가 완료" + span2 + " 되었습니다.");



        //녹취파일 업로드팝업 리셋

        $('.rc_pop.new #project').val("default");

        $('.rc_pop.new #filename').val("");

      }

      else if(title == "녹취파일 삭제 확인"){

        p1.addClass('on');

        p1.addClass('ck_remove');

        p1_h1.text("녹취파일 삭제 완료");

        p1_sub.html( span + "선택한 녹취파일의 삭제가 완료" + span2 + " 되었습니다.");

      }

      else if(title == "녹취파일 수정 확인"){

        p1.addClass('on');

        p1.addClass('ck_remove');

        p1_h1.text("녹취파일 수정 완료");

        p1_sub.html( span + "선택한 녹취파일의 수정이 완료" + span2 + " 되었습니다.");

      }

      else if(title == "설정 적용 확인"){

        p1.addClass('on');

        p1_h1.text("설정 적용 완료");

        p1_sub.html( span + "입력한 설정의 적용이 완료" + span2 + " 되었습니다.");

      }

      else if(title == "설정 수정 확인"){

        p1.addClass('on');

        p1_h1.text("설정 적용 완료");

        p1_sub.html( span + "입력한 설정의 수정이 완료" + span2 + " 되었습니다.");

      }

      else if(title == "정보 저장 확인"){

        p1.addClass('on');

        p1_h1.text("정보 저장 완료");

        p1_sub.html( span + "입력한 정보 저장이 완료" + span2 + " 되었습니다.");

      }

      else if(title == "비밀번호 변경 확인"){

        p1.addClass('on');

        p1_h1.text("비밀번호 변경 완료");

        p1_sub.html( span + "입력한 비밀번호 변경이 완료" + span2 + " 되었습니다.");

      }

    });







    $('#add_number .blue_btn').click(function(){

      var name = $('#add_number #add_name').val(); //이름

      var num = $('#add_number #line_number').val(); //회선번호

      var man_num = $('#add_number #manage_number').val(); //관리자번호



      if(!name){

        p1.addClass('on');

        p1_h1.text("회선 번호 추가 실패");

        p1_sub.html( span + "이름" + span2 + " 을 입력해주세요.");

        scrollLock();



      }else if(!num){

        p1.addClass('on');

        p1_h1.text("회선 번호 추가 실패");

        p1_sub.html( span + "회선 번호" + span2 + " 를 입력해주세요.");

        scrollLock();



      }else if(!man_num){

        p1.addClass('on');

        p1_h1.text("회선 번호 추가 실패");

        p1_sub.html( span + "관리자 번호" + span2 + " 를 입력해주세요.");

        scrollLock();



      }else {

        p2.addClass('on');

        p2_h1.text("회선 번호 추가 확인");

        p2_sub.html( span + "회선 번호를 추가" + span2 + "하시겠습니까?");

        p2_btn2.text("추가");

        scrollLock();

      }

    });



    $('.logout_btn').click(function(){

        p2.addClass('on');

        p2_h1.text("로그아웃 확인");

        p2_sub.html( span + "로그아웃" + span2 + "하시겠습니까?");

        p2_btn2.text("로그아웃");

        scrollLock();

    });





    //로그인

    $('#login .link_btn').click(function(){

      if($(this).hasClass('btn1')) { //회원가입

        location.href='join.html';



      }else if($(this).hasClass('btn2')){ //문의하기

        $('.inqpop').addClass('on');

        scrollLock();

      }

    });



    //공지사항

    $('#notice tr').click(function(){

      if($(this).hasClass('first') == false){

        location.href='notice_sub.html';

      }

    });



    $('#notice .btn_common').click(function(){

      location.href='login.html';

    });



    $('#notice_sub .btn_common').click(function(){

      history.go(-1);

    });



    $('#login .form_btn').click(function(){

      var id = $('#login #user_id').val();

      var pw = $('#login #user_pw').val();



      if(!id){

        p1.addClass('on');

        p1_h1.text("로그인 실패");

        p1_sub.html( span + "아이디를 입력" + span2 + " 해주세요.");

        scrollLock();



      }else if(!pw){

        p1.addClass('on');

        p1_h1.text("로그인 실패");

        p1_sub.html( span + "비밀번호를 입력" + span2 + " 해주세요.");

        scrollLock();



      }else {



        //아이디 비밀번호 일치 안할때



        // p1.addClass('on');

        // p1_h1.text("로그인 실패");

        // p1_sub.html( span + "아이디와 비밀번호가 일치" + span2 + " 하지 않습니다.");

        // scrollLock();





        //승인 안됐을때



        // p1.addClass('on');

        // p1_h1.text("로그인 실패");

        // p1_sub.html( span + "승인처리가 완료" + span2 + " 되지 않았습니다.");

        // p1_blue.addClass('on');

        // p1_blue.html( span + "관리자의 승인 후 로그인" + span2 + " 할 수 있습니다.");

        // scrollLock2();



        location.href='index.html';

      }

    });





    //회원가입

    // $('#join .j_li').click(function(){

    //   $('#join .j_li').removeClass('on');

    //   $(this).addClass('on');



    //   $('#join .tab').removeClass('on');

    //   $('#join .tab').eq($(this).index()).addClass('on');

    // });



    $('#join #all_agree').change(function(){

      if($(this).is(":checked")){

        $('#join #term1').prop("checked", true);

        $('#join #term2').prop("checked", true);

        $('#join .next').prop('disabled', false);



      }else{

        $('#join #term1').prop("checked", false);

        $('#join #term2').prop("checked", false);

        $('#join .next').prop('disabled', true);



      }

    });



    $('#join #term1').change(function(){

      var terms = $('#join .term_wrap input[type="checkbox"]').length;

      var term_ck = $('#join .term_wrap input[type="checkbox"]:checked').length;



      if(terms == term_ck) {

        $('#join #all_agree').prop("checked", true);

        $('#join .next').prop('disabled', false);



      }else{

        $('#join #all_agree').prop("checked", false);

        $('#join .next').prop('disabled', true);



      }

    });



    $('#join #term2').change(function(){

      var terms = $('#join .term_wrap input[type="checkbox"]').length;

      var term_ck = $('#join .term_wrap input[type="checkbox"]:checked').length;



      if(terms == term_ck) {

        $('#join #all_agree').prop("checked", true);

        $('#join .next').prop('disabled', false);



      }else{

        $('#join #all_agree').prop("checked", false);

        $('#join .next').prop('disabled', true);

      }

    });





    $('#join .next').click(function(){

      $('#join .j_li').removeClass('on');

      $('#join .j_li').eq(1).addClass('on');



      $('#join .tab').removeClass('on');

      $('#join .tab2').addClass('on');

    });



    $('.check_id').each(function(data,index){

      $('.check_id').data("check", false);

    })



    $('.check_id').click(function(){ //아이디 중복확인

      //사용가능

      p1.addClass('on');

      p1_h1.text("아이디 중복확인 완료");

      p1_sub.html( span + "사용하실 수 있는 아이디" + span2 + " 입니다.");

      $(this).data("check", true);



      //사용할수 없을때

      // p1.addClass('on');

      // p1_h1.text("아이디 중복확인 실패");

      // p1_sub.html( span + "사용하실 수 없는 아이디" + span2 + " 입니다.");



      scrollLock();

    });





    $('.join_btn').click(function(){

      var id = $('#join #user_id').val();

      var pw = $('#join #user_pw').val();

      var pw2 = $('#join #user_pw2').val();

      var company = $('#join #company').val();

      var num = $('#join #phone').val();

      var fail_txt = "회원가입 실패"



      if(!id) {

        p1.addClass('on');

        p1_h1.text(fail_txt);

        p1_sub.html(span + "사용하실 아이디를 입력" + span2 + " 해주세요.");



      }else if($('.check_id').data("check") == false){

        p1.addClass('on');

        p1_h1.text(fail_txt);

        p1_sub.html(span + "아이디 중복확인" + span2 + " 을 해주세요.");



      }else if(!pw) {

        p1.addClass('on');

        p1_h1.text(fail_txt);

        p1_sub.html(span + "사용하실 비밀번호를 입력" + span2 + " 해주세요.");



      }else if(!pw2){

        p1.addClass('on');

        p1_h1.text(fail_txt);

        p1_sub.html(span + "사용하실 비밀번호를 다시 한번 입력" + span2 + " 해주세요.");

        

      }else if(pw != pw2){

        p1.addClass('on');

        p1_h1.text(fail_txt);

        p1_sub.html(span + "비밀번호가 일치" + span2 + " 하지 않습니다.");



      }else if(!company){

        p1.addClass('on');

        p1_h1.text(fail_txt);

        p1_sub.html(span + "이름(회사명)을 입력" + span2 + " 해주세요.");

        

      }else if(!num){

        p1.addClass('on');

        p1_h1.text(fail_txt);

        p1_sub.html(span + "전화번호를 입력" + span2 + " 해주세요.");

        

      }else{

        p1.addClass('on');

        p1.addClass('go_login');

        p1_h1.text('회원가입 완료');

        p1_sub.html(span + "회원가입이 완료" + span2 + " 되었습니다.");

        p1_blue.addClass('on');

        p1_blue.html(span + "관리자의 승인 후 로그인" + span2 + " 할 수 있습니다.")

      }



      scrollLock2();

    });







    //회선 관리

    var ckbox = $('.line_table .line');

    var ckbox_num = $('.line_table .line').length;

    

    $('.line_table #all_ck').change(function(){

      if($(this).is(":checked")){

        ckbox.prop("checked", true);

      }else{

        ckbox.prop("checked", false);

      }

    });



    ckbox.change(function(){

      var ckbox_ck = $('.line_table .line:checked').length;



      if(ckbox_num == ckbox_ck) {

        $('.line_table #all_ck').prop("checked", true);

      }else{

        $('.line_table #all_ck').prop("checked", false);

      }

    });





    $('#line_manage .open_listpop').click(function(){

        $('.listpop').addClass('on');

        scrollLock();

    });



    $('.line_del').click(function(){

        if($('.line:checked').length != 0){

            p2.addClass('on');

            p2_h1.text("회선 번호 삭제 확인");

            p2_sub.html( span + "선택한 회선 번호를 삭제" + span2 + "하시겠습니까?");

            p2_btn2.text("삭제");

            scrollLock();

        }

    });



    $('#line_manage #project').change(function(){

       if($(this).val() == "default"){

        $(this).removeClass('black');



       }else{

        $(this).addClass('black');

       }

    });



    $('.set_save').click(function(){

        if($(this).prev('.select').val() != "default"){

            p2.addClass('on');

            p2_h1.text("프로젝트 설정 저장 확인");

            p2_sub.html( span + "선택한 프로젝트 설정을 저장" + span2 + "하시겠습니까?");

            p2_btn2.text("저장");

            scrollLock();



        }else{

            p1.addClass('on');

            p1_h1.text("프로젝트 설정 저장 실패");

            p1_sub.html(span + "프로젝트를 선택" + span2 + " 해주세요.");

        }

    });



    $('.set_remove').click(function(){

        if($(this).prev('.select').val() != "default"){

            p2.addClass('on');

            p2_h1.text("프로젝트 설정 제거 확인");

            p2_sub.html( span + "선택한 프로젝트 설정을 제거" + span2 + "하시겠습니까?");

            p2_btn2.text("제거");

            scrollLock();



        }

    });



    //통화 내역

    $('.open_eachpop').click(function(){

      $('.eachpop').addClass('on');

      scrollLock();

    });

    $('#call_histroy .date_box .date').click(function(){

      $('.calpop').addClass('on');

      scrollLock();

    });

    $('.calpop .calendar .td').click(function(){

      if($(this).hasClass('gray') == false){

        $('.calpop .calendar .td').removeClass('on');

        $(this).addClass('on');

      }

    });



    $('#call_histroy .c_filter #project').change(function(){

      if($(this).val() == "default"){

        $(this).removeClass('black');

      }else{

        $(this).addClass('black');

      }

    });



    $('#call_histroy .c_filter .blue_btn').click(function(){

      if($('#project').val() == "default"){

        p1.addClass('on');

        p1_h1.text("통화 내역 검색 실패");

        p1_sub.html(span + "프로젝트를 선택" + span2 + " 해주세요.");

        scrollLock();

      }

    });



    $('.db_table .p_btn').click(function(){

      if($(this).hasClass('manage')){ //프로젝트 관리

        $('.propop').addClass('on');



      }else if($(this).hasClass('delete')){ //프로젝트 삭제

        p2.addClass('on');

        p2_h1.text("프로젝트 관리 설정 삭제 확인");

        p2_sub.html( span + "프로젝트 관리 설정을 삭제" + span2 + "하시겠습니까?");

        p2_btn2.text("삭제");

        scrollLock();

      }

    });



    $('.propop input[name="pj_auto"]').change(function(){

        if($('#auto_yes').is(":checked")){

            $('.propop .ifauto').addClass('on');



        }else if($('#auto_no').is(":checked")){

             $('.propop .ifauto').removeClass('on');

        }

    });



    $('.propop .p_btn').click(function(){

      if($(this).hasClass('manage')){

        p2.addClass('on');

        p2_h1.text("프로젝트 관리 설정 저장 확인");

        p2_sub.html( span + "프로젝트 관리 설정을 저장" + span2 + "하시겠습니까?");

        p2_btn2.text("저장");

        scrollLock();

      }

    });





    // $('#db_add .db_add').click(function(){

    //   if($('#db_add #new_project').val() == ""){

    //     p1.addClass('on');

    //     p1_h1.text("프로젝트 생성 실패");

    //     p1_sub.html(span + "프로젝트 이름을 입력" + span2 + " 해주세요.");

    //     scrollLock();

    //   }else{ //프로젝트 이름 입력하면

    //     $('#db_add #no').prop("checked", false);

    //     $('#db_add #yes').prop("checked", true);

    //     $('#db_add #new_project').val("");

    //   }

    // });



    $('.db_table .m_btn').click(function(){

      if($(this).hasClass('open_condb')){ //연결 DB 관리

        $('.condb').addClass('on');



      }else if($(this).hasClass('open_conline')){ //연결 회선 보기

        $('.conline').addClass('on');



      }else if($(this).hasClass('open_worklist')){ //작업내역 보기

        $('.worklist').addClass('on');

      }

    });



    $('.condb .db_btn').click(function(){

      if($(this).hasClass('del')){

        $('.condb').removeClass('on');

        p2.addClass('on');

        p2_h1.text("연결 DB 삭제 확인");

        p2_sub.html( span + "연결된 DB를 삭제" + span2 + "하시겠습니까?");

        p2_btn2.text("삭제");

        scrollLock();

      }

    });





    $('#db_manage .black_btn').click(function(){

      $('.blacklist').addClass('on');

    });



    $('.blacklist .sc_btn').click(function(){

      if($(this).hasClass('edit')){

        var val = $(this).parent('.sc3').siblings('.sc2').text();



        $('.blacklist #black_num').val(val);

        $('.blacklist .add_blacklist .f_btn').removeClass('on');

        $('.blacklist .add_blacklist .edit').addClass('on');



      }else if($(this).hasClass('del')){

        $('.blacklist').removeClass('on');

        p2.addClass('on');

        p2_h1.text("블랙리스트 삭제 확인");

        p2_sub.html( span + "선택한 블랙리스트 번호를 삭제" + span2 + "하시겠습니까?");

        p2_btn2.text("삭제");

        scrollLock();

      }

    });

    $('.blacklist .f_btn').click(function(){

      if($(this).hasClass('add')){

        if($('#black_num').val() != ""){

          $('.blacklist').removeClass('on');

          p2.addClass('on');

          p2_h1.text("블랙리스트 등록 확인");

          p2_sub.html( span + "입력한 블랙리스트 번호를 등록" + span2 + "하시겠습니까?");

          p2_btn2.text("등록");

          scrollLock();

        }



      }else if($(this).hasClass('edit')){

        if($('#black_num').val() != ""){

          $('.blacklist').removeClass('on');

          p2.addClass('on');

          p2_h1.text("블랙리스트 수정 확인");

          p2_sub.html( span + "입력한 블랙리스트 번호를 수정" + span2 + "하시겠습니까?");

          p2_btn2.text("수정");

          scrollLock();

        }

      }

    });



    $('.worklist .all_recall').click(function(){

        $('.worklist .ckbox').prop("checked", true);

    });





//녹취파일 관리

    $('#record_manage .line').change(function(){

        var num = $('#record_manage .line').length;

        var ck_num = $('#record_manage .line:checked').length;



        if(ck_num == num) {

            $('#record_manage #all_ck').prop("checked", true);

        }else{

            $('#record_manage #all_ck').prop("checked", false);

        }

    })



    $('#record_manage #all_ck').change(function(){

        if($(this).is(":checked")){

            $('#record_manage .line').prop("checked", true);

        }else{

            $('#record_manage .line').prop("checked", false);

        }

    });



    //신규 업로드

    $('#record_manage .black_btn').click(function(){

        if($(this).hasClass('upload')){ //녹취 업로드

            $('.rc_pop.new').addClass('on');

            scrollLock();



        }else if($(this).hasClass('delete')){ //녹취 삭제

            if($('.line').is(":checked")){

                p2.addClass('on');

                p2_h1.text("녹취파일 삭제 확인");

                p2_sub.html( span + "선택한 녹취파일을 삭제" + span2 + "하시겠습니까?");

                p2_btn2.text("삭제");

                scrollLock();

            }

        }

    });



    $('.rc_pop #upload_file').change(function(){

        var filename = $(this).val().split('/').pop().split('\\').pop();

        $('.rc_pop #filename').val(filename);

    });

    $('.rc_pop .rc_upload').click(function(){

        if($('.rc_pop.new #project').val() == "default"){

            p1.addClass('on');

            p1.addClass('rc_return');

            p1_h1.text("녹취파일 업로드 실패");

            p1_sub.html(span + "업로드 될 프로젝트를 선택" + span2 + " 해주세요.");

            scrollLock();



        }else if($('.rc_pop.new #filename').val() == ""){

            p1.addClass('on');

            p1.addClass('rc_return');

            p1_h1.text("녹취파일 업로드 실패");

            p1_sub.html(span + "업로드 할 녹취파일을 선택" + span2 + " 해주세요.");

            scrollLock();



        }else{

            p2.addClass('on');

            p2_h1.text("녹취파일 업로드 확인");

            p2_sub.html( span + "선택한 녹취파일을 업로드" + span2 + "하시겠습니까?");

            p2_btn2.text("업로드");

            scrollLock();

        }

    });





    //수정

    $('#record_manage .rc_btn').click(function(){

        if($(this).hasClass('edit')){

            $('.rc_pop.edit').addClass('on');

            scrollLock();



        }else if($(this).hasClass('del')){

            p2.addClass('on');

            p2_h1.text("녹취파일 삭제 확인");

            p2_sub.html( span + "선택한 녹취파일을 삭제" + span2 + "하시겠습니까?");

            p2_btn2.text("삭제");

            scrollLock();

        }

    });



    $('.rc_pop #upload_file2').change(function(){

        var filename = $(this).val().split('/').pop().split('\\').pop();

        console.log(filename)

        $('.rc_pop #filename2').val(filename);

    });



    $('.rc_pop .rc_edit').click(function(){

        if($('.rc_pop.edit #project').val() == "default"){

            p1.addClass('on');

            p1.addClass('rc_return2');

            p1_h1.text("녹취파일 업로드 실패");

            p1_sub.html(span + "업로드 될 프로젝트를 선택" + span2 + " 해주세요.");



        }else if($('.rc_pop.edit #filename').val() == ""){

            p1.addClass('on');

            p1.addClass('rc_return2');

            p1_h1.text("녹취파일 업로드 실패");

            p1_sub.html(span + "업로드 할 녹취파일을 선택" + span2 + " 해주세요.");



        }else{

            p2.addClass('on');

            p2_h1.text("녹취파일 수정 확인");

            p2_sub.html( span + "선택한 녹취파일을 수정" + span2 + "하시겠습니까?");

            p2_btn2.text("수정");

        }

    });





    //통화 설정

    $('#call_setting .set_btn').click(function(){

        if($(this).hasClass('apply')){

            p2.addClass('on');

            p2_h1.text("설정 적용 확인");

            p2_sub.html( span + "입력한 설정을 적용" + span2 + "하시겠습니까?");

            p2_btn2.text("적용");

            scrollLock();



        }else if($(this).hasClass('edit')){

            p2.addClass('on');

            p2_h1.text("설정 수정 확인");

            p2_sub.html( span + "입력한 설정을 수정" + span2 + "하시겠습니까?");

            p2_btn2.text("수정");

            scrollLock();



        }

    });





    //공지사항

    $('#notice_list tr').click(function(){

        if($(this).hasClass('first') == false){

          location.href='notice_list_sub.html';

        }

    });





    //내 정보 수정

    $('#myinfo_edit .btn_common').click(function(){

        var name = $('#myinfo_edit #user_name').val();

        var nowpw = $('#myinfo_edit #now_pw').val();

        var newpw = $('#myinfo_edit #new_pw').val();

        var newpw2 = $('#myinfo_edit #new_pw2').val();



        if($(this).hasClass('save_myinfo')){

            if(!name){

                p1.addClass('on');

                p1_h1.text("정보 저장 실패");

                p1_sub.html(span + "이름(회사명)을 입력" + span2 + " 해주세요.");

                scrollLock();



            }else{

                p2.addClass('on');

                p2_h1.text("정보 저장 확인");

                p2_sub.html( span + "입력한 정보를 저장" + span2 + "하시겠습니까?");

                p2_btn2.text("저장");

                scrollLock();

            }

        }else if($(this).hasClass('change_pw')){

            if(!nowpw){

                p1.addClass('on');

                p1_h1.text("비밀번호 변경 실패");

                p1_sub.html(span + "현재 비밀번호를 입력" + span2 + " 해주세요.");

                scrollLock();



            }else if(!newpw){

                p1.addClass('on');

                p1_h1.text("비밀번호 변경 실패");

                p1_sub.html(span + "새로운 비밀번호를 입력" + span2 + " 해주세요.");

                scrollLock();



            }else if(!newpw2){

                p1.addClass('on');

                p1_h1.text("비밀번호 변경 실패");

                p1_sub.html(span + "새로운 비밀번호를 다시 한번 입력" + span2 + " 해주세요.");

                scrollLock();



            }else if(newpw != newpw2) {

                p1.addClass('on');

                p1_h1.text("비밀번호 변경 실패");

                p1_sub.html(span + "새로운 비밀번호가 일치" + span2 + " 하지 않습니다.");

                scrollLock();



            }else{

                p2.addClass('on');

                p2_h1.text("비밀번호 변경 확인");

                p2_sub.html( span + "입력한 비밀번호를 변경" + span2 + "하시겠습니까?");

                p2_btn2.text("변경");

                scrollLock();

            }



            //비밀번호 일치하지 않을때



            // p1.addClass('on');

            // p1_h1.text("비밀번호 변경 실패");

            // p1_sub.html(span + "현재 비밀번호가 일치" + span2 + " 하지 않습니다.");

            // scrollLock();

        }

    });



});





function scrollLock(){

  $('html').addClass('scrollLock');

  $('.pop .p_blue').removeClass('on');

}

function scrollLock2(){

  $('html').addClass('scrollLock');

}

function scrollAuto(){

  $('html').removeClass('scrollLock');

}