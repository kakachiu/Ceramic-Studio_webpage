"use strict";

$(document).ready(function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  var num = 1;

  function click(num_var) {
    num = num + num_var;
    $(".num").text(num);
  }

  ;
  $(".min").click(function () {
    num = num - 1;
    $(".num").text(num);
  });
  $(".add").click(function () {
    num = num + 1;
    $(".num").text(num);
  });
});
//# sourceMappingURL=all.js.map
