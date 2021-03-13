$(function()
{
    $("#info").slideUp()
    function char_slide(id)
    {
        $("#"+id).animate
        ({
            left:"300px",
            width:"600px",
            })
            $("#info").css({visibility:"visible"})
            $("#info").css({left:"700px"})
            $("#info").slideDown()
    }
    $("#lava").click(function()
    {
        $("#info h3").text("炎熔")
        char_slide("lava")
    })
    // 德克萨斯
    $("#fire").click(function()
    {
        $("#info h3").text("德克萨斯")
        $("#info h4").text("职业：先锋")
        $("#info").css({visibility:"visible"})
        $(this).animate
        ({
            left:"300px",
            width:"400px",
        })
        $("#info").css({visibility:"visible"})
        $("#info").css({left:"700px",top:"400px"})
        $("#info").slideDown()
    })
    $("#close").click(function()
    {
        $("#lava").animate(
        {
                left:"100px",
                width:"100px",
        })
        $("#fire").animate(
        {
                left:"0px",
                width:"100px",
        })
        $("#info").slideUp()
    })

})
