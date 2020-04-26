$(function () {

    AOS.init();

    const parllax = document.querySelector(".parallax");

    window.addEventListener("scroll", function () {
        let offset = window.pageYOffset;
        parllax.style.backgroundPositionY = offset * 0.5 + 'px';
    });

    $(document).ready(function () {
        $(".header-menu__hamberger").on('click', function () {
            $(this).find(".hambergerIcon").toggleClass("open");
            $(this).toggleClass('menu-mobile__active');
        });

    });

    $("a.scrollto").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 2000);
        return false;
    });
});