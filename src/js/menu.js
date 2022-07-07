import refs from "./refs";

refs.menuBtn.addEventListener("click", onClickMenuBtn);

function onClickMenuBtn() {
  refs.iconMenu.classList.toggle("visually-hidden");
  refs.iconArrow.classList.toggle("visually-hidden");
  refs.mainNav.classList.toggle("is-show");
}
