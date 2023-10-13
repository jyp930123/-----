$(function () {
  let subMenu = document.querySelector(".submenu");
  let sub = document.querySelectorAll(".KRlnb > ul > li");
  let KRgnb = document.querySelectorAll(".KRgnb ul li a");
  let ht = document.querySelector(".KRlnb").offsetHeight;
  let status = true;
  KRgnb.forEach(function (item, keys) {
    item.onclick = function () {
      if (status) {
        subMenu.style.height = ht + 90 + "px";
      } else {
        subMenu.style.height = 0 + "px";
      }
      status = !status;
    };
  });
  sub.forEach(function (item, keys) {
    item.addEventListener("click", function () {
      KRgnb[keys].classList.add("on", "active");
    });
    item.addEventListener("mouseleave", function () {
      KRgnb[keys].classList.remove("on", "active");
    });
  });

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

  var swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
