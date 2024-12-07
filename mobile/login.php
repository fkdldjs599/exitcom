<?
$header = array(
    'is_header' => false,
);

$footer = array(
    'is_footer' => true,
    'term' => true,
);
include 'header.php';
?>

<section id="login" class="form">
    <div class="logo_area">
        <h1 class="logo">
            <img src="/img/m_logo_big.png">
        </h1>
    </div>

    <div class="form_area">
        <form>
            <div class="input_area">
                <input type="text" name="user_name" id="user_name" class="input" placeholder="이름을 입력해주세요.">
                <input type="number" name="line_num" id="line_num" class="input" placeholder="회선번호를 입력해주세요.">
                <input type="number" name="manage_num" id="manage_num" class="input" placeholder="관리자 번호를 입력해주세요.">
            </div>

            <div class="auto_area">
                <input type="checkbox" name="auto_login" id="auto_login" class="ckbox">
                <label for="auto_login" class="lab">자동 로그인</label>
            </div>

            <div class="btn_area">
                <button type="button" class="login_btn">로그인</button>
            </div>
        </form>
    </div>

</section>


<?include 'footer.php';?>