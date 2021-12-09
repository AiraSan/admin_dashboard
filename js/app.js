$(".menu-icon").click(function(){
    $(".menu").animate({marginLeft: 0})
});
$(".close-icon").click(function(){
    $(".menu").animate({marginLeft: "-100%"})
});

$('.cursor').tooltip();

function go(url){
    location.href = `${url}`
}

let screenHeight = $(window).height();
let currentHeight = $(".nav-menu .active").offset().top;

if(currentHeight > screenHeight*0.8 ){
    $(".menu").animate({
        scrollTop:currentHeight-100
    },1000)
}

