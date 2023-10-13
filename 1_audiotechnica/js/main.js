//
$(function () {
  $(".boxright").css({ marginLeft: "100px" });
  $(".boxright .swiper-slide .title").css({ opacity: "0" });
  $(".boxright .swiper-slide").eq(0).find(".title").css({ opacity: "1" });
  $(".boxright .swiper-slide .boxdesc").css({ opacity: "0" });
  $(".boxright .swiper-slide").eq(0).find(".boxdesc").css({ opacity: "1" });
  var swiper_left = new Swiper(".boxleft", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    on: {
      slideChange: function () {
        //swiper_left.controller.control = swiper4;
      },
      // slideChangeTransitionStart: function () {
      //   console.log(this.realIndex);
      //   swiper_left.controller.control = swiper4;
      // },
    },
  });
  var hasExecuted = false;
  var swiper4 = new Swiper(".boxright", {
    speed: 1000,
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    //slidesOffsetBefore: 100,
    on: {
      slideChange: function () {
        $(".boxright .swiper-slide .title").css({ opacity: "0" });
        $(".boxright .swiper-slide")
          .eq(this.activeIndex)
          .find(".title")
          .css({ opacity: "1" });
        $(".boxright .swiper-slide .boxdesc").css({ opacity: "0" });
        $(".boxright .swiper-slide")
          .eq(this.activeIndex)
          .find(".boxdesc")
          .css({ opacity: "1" });
        //swiper4.controller.control = swiper_left;
      },
      // slideChangeTransitionStart: function () {
      //   console.log(this.realIndex);
      //   swiper4.controller.control = swiper_left;
      // },
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
  swiper_left.controller.control = swiper4;

  //
  let el = $("section");
  $(el).each(function (index) {
    $(this).on("mousewheel", function () {
      console.log(event.wheelDelta);
      let moveTop = $(window).scrollTop();
      let eleseclector = $(el).eq(index);
      if (event.wheelDelta < 0) {
        if ($(eleseclector).next() != undefined) {
          try {
            moveTop = $(eleseclector).next().offset().top;
          } catch (e) {}
        }
      } else {
        if ($(eleseclector).prev() != undefined) {
          try {
            moveTop = $(eleseclector).prev().offset().top;
          } catch (e) {}
        }
      }
      $("html,body")
        .stop()
        .animate({ scrollTop: moveTop + "px" }, 500);
    });
  });
});
