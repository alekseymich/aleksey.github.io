//menu-skript//
$(".wrapper").addClass("loaded");

$(".icon-menu").click(function (event) {
  $(this).toggleClass("active");
  $(".menu_body").toggleClass("active");
  $("body").toggleClass("lock");
});
//background-skript//
function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}

ibg();
