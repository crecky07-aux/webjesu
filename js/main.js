$(document).ready(function()
{
    // navbar shrink
    $(window).on("scroll", function()
    {
        if($(this).scrollTop() > 90)
        {
            $(".navbar").addClass("navbar-shrink");
        }
        else
        {
            $(".navbar").removeClass("navbar-shrink");
        }
    })
    // parallax js
    function parallaxMouse()
    {
        if($('#parallax').length)
        {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        }
    }
    parallaxMouse();
    // Skills Bar
    $(window).scroll(function()
{
    var hT = $("#skill-bar-wrapper").offset().top,
    hH = $("#skill-bar-wrapper").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if( wS > (hT+hH-1.4*wH))
    {
        jQuery('.skillbar-container').each(function()
        {
            jQuery(this).find('.skills').animate({
                width:jQuery(this).attr('data-percent')
            }, 5000) //5 segundos
        })
    }
})

})
   

