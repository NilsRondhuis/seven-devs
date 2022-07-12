import refs from "./refs";

refs.menuBtn.addEventListener("click", onClickMenuBtn);

function onClickMenuBtn() {
  refs.iconMenu.classList.toggle("visually-hidden");
  refs.iconArrow.classList.toggle("visually-hidden");
  refs.mainNav.classList.toggle("main-nav__is-show");
  refs.backdropShared.classList.toggle("backdrop-shared__is-show");
}

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("backdrop-shared")) {
    onClickMenuBtn();
  }
  return;
});
