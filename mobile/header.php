<?php $nowpage = explode("/" , $_SERVER["REQUEST_URI"]); ?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EIXT COMPANY</title>
    <link rel="stylesheet" href="css/SUITE.css">
    <link rel="stylesheet" href="css/pretendard.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/script.js"></script>

</head>
<body>


<? if($header['is_header']) { ?>
    <header class="header">
        <div class="h_left vt_mid">
            <button type="button" class="back_btn" onclick="history.go(-1);">
                <img src="/img/back_btn.png" alt="뒤로가기">
            </button>
        </div>
        <div class="h_cen vt_mid">
            <a href="index.php" class="logo">
                <img src="/img/m_logo.png" alt="EIXT COMPANY">
            </a>
        </div>
        <div class="h_right vt_mid">
            <button type="button" class="logout_btn">로그아웃</button>
        </div>
    </header>

<? }else{ ?>

<? } ?>

<?include("pop.php")?>
<?include("pop_note.php")?>