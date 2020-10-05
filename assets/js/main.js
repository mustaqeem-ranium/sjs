$(document).ready(function () {

    $('.toggleDropdown').on('click', function() {
        $('.profile-dropdown').toggleClass('hidden');
    });

    $('.open-menu').on('click', function () {
        $('.mobile-menu').removeClass('hidden');
    });

    $('.close-menu').on('click', function () {
        $('.mobile-menu').addClass('hidden');
    });



    $("#cf7_controls").on('click', 'span', function () {
        $("#cf7 img").removeClass("opaque");

        var newImage = $(this).index();

        $("#cf7 img").eq(newImage).addClass("opaque");

        $("#cf7_controls span").removeClass("selected");
        $(this).addClass("selected");
    });
    
});