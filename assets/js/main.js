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
  /* ========== Bubble Box Kapatma ========== */
  $(".closeBox").click(function () {
    $(".bubbleBox ").hide().removeClass("op10");
    setTimeout(function () {
      $(".bubbleBox ").removeClass("center-h");
    }, 500);
  });
  /* ========== Bubble Box Kapatma End ========== */

  /* Bootstrap Menü Hover Open Settings */
  /* Dropdown */
  $("ul.nav li.dropdown").hover(
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(300);
    },
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(300);
    }
  );
  /* Dropdown End */
  /* Dropup */
  $("ul.nav li.dropup").hover(
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(300);
    },
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(300);
    }
  );
  /* Dropup End */
  /* Bootstrap Menü Hover Open Settings End */
  /* Default Navbar */
  var headerrowh = $("header .row").outerHeight(); //

  $("nav#default-nav #nav-toggle").click(function () {
    //$('nav#default-nav').toggleClass('h100');
    //$('nav#default-nav .default-navbar').toggleClass('mt0');
    var mainulh = $("nav#default-nav ul.mainul").outerHeight(); //
    $("nav#default-nav").css({
      height: mainulh + "px",
    });
    $(".genelmaske").fadeIn();
  });
  $(".genelmaske").click(function () {
    $("nav#default-nav").attr("style", " ");
    $(this).fadeOut();
  });

  $(".subcontent").css({
    top: headerrowh + "px",
  });

  $(".subcontent-mega").css({
    top: headerrowh + "px",
  });

  $(".dropcontent").hover(
    function () {
      var subh = $(".subcontent ul", this).outerHeight(); //
      $(".subcontent", this).css({
        height: subh + "px",
      });
    },
    function () {
      $(".subcontent", this).css({
        height: "0px",
      });
    }
  );

  $(".dropcontent-mega").hover(
    function () {
      var submegah = $(".subcontent-mega ul", this).outerHeight(); //
      $(".subcontent-mega", this).css({
        height: submegah + "px",
      });
      $("body").addClass("owh");
      $("header").toggleClass("z1 z11");
      $(".genelmaske").fadeIn();
    },
    function () {
      $(".subcontent-mega", this).css({
        height: "0px",
      });
      $("body").removeClass("owh");
      $("header").toggleClass("z1 z11");
      $(".genelmaske").fadeOut("fast");
    }
  );

  if (screen.width < 992) {
    $(".dropcontent").click(function () {
      var dropcontenth = $(".subcontent ul", this).outerHeight(); //
      var mainulh = $("nav#default-nav ul.mainul").outerHeight(); //

      $("nav#default-nav").css({
        height: mainulh + dropcontenth + "px",
      });
    });

    $(".dropcontent-mega").click(function () {
      $(".subcontent-mega", this).toggleClass("owy-s");
      $(".subcontent-mega", this).css({
        height: "80vh",
        "z-index": "50",
      });
    });
  }
  /* Default Navbar End */
  /* ========== Yeni Nesil Menü ========== */
  $(".drop").hover(
    function () {
      var subcontenth = $(".sub-content", this).outerHeight(); //
      var toggleh = $(".toggle", this).outerHeight(); //
      if (screen.width > 992) {
        var imgContenth = $(".imgContent").height();
        $(".pushTop").css({
          marginBottom: "+" + imgContenth + "px",
        });
      }
      $(".content").addClass("gray");
      $("#odeme1").addClass("gray");
      $(".toggle").removeClass("active");
      $(this).find(".toggle").addClass("active");
      $(this)
        .find(".sub")
        .css({
          height: subcontenth + "px",
          top: toggleh + "px",
        });
    },
    function () {
      $(this).find(".sub").css({
        height: "0px",
      });
      $(".content").removeClass("gray");
      $("#odeme1").removeClass("gray");
      $(".toggle").removeClass("active");
    }
  );
  if (screen.width > 992) {
    var imgContenth = $(".imgContent").height();
    $(".pushTop").css({
      marginBottom: "+" + imgContenth + "px",
    });
  }
  /* ========== Yeni Nesil Menü End ========== */

  /* ===== Header Account ===== */
  $(".account-toggle").click(function () {
    var accountlineh = $("#accountline .container").outerHeight(); //
    $(this).addClass("active");
    $("#accountline")
      .addClass("pt10 pb10")
      .css({
        height: accountlineh + 20 + "px",
      });
    $("header .navContent").removeClass("ml0");
    $("#closeToggle").fadeOut();
    $("body").addClass("accountOn");
    $("header .nav").removeClass("ml0");
    $("#minisepet").removeClass("mr0");
    //$('header').removeClass('lt0').addClass('lt80');
  });
  $(".accountline-close").click(function () {
    $(".account-toggle").removeClass("active");
    $("#accountline").removeClass("pt10 pb10").attr("style", " ");
    $("body").removeClass("accountOn");
    $(".content").removeClass("gray");
    $("header").addClass("lt0").removeClass("lt80");
  });

  $("body").on("click", function () {
    if (jQuery("body").hasClass("accountOn")) {
    }
  });
  /* ===== Header Account End ===== */
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

/*---------- Sayfa yeniden boyutlandırma durumunda çalışacak scriptler ----------*/
jQuery(window).resize(function () {});
/*---------- Sayfa yeniden boyutlandırma durumunda çalışacak scriptler End ----------*/
