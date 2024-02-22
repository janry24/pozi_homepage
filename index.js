$(document).ready(function () {

    // 초기 video 높이 세팅
    var boxWidth = $('.videoContainer').width();
    $('.videoContainer').height(boxWidth*0.681);

    deviceSize()

    // sns 마우스 이벤트
    snsMouseoverView()

    $(window).resize(function(){
        var boxWidth = $('.videoContainer').width();
        //1.681:1
        $('.videoContainer').height(boxWidth*0.681);
    });

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

// browser 닫기
function closeBrowserBtn() {
    $('.popupArchive').removeClass('showPopupArchive')
}

// browser 열기
function openBrowserBtn(year) {
    $('.popupArchive'+year).addClass('showPopupArchive')
}

// ArchiveImg 닫기
function closeArchiveImgBtn() {
    $('.popupArchiveImgContainer .browserContents').empty()
    $('.popupArchiveImgContainer').removeClass('showPopupArchiveImg')
}

// ArchiveImg 열기
function openArchiveImgBtn(year, num) {
    var ww = $(window).width();

    if (ww <= 1024) {
        var archiveImg = '<img src="images/'+year+'_'+num+'_mo_img.jpg" alt="image">'
        $('.popupArchiveImgContainer .browserContents').append(archiveImg)
        $('.popupArchiveImgContainer').addClass('showPopupArchiveImg')
    } else {
        var archiveImg = '<img src="images/'+year+'_'+num+'_img.jpg" alt="image">'
        $('.popupArchiveImgContainer .browserContents').append(archiveImg)
        $('.popupArchiveImgContainer').addClass('showPopupArchiveImg')
    }
}