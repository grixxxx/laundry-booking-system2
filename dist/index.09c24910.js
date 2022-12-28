var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
if (a.indexOf("html") > -1) //Check of html String in URL.
url = url.substring(0, newURL.lastIndexOf("."));
const body = document.body;
let lastScroll = 0;
window.addEventListener("scroll", ()=>{
    const currentScroll = window.pageYOffset;
    currentScroll === 0 ? body.classList.remove("scroll-up") : body.classList.add("scroll-up");
    if (currentScroll <= lastScroll) body.classList.remove("scroll-up");
    lastScroll = currentScroll;
});
const hamburgerMenu = document.querySelector(".ham");
hamburgerMenu.addEventListener("click", ()=>{
    const navList = document.querySelector(".nav-list");
    const navListItem = document.querySelectorAll(".nav-list-item");
    if (!hamburgerMenu.classList.contains("active")) navList.style.cssText = "none";
    else navList.style.cssText = "transform: translateY(13rem);";
    navListItem.forEach((item)=>{
        item.addEventListener("click", ()=>{
            navList.style.cssText = "none";
            hamburgerMenu.classList.remove("active");
        });
    });
});
const loginModal = document.querySelector(".login-modal");
setInterval(()=>{
    loginModal.hasAttribute("open") ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
}, 500);
const loginButton = document.querySelector(".login-button").addEventListener("click", ()=>{
    loginModal.showModal();
});
const signupModal = document.querySelector(".signup-modal");
const signupButton = document.querySelector(".signup-button ").addEventListener("click", ()=>{
    signupModal.showModal();
});
const modalCloseButton = document.querySelectorAll("#modal-close");
modalCloseButton.forEach((close)=>{
    close.addEventListener("click", ()=>{
        const modal = document.querySelectorAll(".modal");
        modal.forEach((modal)=>{
            modal.close();
        });
    });
});

//# sourceMappingURL=index.09c24910.js.map
