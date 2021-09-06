let white = "pattern-white";
let dark = "pattern-dark";

$(window).ready(function () {
  changeToDev();
});

$(window).scroll(function () {
  let top = $(this).scrollTop();
  if (top > 270) {
    $(".pattern").removeClass(white);
    $(".pattern").addClass(dark);
  } else {
    $(".pattern").removeClass(dark);
    $(".pattern").addClass(white);
  }
});

AOS.init({
  delay: 250,
});

new Glide(".glide").mount();
new Glide(".glide2").mount();

function changeToDev() {
  $(".dev-button").addClass("project__container-select-active");
  $(".des-button").removeClass("project__container-select-active");
  $("#development").css("display", "flex");
  $("#design").css("display", "none");
}

function changeToDes() {
  $("#design").css("display", "flex");
  $("#development").css("display", "none");
  $(".dev-button").removeClass("project__container-select-active");
  $(".des-button").addClass("project__container-select-active");
}
