const buttonOpenPopup = document.querySelector(".profile__edit-button");
const buttonClosePopup = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");

function popupToggle() {
  popup.classList.toggle("popup_is-opened")
}

buttonOpenPopup.addEventListener("click", popupToggle);
buttonClosePopup.addEventListener("click", popupToggle);
console.log('halo')