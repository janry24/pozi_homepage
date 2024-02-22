$(document).ready(function () {
    deviceSize()

    // sns 마우스 이벤트
    snsMouseoverView()    

    // 스크롤 이벤트
    $(window).bind("scroll", function () {
        var mobileWidth = 768;
        var ww = $(window).width();
        var scrollTop = $(this).scrollTop();
        var mainContainerTop = $('#mainContainer').offset().top

        if (ww <= mobileWidth) {
            if (mainContainerTop <= scrollTop) {
                $('#mobileHeaderContainer').fadeIn(200)
            } else {
                $('#mobileHeaderContainer').fadeOut(200)
            }
        }
    });

})

// 디바이스 사이즈 변화에 따라서 body가 갖는 클래스가 달라지게 하기
function deviceSize() {
    innerDeviceSize()
    
    $(window).resize(function(){
        innerDeviceSize()
    })
}

function innerDeviceSize(){
    var mobileWidth = 768;
    var ww = $(window).width();

    $('#mobileHeaderContainer').fadeOut(200)

    if (ww > mobileWidth) {
        $('body').addClass('pc').removeClass('mobile')
    } else {
        $('body').addClass('mobile').removeClass('pc')
    }
}

// sns 마우스 이벤트
function snsMouseoverView() {
    $('.snsContainer a').hover(function () {
        $(this).find('div').addClass("hoverAction")
    }, function () {
        $(this).find('div').removeClass("hoverAction")
    });
}