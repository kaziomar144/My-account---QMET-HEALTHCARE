// bootstrap tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/** Mobile Menu */

$(document).ready(function () {
  let _mobileMenu = $('.mobileMenu');
  let _this = $(this);
  _mobileMenu.removeClass('open');
  $('#mobileNav').click(function (e) { 
    e.preventDefault();
    
    let _nav = $('.mobileHandheldDepertment').html();

    // console.log(_nav);
    _mobileMenu.addClass('open');
    _mobileMenu.html(_nav);
    _mobileMenu.prepend('<div id="menuClose"><a href="#" id="button"><i class="fa-solid fa-xmark"></i></a></div>');
   
  });
  $(document).on('click','#button',function(){
    _mobileMenu.removeClass('open');
  })
});
