$(function () {
  let bg = [
    "#fff",
    "#010000",
    "#1a1a1a",
    "#fff",
    "#c00721",
    "#03cf5d",
    "#f61f29",
    "#ffffff",
    "linear-gradient(174.41deg, rgb(11, 209, 193) 1.9%, rgb(21, 226, 163) 93.28%)",
    "#f0f0f0",
    "#ef2727",
    "#fff",
    "#3648f5",
    "#edeced",
  ];
  for (let i = 0; i < 14; i++) {
    $(".brandbox ul li").eq(i).css("background", bg[i]);
  }

  let dl = [
    "1s",
    "2s",
    "0.5s",
    "1s",
    "0.3s",
    "2s",
    "1.5s",
    "0.5s",
    "2s",
    "1s",
    "2s",
    "0.3s",
    "0.1s",
    "2s",
  ];
  for (let i = 0; i < 14; i++) {
    $(".brandbox ul li").eq(i).css("animationDelay", dl[i]);
  }

  let hl = [
    "8.1vh",
    "9.2vh",
    "10.3vh",
    "11.4vh",
    "6.5vh",
    "2.6vh",
    "3.7vh",
    "7.8vh",
    "6.9vh",
    "4.10vh",
    "5.11vh",
    "7.12vh",
    "9.13vh",
    "11.14vh",
    "3.15vh",
    "4.16vh",
    "3.17vh",
    "5.18vh",
    "7.19vh",
    "8.20vh",
    "13.21vh",
    "12.22vh",
    "10.23vh",
    "12.24vh",
    "9.25vh",
    "4.26vh",
    "5.27vh",
    "7.28vh",
    "8.29vh",
    "4.30vh",
    "5.31vh",
    "8.32vh",
    "7.33vh",
    "9.34vh",
    "11.35vh",
    "7.36vh",
    "6.37vh",
    "2.38vh",
    "3.39vh",
    "4.40vh",
  ];
  for (let i = 0; i < 40; i++) {
    $(".barleft div").eq(i).css("height", hl[i]);
  }

  let hr = [
    "24.1vh",
    "19.2vh",
    "10.3vh",
    "19.4vh",
    "16.5vh",
    "12.6vh",
    "13.7vh",
    "17.8vh",
    "16.9vh",
    "14.10vh",
    "25.11vh",
    "27.12vh",
    "29.13vh",
    "31.14vh",
    "23.15vh",
    "14.16vh",
    "13.17vh",
    "15.18vh",
    "17.19vh",
    "28.20vh",
    "30.21vh",
    "32.22vh",
    "30.23vh",
    "22.24vh",
    "29.25vh",
    "24.26vh",
    "15.27vh",
    "17.28vh",
    "28.29vh",
    "24.30vh",
    "25.31vh",
    "28.32vh",
    "17.33vh",
    "9.34vh",
    "8.35vh",
    "17.36vh",
    "26.37vh",
    "22.38vh",
    "23.39vh",
    "24.40vh",
  ];
  for (let i = 0; i < 40; i++) {
    $(".barright div").eq(i).css("height", hr[i]);
  }

  let dlb = [
    "1.1s",
    "1.15s",
    "1.2s",
    "1.25s",
    "1.3s",
    "1.35s",
    "1.4s",
    "1.45s",
    "1.5s",
    "1.55s",
    "1.6s",
    "1.65s",
    "1.7s",
    "1.75s",
    "1.8s",
    "1.85s",
    "1.9s",
    "1.95s",
    "2s",
    "2.05s",
    "2.1s",
    "2.15s",
    "2.2s",
    "2.25s",
    "2.3s",
    "2.35s",
    "2.4s",
    "2.45s",
    "2.5s",
    "2.55s",
    "2.6s",
    "2.65s",
    "2.7s",
    "2.75s",
    "2.8s",
    "2.85s",
    "2.9s",
    "2.95s",
    "3s",
    "3.05s",
  ];
  for (let i = 0; i < 40; i++) {
    $(".barleft div").eq(i).css("animationDelay", dlb[i]);
  }
  for (let i = 0; i < 40; i++) {
    $(".barright div").eq(i).css("animationDelay", dlb[i]);
  }

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
