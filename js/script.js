$(function () {
  $(".twentytwenty-container").twentytwenty({ default_offset_pct: 0.5 });
});

/* const menuToggle = document.querySelector("#toggle-btn");
const navigation = document.querySelector(".nav-menu");
const headerInner = document.querySelector(".header-inner");
const listItem = document.querySelectorAll(".list-item");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
  headerInner.classList.toggle("bg-white");

  if (menuToggle.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
    menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
}; */
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
  autoplay: {
    delay: 3000,
  },
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

$(function () {
  $("#datepicker").datepicker({
    autoclose: true,
    todayHighlight: true,
  });
  /* .datepicker("update", new Date()); */
});

$("#preloader")
  .delay(1000)
  .fadeOut("slow", function () {
    $(this).remove();
  });

AOS.init();
