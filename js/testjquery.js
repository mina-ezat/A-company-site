$("document").ready(function(){
    
 $(".setting ul li")
 .eq(0).css("backgroundColor" , "#f00").end()
 .eq(1).css("backgroundColor" , "#2dff3f").end()
 .eq(2).css("backgroundColor" , "#5448e9").end()
 .eq(3).css("backgroundColor" , "#ff4490").end()
 .eq(4).css("backgroundColor" , "#ffd600").end()
 .eq(5).css("backgroundColor" , "#ff6c00").end()
 .eq(6).css("backgroundColor" , "#00daff").end()
 .eq(7).css("backgroundColor" , "#95528c").end();
$(".setting ul li").click(function(){
    $("link[href*= 'color']").attr("href",$(this).attr("data-value"))
})
$(".icon-setting").click(function(){
    $(".color-ul").toggle(800);
})
});


$(window).on('load', function () {
    $(".span-load  span").fadeOut(3000,function(){
       $(".load").fadeOut(1000).remove(".load");
         
       });
 });
