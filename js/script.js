$(function () {
  $(".twentytwenty-container").twentytwenty({ default_offset_pct: 0.5 });
});

const menuToggle = document.querySelector("#toggle-btn");
const navigation = document.querySelector(".nav-menu");
const headerInner = document.querySelector(".header-inner")
const listItem = document.querySelectorAll(".list-item");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
  headerInner.classList.toggle("bg-white")

  if (menuToggle.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
    menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
};
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

$(function () {
  $("#datetimepicker2").datetimepicker({
    format: "DD-MM-YYYY",
  });
});

domReady(() => {
  const elems = document.querySelectorAll(".ugb-video-popup");
  const openVideo = (el) => {
    if (BigPicture) {
      const videoID = el.getAttribute("data-video");
      const args = {
        el,
        noLoader: true,
      };
      if (videoID.match(/^\d+$/g)) {
        args["vimeoSrc"] = videoID;
      } else if (videoID.match(/^https?:\/\//g)) {
        args["vidSrc"] = videoID;
      } else {
        args["ytSrc"] = videoID;
      }
      BigPicture(args);
    }
  };
  elems.forEach((el) => {
    const a = el.querySelector(".modal-open-link");
    a.addEventListener("click", (ev) => {
      ev.preventDefault();
      openVideo(el);
    });
    a.addEventListener("touchend", (ev) => {
      ev.preventDefault();
      openVideo(el);
    });
  });
});

/** DO NOT COPY **/
function domReady(fn) {
  if (
    document.attachEvent
      ? document.readyState === "complete"
      : document.readyState !== "loading"
  ) {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 15) {
    $(".banner .img-wrapper").addClass("show");
  } else {
    $(".banner .img-wrapper").removeClass("show");
  }
});


