$(function () {
  $(".hambuger-toggle").on("click", function () {
    $(".menu-container").stop().animate({ left: "0", opacity: 1 });
  });
  $(".inner-cancle").on("click", function () {
    $(".menu-container").stop().animate({ left: "-100%", opacity: 0 });
  });
});
