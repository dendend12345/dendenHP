// $(function(){
//     $(".denden").css("color","green")
// });

// $(function(){
//     $(".test2").css("color","green")
// });

$(function(){
    $(".slide").slick({
        autoplay: true, // 自動再生
        autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
        infinite: true, // 無限スライド
        dots: true,
        centerMode: true,
        slidesToShow: 5,
        responsive: [
            {
            breakpoint: 640,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerPadding: "10%",
                },
            },
        ],
    });
});
