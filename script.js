gsap.from(".logo > h1", 0.8, {
  delay: 0.2,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
});

gsap.from("#menu-btn", 0.8, {
  delay: 0.3,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
});

gsap.from(".nav-link > a", 1.2, {
  delay: 0.4,
  opacity: 0,
  stagger: 0.2,
  x: -20,
  ease: Expo.easeInOut
});

gsap.from("img", 2.2, {
  delay: 0.6,
  opacity: 0,
  y: 80,
  ease: Power4.easeInOut
});

gsap.from(".social-media-container > *", 1, {
  delay: 1.2,
  opacity: 0,
  stagger: 0.2,
  x: -20,
  ease: Expo.easeInOut
});

gsap.from(".portfolio-text-container > *", 1.6, {
  delay: .2,
  opacity: 0,
  stagger: 0.2,
  y: 80,
  ease: Power4.easeInOut
});


$("#menu-btn").click(function(e){
  e.preventDefault();

  if ($(".nav-link").css("display") === "none") {
    $(".nav-link").css("display", "flex");
    $(this).removeClass("fa-bars").addClass("fa-times");
  }
  else{
    $(".nav-link").css("display", "none");
    $(this).removeClass("fa-times").addClass("fa-bars");
  }
});

$(window).resize(function(){
  winWidth = $(window).width();
  if(winWidth > 760){
    $(".nav-link").css("display", "flex");
  }
  if(winWidth <= 760 && ($("#menu-btn").hasClass("fa-bars"))){
    $(".nav-link").css("display", "none");
  }
});
