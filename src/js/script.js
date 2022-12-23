const body = document.body;

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  currentScroll === 0
    ? body.classList.remove("scroll-up")
    : body.classList.add("scroll-up");

  lastScroll = currentScroll;
});

const hamburgerMenu = document.querySelector(".ham");

hamburgerMenu.addEventListener("click", () => {
  const navList = document.querySelector(".nav-list");

  if (!hamburgerMenu.classList.contains("active")) {
    navList.style.cssText = "transform: translateY(-100%)";
    document.body.style.overflow = "visible";
  } else {
    navList.style.cssText = "transform: translateY(13rem)";
    document.body.style.overflow = "hidden";
  }

  const navListItem = document.querySelectorAll(".nav-list-item");

  navListItem.forEach((item) => {
    item.addEventListener("click", () => {
      navList.style.cssText = "transform: translateY(-100%)";
      hamburgerMenu.classList.remove("active");
      document.body.style.overflow = "visible";
    });
  });
});
