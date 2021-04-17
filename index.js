$(function()
{
    var video=$("#video")
    $("#pv").click(function()
    {
        video.attr("src","pv/pv.mp4")
        video[0].play()
    })
    $("#pv2").click(function()
    {
        video.attr("src","pv/pv2.mp4")
        video[0].play()
    })
    // alert("test")
})