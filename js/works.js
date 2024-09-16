"use strict"; // fix lenis in safari
        
const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 0.7,
  infinite: false,
  gestureOrientation: "vertical",
  normalizeWheel: false,
  smoothTouch: false
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

$("[data-lenis-start]").on("click", function () {
  lenis.start();
});
$("[data-lenis-stop]").on("click", function () {
  lenis.stop();
});
$("[data-lenis-toggle]").on("click", function () {
  $(this).toggleClass("stop-scroll");
  if ($(this).hasClass("stop-scroll")) {
    lenis.stop();
  } else {
    lenis.start();
  }
});



$("[bottom-to-top]").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "-20% 100%",
        end: "top center",
        scrub: false,
      }
    });
    tl.to($(this),
     { 
        y:0, 
        duration: .5, 
        ease: "power1.out", 
        stagger: { each: 0.7 }, 
        delay: 0.2 
    });
  });



  $("[scale-small-to-bigger]").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "-20% 100%",
        end: "top center",
        scrub: false,
      }
    });
    tl.to($(this),
     { 
        scale:1, 
        opacity:1,
        duration: .5, 
        ease: "power1.out", 
        stagger: { each: 0.7 }, 
        delay: 0.2 
    });
  });
