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

    // Show Shipping Address Fields
    $(".shipping-address").hide();
    $(".shipping-checked").click(function() {
        if ($(this).is(":checked")) {
            $(".shipping-address").hide();
        } else {
            $(".shipping-address").show();
        }
    });

    // Show estimated monitoring other value
    $("#other-monitoring-period").hide();
    $('#grid-monitoring-period').on('change', function() {
        if ( this.value == 'other') {
            $(this).removeClass('w-full');
            $(this).addClass('w-1/2');
            $("#other-monitoring-period").show();
        } else {
            $(this).addClass('w-full');
            $("#other-monitoring-period").hide();
        }
    });

    // Order details popup
    /*$('.order-modal-link').click(function () {
        $('.order-modal').show();
    });
    $('.order-modal .close').click(function () {
        $('.order-modal').hide();
    });

    // Enrolment info popup
    $(".enrolment-modal-link").click(function() {
      $(".enrolment-modal").show();
    });
    $(".enrolment-modal .close").click(function() {
      $(".enrolment-modal").hide();
    });*/

    // Show order details when click on order number of order details popup
    $(".flip").click(function () {
        $(".panel").slideToggle("slow");
    });

    // Show document details
    $(".document-details").hide();
    // $(".show-document").click(function () {
    //     $('.add-document').show();
    // });
    $('.select-user').on('change', function () {
        if (this.value != 0) {
            $(".document-details").show();
        } else {
            $(".document-details").hide();
        }
    });

    // Show Add Document
    $(".add-document").hide();
    $(".show-other").hide();
    $(".show-document").click(function () {
        $('.add-document').show();
    });
    $('.document-list').on('change', function () {
        if (this.value == 'other') {
            $(".show-other").show();
        } else {
            $(".show-other").hide();
        }
    });
    
});