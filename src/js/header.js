import refs from "./refs";

window.addEventListener("scroll", onFixedHeaderTop);

function onFixedHeaderTop() {
  const rect = document.body.getBoundingClientRect();
  if (rect.y < -100) {
    refs.header.classList.add("header__is-fixed");
    refs.mainNav.classList.add("main-nav__is-fixed");
  } else {
    refs.header.classList.remove("header__is-fixed");
    refs.mainNav.classList.remove("main-nav__is-fixed");
  }
}
