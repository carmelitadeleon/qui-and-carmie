// (function($) { // Begin jQuery
//   $(function() { // DOM ready
//     // If a link has a dropdown, add sub menu toggle.
//     $('nav ul li a:not(:only-child)').click(function(e) {
//       $(this).siblings('.nav-dropdown').toggle();
//
//       // Close one dropdown when selecting another
//       // $('.nav-dropdown').not($(this).siblings()).hide();
//
//       e.stopPropagation();
//     });
//     // Clicking away from dropdown will remove the dropdown class
//     $('html').click(function() {
//       $('.nav-dropdown').hide();
//
//
//     });
//     // Toggle open and close nav styles on click
//     $('#nav-toggle').click(function() {
//       $('nav ul').slideToggle();
//       $('#nav-toggle').classList.toggle("clicked");
//     });
//     // Hamburger to X toggle
//     $('#nav-toggle').on('click', function() {
//       this.classList.toggle('active');
//       $('#nav-toggle').classList.toggle("clicked");
//
//     });
//   }); // end DOM ready
// })(jQuery); // end jQuery
(function ($) { // Begin jQuery
  $(function () { // DOM ready
    // Toggle dropdown submenu
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      e.stopPropagation();
    });

    // Hide dropdowns when clicking outside
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });

    // Select elements
    let icon = document.querySelector(".nav-mobile");
    let nav = document.querySelector(".links");

    // Toggle the mobile menu
    icon.addEventListener("click", () => {
      icon.classList.toggle("clicked");
      if (nav.style.display === "block") {
       nav.style.display = "none";
       // items.style.display = "block";

     } else {
       nav.style.display = "block";
       // items.style.display = "none";
     }
    });
  }); // end DOM ready
})(jQuery); // end jQuery
