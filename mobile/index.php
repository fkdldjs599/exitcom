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

<!--
    자동/반자동 선택할수 있을때
-->

<section id="main" class="page">
    <div class="logo_area">
        <h1 class="logo">
            <img src="/img/m_logo_big.png">
        </h1>
    </div>

    <div class="auto_area">
        <button type="button" class="autoset auto">
            <img src="/img/auto.png" alt="자동 설정" class="icon">
            <h2 class="h2">자동 설정</h2>
        </button>
        <button type="button" class="autoset autohalf">
            <img src="/img/auto_half.png" alt="반자동 설정" class="icon">
            <h2 class="h2">반자동 설정</h2>
        </button>
    </div>
</section>


<?include 'footer.php';?>