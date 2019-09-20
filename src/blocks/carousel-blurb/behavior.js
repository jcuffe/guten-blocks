jQuery(document).ready($ => {
  const carousel = $(".wp-block-eecontractingllc-carousel-blurb .carousel")
  const slider = carousel.find(".slider")
  const controls = carousel.find(".controls")
  slider.slick({
    appendArrows: controls,
    prevArrow: null,
    appendDots: controls,
    dots: true
  })

  // Override default element-level style `display: block`
  const dots = controls.find(".slick-dots")
  dots.css("display", "flex")

  // Move next arrow to opposite side of dots
  const next = controls.find(".slick-next")
  next.appendTo(controls)
  next.css("background-image", `url('${assets}/svg/right-arrow-white.svg')`)
})
