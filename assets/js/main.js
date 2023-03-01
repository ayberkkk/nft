jQuery(document).ready(function ($) {
  /* Hesaplamalar */
  var windowh = $(window).outerHeight(); // Window Yüksekliği
  var windoww = $(window).width(); // Window Genişliği
  var windowh = $(window).height(); // Window Yüksekliği
  var headerh = $("header").outerHeight(); // Header Yüksekliği
  var headerToph = $("header .top").outerHeight(); //
  var footerh = $("footer").outerHeight(); //
  var bannerh = $("#manset").outerHeight(); //

  /* Hesaplamalar End */

  ////////////////// Classlar //////////////////

  /*----- Window Height -----*/
  //Windowh clasını alan öğeler, aktif olan monitör yüksekliğini alır.

  if (jQuery(".windowh-min").hasClass("windowh-min")) {
    $(".windowh-min").css({
      height: windowh + "px",
    });
  }
  /*----- Window Height End */
  /*----- Window Height + Scroll -----*/
  $(".windowh-s").css({
    height: windowh + "px",
    "overflow-y": "auto",
  });

  /* === FooterFixed === */
  $(".footerFixed").css({
    "min-height": windowh - (headerh + footerh) + "px",
  });
  /* === FooterFixed End === */
  /* === Content Fİxed === */
  $(".contentFixed").css({
    "min-height": windowh - headerh + "px",
  });

  /* === Content Fİxed End === */
  /*----- Window Height + Scroll End -----*/

  /* ===== Mobil Menü Açma ===== */
  $(".menuToggle").click(function () {
    $("header .menu").addClass("ml0");
    $("#closeToggle").fadeIn();
  });
  /* ===== Mobil Menü Açma End ===== */
  /* ===== Close Toggle ===== */
  $("#closeToggle").click(function () {
    $("header .menu").removeClass("ml0");
    $("#closeToggle").hide();
  });
  /* ===== Close Toggle End ===== */
  /* ========== Scroll Fixed Settings ========== */
  function scrollt() {
    var scrollHeight = jQuery(document).scrollTop();

    // Aşağı İnerken
    if (screen.width > 992) {
      if (scrollHeight > 100) {
        $("header").addClass("sticky");
      }
    }
    if (scrollHeight > 150) {
      $("header.contentPage").addClass("sticky");
    }
    // Aşağı İnerken End
    // Yukarı Çıkarken

    if (screen.width > 992) {
      if (scrollHeight < 100) {
        $("header").removeClass("sticky");
      }
    }
    // Yukarı Çıkarken End
    if (scrollHeight == 0) {
    }
  }
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      scrollt();
    } else {
      scrollt();
    }
    lastScrollTop = st;
  });
  /* ========== Scroll Fixed Settings End ========== */

  $(window).on("load", function () {
    $(".preloader").fadeOut("slow");
  });

  var btn = $("#topButton");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "300"
    );
  });
});

// Set the date we're counting down to
var countDownDate = new Date("March 11, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 0);

$('.viewAll-toggle').click(function () {
  $('#viewAllContent').fadeIn().addClass('center-h');
  $('#viewAllContent .article').load('.content')
});

/*---------- Sayfa yeniden boyutlandırma durumunda çalışacak scriptler ----------*/
jQuery(window).resize(function () { });
/*---------- Sayfa yeniden boyutlandırma durumunda çalışacak scriptler End ----------*/


