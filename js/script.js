$(function () {
  $(".twentytwenty-container").twentytwenty({ default_offset_pct: 0.5 });
});

const menuToggle = document.querySelector(".hamburger-bar");
const navigation = document.querySelector(".nav-menu");


$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".header-inner").addClass("sticky");
  } else {
    $(".header-inner").removeClass("sticky");
  }
});

var swiper = new Swiper(".mySwiperBanner", {
  slidesPerView: 1,

  direction: "vertical",
 /*  autoplay: {
    delay: 3000,
  }, */
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".ourServices", {
  spaceBetween: 60,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".mySwiperLastPosts", {
  direction: "vertical",
  autoplay: {
    delay: 1500,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 45,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
$(document).ready(function () {
  $(".services_toggle").click(function () {
    $(".services-menu").animate({ width: "toggle" });
    $(".list").delay("200").fadeToggle("slow");
  });
});

$(document).ready(function () {
  $(".hamburger-nav").click(function () {
    $(".nav-menu").animate({ width: "toggle" });
    $(".list").delay("200").fadeToggle("slow");
  });
});
/* $(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".nav-menu").animate({ width: "toggle" });
    $(".list").delay("200").fadeToggle("slow");
  });
}); */

$('a[href="#search"]').click(function () {
  event.preventDefault();
  $("#search-box").addClass("-open");
  setTimeout(function () {
    inputSearch.focus();
  }, 800);
});

$('a[href="#close"]').click(function () {
  event.preventDefault();
  $("#search-box").removeClass("-open");
});

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    // escape key maps to keycode `27`
    $("#search-box").removeClass("-open");
  }
});

$(document).ready(function () {
  $(".language-toggle").click(function () {
    $(".language-modal").animate({ width: "toggle" });
  });
});

/* $(function () {
  $("#datepicker").datepicker({
    autoclose: true,
    todayHighlight: true,
  });
}); */
/* $(function () {
  $("#datetimepicker").datepicker({
    dateFormat: "yy-mm-dd", //修改顯示順序
  });

  $("#timepicker").timepicker({
    timeFormat: "h:mm p", // 時間隔式
    interval: 30, //時間間隔
    minTime: "06", //最小時間
    maxTime: "23:55pm", //最大時間
    defaultTime: "06", //預設起始時間
    startTime: "01:00", // 開始時間
    dynamic: true, //是否顯示項目，使第一個項目按時間順序緊接在所選時間之後
    dropdown: true, //是否顯示時間條目的下拉列表
    scrollbar: false, //是否顯示捲軸
  });
}); */

var swiper = new Swiper(".mySwiperGalleryArea", {
  spaceBetween: 0,
  autoplay: {
    delay: 1500,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});
/* $("ul li.dropdown").hover(
  function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(500);
  },
  function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(500);
  }
); */
var swiper = new Swiper(".ourServices-section", {
  spaceBetween: 60,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
$("#preloader")
  .delay(1000)
  .fadeOut("slow", function () {
    $(this).remove();
  });

AOS.init();

/* ------------------------------------------------------------- */

$(".mega-menu .sub-item .dropdown-item").on("mouseover", function () {
  var imgPath = $(this).attr("data-image");

  $(".mega-menu .img-wrapper img").attr("src", imgPath);
});
/* ------------------------------------------------------------- */