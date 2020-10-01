$('.toggleDropdown').on('click', function() {
    $('.profile-dropdown').toggleClass('hidden');
});

$('.open-menu').on('click', function () {
    $('.mobile-menu').removeClass('hidden');
});

$('.close-menu').on('click', function () {
    $('.mobile-menu').addClass('hidden');
});
