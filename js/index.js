

// Start sideNav
$('.openNav').click(function(){
    $('.side-nav').css('left', '0')
})

$('.closeBtn').click(function(){
    $('.side-nav').css('left', '-130')
})
// End sideNav

// Start divToggle
$('.acordion h3').click(function(){
    $(this).next().slideToggle();

    $('.acordion div').not( $(this).next()).slideUp();
})
// Stop divToggle

// Start textArea count
$('textarea').keyup(function(){
let myLength = $(this).val().length;
$('#num').text(
    100 - myLength <=0 ? "you have finished ": 100 - myLength
)
})
// End textArea count


$('.side-nav a[href^="#"]').click(function(e){

    let linkId =$(e.target).attr('href')
    let linkOffset = $(linkId).offset().top

    $('html,body').animate({scrollTop: linkOffset}, 1000)

})