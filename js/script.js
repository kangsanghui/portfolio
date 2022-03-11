$(window).scroll(function(){
    let scroll = $(this).scrollTop();


    if(scroll<900){

        $('#topBox').hide();
    } else if(scroll >899){
        $('#topBox').slideUp(200);
    }

    $('#topBox').click(function(){
        $(window).scrollTop(0);
    });
});
