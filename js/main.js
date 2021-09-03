let white = "pattern-white";
let dark = "pattern-dark";

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
