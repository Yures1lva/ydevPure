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


  // faq........................................................ coisa feio da mzr mas fds funciona

  var $q1 = document.getElementById("Q1");
  var $q2 = document.getElementById("Q2")
  var $q3 = document.getElementById("Q3")
  var $q4 = document.getElementById("Q4")
  var $q5 = document.getElementById("Q5")

  $q1.addEventListener("click", q1f)
  $q2.addEventListener("click", q2f)
  $q3.addEventListener("click", q3f)
  $q4.addEventListener("click", q4f)
  $q5.addEventListener("click", q5f)


  function q1f(){
    $q1.classList.toggle("titleQuestion")
    $q2.classList.remove("titleQuestion")
    $q3.classList.remove("titleQuestion")
    $q4.classList.remove("titleQuestion")
    $q5.classList.remove("titleQuestion")
  }
  

  function q2f(){
    $q2.classList.toggle("titleQuestion")
    $q1.classList.remove("titleQuestion")
    $q3.classList.remove("titleQuestion")
    $q4.classList.remove("titleQuestion")
    $q5.classList.remove("titleQuestion")
  }

  function q3f(){
    $q3.classList.toggle("titleQuestion")
    $q1.classList.remove("titleQuestion")
    $q2.classList.remove("titleQuestion")
    $q4.classList.remove("titleQuestion")
    $q5.classList.remove("titleQuestion")
  }
  function q4f(){
    $q4.classList.toggle("titleQuestion")
    $q1.classList.remove("titleQuestion")
    $q2.classList.remove("titleQuestion")
    $q3.classList.remove("titleQuestion")
    $q5.classList.remove("titleQuestion")
  }
  function q5f(){
    $q5.classList.toggle("titleQuestion")
    $q1.classList.remove("titleQuestion")
    $q2.classList.remove("titleQuestion")
    $q3.classList.remove("titleQuestion")
    $q4.classList.remove("titleQuestion")
  }
  

// form ...............................................................


// document.getElementById("formQuestion").addEventListener('submit', handleSubmit)

// const handleSubmit = (event) =>{
//   event.preventDefault();


// }

})();
