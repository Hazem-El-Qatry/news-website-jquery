// filter JS
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post-box").show("1000");
    } else {
      $(".post-box")
        .not("." + value)
        .hide("1000");
      $(".post-box")
        .filter("." + value)
        .show("1000");
    }
  });
});

// add active class on selected item
$(".filter-item").click(function () {
  $(this).addClass("active-filter").siblings().removeClass("active-filter");
});

// header background change on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("shadow", window.scrollY > 0);
});
