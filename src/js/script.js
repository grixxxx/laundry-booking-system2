const body = document.body;

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  currentScroll === 0
    ? body.classList.remove("scroll-up")
    : body.classList.add("scroll-up");

  lastScroll = currentScroll;

  console.log(currentScroll);
});
