document.addEventListener("DOMContentLoaded", function () {
  // Handler when the DOM is fully loaded

  var menuState = false;
  var menuBtn = document.querySelector("#navi-toggle");
  var menu = document.querySelector(".navigation__background");

  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    menuState = !menuState;
    if (menuState == true) {
      menu.classList.add("active");
    } else {
      menu.classList.remove("active");
    }
  }
});
