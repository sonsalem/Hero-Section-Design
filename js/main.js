$('.open').click(function(){
    $('#switch').toggleClass('active')
});
$('#switch').click(function(){
    $('#html').toggleClass('active')
});
$(".img").click(function(){
    $(this).removeClass("active")
    $(".image img").attr("src","img/Friendly Ones - Standing-2.png");
    $(".img-2").addClass("active");
});
$(".img-2").click(function(){
    $(this).removeClass("active")
    $(".image img").attr("src","img/Friendly Ones - Standing.png");
    $(".img").addClass("active");
});