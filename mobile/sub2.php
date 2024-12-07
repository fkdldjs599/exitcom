<?
$header = array(
    'is_header' => true,
);

$footer = array(
    'is_footer' => true,
    'play' => true,
);
include 'header.php';
?>

<section id="autohalf_set" class="sub">
    <div class="title_area">
        <h1 class="h1 vt_mid">반자동 설정</h1>
        <div class="right vt_mid">
            <div class="wrap vt_mid">
                <input type="checkbox" name="counsel" id="counsel" class="ckbox" checked>
                <label for="counsel" class="lab">상담완료/거절</label>
            </div>
            <div class="wrap vt_mid">
                <button type="button" class="pip_btn" onclick="location.href='button.php'">
                    <img src="/img/icon_pip_wt.png" alt="PIP" class="vt_mid">
                    <span class="vt_mid">PIP</span>
                </button>
            </div>
        </div>
    </div>

    <div class="data_area">
        <div class="title">
            <div class="th th1">진행</div>
            <div class="th th2">no</div>
            <div class="th th3">이름</div>
            <div class="th th4">번호</div>
            <div class="th th5">비고</div>
        </div>
        <table class="data_table">

            <!-- 완료 = ok / 진행중 = ing -->

            <tr class="ok">
                <td class="td td1">
                    <img src="/img/icon_ok.png" alt="완료" class="icon on">
                    <img src="/img/icon_ing.png" alt="진행중" class="icon">
                </td>
                <td class="td td2">99999</td>
                <td class="td td3">홍길동</td>
                <td class="td td4">010-1234-1234</td>
                <td class="td td5">
                    <button type="button" class="note_btn">
                        <img src="/img/icon_doc.png" alt="보기">
                    </button>
                </td>
            </tr>

            <tr class="ok">
                <td class="td td1">
                    <img src="/img/icon_ok.png" alt="완료" class="icon on">
                    <img src="/img/icon_ing.png" alt="진행중" class="icon">
                </td>
                <td class="td td2">99999</td>
                <td class="td td3">홍길동</td>
                <td class="td td4">010-1234-1234</td>
                <td class="td td5"></td>
            </tr>

            <tr class="ok">
                <td class="td td1">
                    <img src="/img/icon_ok.png" alt="완료" class="icon on">
                    <img src="/img/icon_ing.png" alt="진행중" class="icon">
                </td>
                <td class="td td2">99999</td>
                <td class="td td3">홍길동</td>
                <td class="td td4">010-1234-1234</td>
                <td class="td td5">
                    <button type="button" class="note_btn">
                        <img src="/img/icon_doc.png" alt="보기">
                    </button>
                </td>
            </tr>

            <tr class="ing">
                <td class="td td1">
                    <img src="/img/icon_ok.png" alt="완료" class="icon">
                    <img src="/img/icon_ing.png" alt="진행중" class="icon on">
                </td>
                <td class="td td2">99999</td>
                <td class="td td3">홍길동</td>
                <td class="td td4">010-1234-1234</td>
                <td class="td td5">
                    <button type="button" class="note_btn">
                        <img src="/img/icon_doc.png" alt="보기">
                    </button>
                </td>
            </tr>

            <tr>
                <td class="td td1">
                    <img src="/img/icon_ok.png" alt="완료" class="icon">
                    <img src="/img/icon_ing.png" alt="진행중" class="icon">
                </td>
                <td class="td td2">99999</td>
                <td class="td td3">홍길동</td>
                <td class="td td4">010-1234-1234</td>
                <td class="td td5"></td>
            </tr>

            <tr>
                <td class="td td1">
                    <img src="/img/icon_ok.png" alt="완료" class="icon">
                    <img src="/img/icon_ing.png" alt="진행중" class="icon">
                </td>
                <td class="td td2">99999</td>
                <td class="td td3">홍길동</td>
                <td class="td td4">010-1234-1234</td>
                <td class="td td5">
                    <button type="button" class="note_btn">
                        <img src="/img/icon_doc.png" alt="보기">
                    </button>
                </td>
            </tr>

            <tr>
                <td class="td td1">
                    <img src="/img/icon_ok.png" alt="완료" class="icon">
                    <img src="/img/icon_ing.png" alt="진행중" class="icon">
                </td>
                <td class="td td2">99999</td>
                <td class="td td3">홍길동</td>
                <td class="td td4">010-1234-1234</td>
                <td class="td td5"></td>
            </tr>

            <tr>
                <td class="td td1">
                    <img src="/img/icon_ok.png" alt="완료" class="icon">
                    <img src="/img/icon_ing.png" alt="진행중" class="icon">
                </td>
                <td class="td td2">99999</td>
                <td class="td td3">홍길동</td>
                <td class="td td4">010-1234-1234</td>
                <td class="td td5">
                    <button type="button" class="note_btn">
                        <img src="/img/icon_doc.png" alt="보기">
                    </button>
                </td>
            </tr>

            <tr>
                <td class="td td1">
                    <img src="/img/icon_ok.png" alt="완료" class="icon">
                    <img src="/img/icon_ing.png" alt="진행중" class="icon">
                </td>
                <td class="td td2">99999</td>
                <td class="td td3">홍길동</td>
                <td class="td td4">010-1234-1234</td>
                <td class="td td5">
                    <button type="button" class="note_btn">
                        <img src="/img/icon_doc.png" alt="보기">
                    </button>
                </td>
            </tr>

            <tr>
                <td class="td td1">
                    <img src="/img/icon_ok.png" alt="완료" class="icon">
                    <img src="/img/icon_ing.png" alt="진행중" class="icon">
                </td>
                <td class="td td2">99999</td>
                <td class="td td3">홍길동</td>
                <td class="td td4">010-1234-1234</td>
                <td class="td td5">
                    <button type="button" class="note_btn">
                        <img src="/img/icon_doc.png" alt="보기">
                    </button>
                </td>
            </tr>

            <tr>
                <td class="td td1">
                    <img src="/img/icon_ok.png" alt="완료" class="icon">
                    <img src="/img/icon_ing.png" alt="진행중" class="icon">
                </td>
                <td class="td td2">99999</td>
                <td class="td td3">홍길동</td>
                <td class="td td4">010-1234-1234</td>
                <td class="td td5">
                    <button type="button" class="note_btn">
                        <img src="/img/icon_doc.png" alt="보기">
                    </button>
                </td>
            </tr>
        </table>
    </div>
</section>


<?include 'footer.php';?>