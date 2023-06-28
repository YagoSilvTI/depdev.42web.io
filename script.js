// inicializacao Aos
AOS.init({
    duration:2000,
}); 

//lightbox
$(document).ready(function () {
    $('.grid').isotope({
        itemSelector: '.item',
    });
  
    $('.filterBtnGroup').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
        $('.filterBtnGroup li').removeClass('active');
        $(this).addClass('active');
    });
  
  })