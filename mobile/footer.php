<? if($footer['is_footer']) { ?>

    <footer class="fix_area">

    <? if($footer['term']) { ?>
        <div class="term_area">
            <a href="term1.php" class="term_a">이용약관</a>
            <a href="term2.php" class="term_a">개인정보처리방침</a>
        </div>

        <div class="copy_area">
            &copy;EXITCOMPANY. ALL RIGHTS RESERVED.
        </div>
    </footer>

    <?} else if ($footer['play']) {?>
        <div class="btn_area">
            <button type="button" class="btn_common play on">
                <img src="/img/icon_play.png" alt="실행" class="icon">
                <span class="vt_mid">실행</span>
            </button>

            <button type="button" class="btn_common stop">
                <img src="/img/icon_stop.png" alt="중지" class="icon">
                <span class="vt_mid">중지</span>
            </button>
        </div>

    <?} else {?>

        <div class="btn_area">
            <button type="button" class="btn_common on">확인</button>
        </div>

    <? } ?>

<? }else { ?>

    <footer></footer>

<? } ?>

</body>
</html>