$("#myBtn1").click(function () {
    $(this).css("background-color", "red");
});


$("p").click(function () {
    $(this).hide();
});


$("#myBtn3").click(function () {
    $('body').css("background-color", "blue");
});

$(function () {
    $('#myBtn2').hover(function () {
        $(this).css('background-color', 'green');
    },
        function () {
            $(this).css('background-color', 'pink');
        });
});

$('#btnAdd').click(function () {
    $('ul').append('<li>New li Added</li>');
})

$('#showHideSlide').click(function () {

    if ($('.panelClass').css('display') == 'none') {
        $('.panelClass').slideDown();
    } else {
        $('.panelClass').slideUp();
    }

});
