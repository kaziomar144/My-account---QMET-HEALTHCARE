// bootstrap tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/** Mobile Menu */

// $(document).ready(function () {
//   let _mobileMenu = $('.mobileMenu');
//   let _this = $(this);
//   $('#mobileNav').click(function (e) { 
//     e.preventDefault();
    
//     let _nav = $('.mobileHandheldDepertment').html();
//     _mobileMenu.addClass(className);
//     _mobileMenu.html(_nav);
//     // _mobileMenu.prepend("");
   
//   });
 
// });
