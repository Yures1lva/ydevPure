(function () {
  "use strict";

  // menu hamburguer
  var $btnMenu = document.getElementById("btn-menu");

  $btnMenu.addEventListener("click", toggleMenu);
  $btnMenu.addEventListener("touchstart", toggleMenu);

  function toggleMenu(event) {
    // tratando chamada dupla de envento com o preventDefault
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active-menu");

    const active = nav.classList.contains("active-menu");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else if (!active) {
      event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
  }

  var $clickMenu = document.getElementById("linkmenu");
  var $clickMenu2 = document.getElementById("linkmenu2");
  var $clickMenu3 = document.getElementById("linkmenu3");
  var $clickMenu4 = document.getElementById("linkmenu4");
  var $clickMenu5 = document.getElementById("linkmenu5");

  $clickMenu.addEventListener("click", function () {
    nav.classList.toggle("active-menu");
  });

  $clickMenu2.addEventListener("click", function () {
    nav.classList.toggle("active-menu");
  });

  $clickMenu3.addEventListener("click", function () {
    nav.classList.toggle("active-menu");
  });

  $clickMenu4.addEventListener("click", function () {
    nav.classList.toggle("active-menu");
  });
  $clickMenu5.addEventListener("click", function () {
    nav.classList.toggle("active-menu");
  });


  // faq........................................................

  var $a = document.getElementById("faqF");
  var $textFaq = document.getElementById("textFaq")

  $a.addEventListener("click", showContent)

  function showContent(){
    $textFaq.classList.toggle("off")
    $a.classList.toggle("titleQuestion")

  }


  // var $faq2 = document.getElementById("faqF2");
  // var $textFaq2 = document.getElementById("textFaq2")

  // $faq2.addEventListener("click", showContent)

  // function showContent(){
  //   $textFaq2.classList.toggle("off")
  //   $faq2.classList.toggle("titleQuestion")

  // }


})();
