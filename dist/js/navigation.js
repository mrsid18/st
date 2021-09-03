$('.toggle-menu').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
});
$(window).on('scroll', function (e) {
    if ($(this).scrollTop() > 300) {
        $("#logo").width(65);
        $(".toggle-menu").first().css({
            background:"#e2e2e2",
        });
        $("#nav-buy").css({
            background:"#2e2954",
            color:"white"
        });
    } else {
        $("#logo").width(100);
        $(".toggle-menu").first().css({
            background:"#fff",
            color:"#2e2954"
        })
        $("#nav-buy").css({
            background:"#fff",
            color:"#2e2954"
        });
    }
    
})