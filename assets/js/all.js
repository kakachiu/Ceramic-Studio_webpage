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
  $(".min").click(function () {
    $(".num").text(num);
    num -= 1;
  });
  $(".add").click(function () {
    $(".num").text(num);
    num += 1;
  });
});
//# sourceMappingURL=all.js.map
