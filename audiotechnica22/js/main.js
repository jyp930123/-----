$(function () {
  $(".mySwiper4").css({ marginLeft: "100px" });
  $(".mySwiper4 .swiper-slide .title").css({ opacity: "0" });
  $(".mySwiper4 .swiper-slide .productname").css({ opacity: "0" });
  $(".mySwiper4 .swiper-slide").eq(0).find(".title").css({ opacity: "1" });
  $(".mySwiper4 .swiper-slide")
    .eq(0)
    .find(".productname")
    .css({ opacity: "1" });
  var swiper_left = new Swiper(".swiper-left", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
  });
  var swiper4 = new Swiper(".mySwiper4", {
    speed: 1000,
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    on: {
      slideChange: function () {
        $(".mySwiper4 .swiper-slide .title").css({ opacity: "0" });
        $(".mySwiper4 .swiper-slide")
          .eq(this.activeIndex)
          .find(".title")
          .css({ opacity: "1" });

        $(".mySwiper4 .swiper-slide .productname").css({ opacity: "0" });
        $(".mySwiper4 .swiper-slide")
          .eq(this.activeIndex)
          .find(".productname")
          .css({ opacity: "1" });
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });
  swiper4.controller.control = swiper_left;
});
