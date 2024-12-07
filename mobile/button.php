<?
$header = array(
    'is_header' => false,
);

$footer = array(
    'is_footer' => false,
    'play' => true,
);
include 'header.php';
?>

<section class="btn_wrap">
    <div class="line">
        <button type="button" class="btns blue wid25">상담시작</button>
        <button type="button" class="btns blue wid25">업무종료</button>
        <button type="button" class="btns gray wid25">상담중지</button>
        <button type="button" class="btns gray wid25">
            <img src="/img/icon_pip.png" alt="PIP" class="vt_mid">
            <span class="vt_mid">PIP</span>
        </button>
    </div>
    <div class="line">
        <div class="line2">
            <button type="button" class="btns yellow wid100">준비중</button>
        </div>
        <div class="line2">
            <button type="button" class="btns black wid114">홍길동</button>
            <button type="button" class="btns black wid220 suite">010-1234-1234</button>
        </div>
        <div class="line2">
            <button type="button" class="btns black wid100">비고내용 노출(C열)</button>
        </div>
    </div>
    <div class="line">
        <div class="line2">
            <button type="button" class="btns gray wid33">접수</button>
            <button type="button" class="btns gray wid33">예약</button>
            <button type="button" class="btns gray wid33">무관심</button>
        </div>
        <div class="line2">
            <button type="button" class="btns gray wid33">거부</button>
            <button type="button" class="btns gray wid33">결번</button>
            <button type="button" class="btns gray wid33">부재</button>
        </div>
    </div>
</section>

<script>
    $('.btns').click(function(){
        history.go(-1);
    })
</script>


<?include 'footer.php';?>