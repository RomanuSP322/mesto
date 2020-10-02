
let buttonOpenPopup = document.querySelector(".profile__edit-button");
let buttonClosePopup = document.querySelector(".popup__close-button");
let popup = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");
let profileTittle = document.querySelector(".profile__tittle");
let profileSubtittle = document.querySelector(".profile__subtittle");
let nameInput = formElement.querySelector(".popup__form-item_type_name");
let jobInput = formElement.querySelector(".popup__form-item_type_about");

function popupToggle() {
  popup.classList.toggle("popup_is-opened")
  if (popup.classList.contains('popup_is-opened')) {
    nameInput.value = profileTittle.textContent;
    jobInput.value = profileSubtittle.textContent;
  }
  
}

function onClickPopupBackground(event) {
  if (event.target !== event.currentTarget) {
    return
  }
  popupToggle()
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileTittle.textContent = nameInput.value;
  profileSubtittle.textContent = jobInput.value;

  popupToggle()
}

buttonOpenPopup.addEventListener("click", popupToggle);
buttonClosePopup.addEventListener("click", popupToggle);
popup.addEventListener('click', onClickPopupBackground);
formElement.addEventListener('submit', formSubmitHandler); 
