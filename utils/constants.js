export const validatorConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__form-item_state_invalid'
};

export const buttonOpenAddPopup = document.querySelector(".profile__add-button");
export const buttonOpenEditPopup = document.querySelector(".profile__edit-button");
export const buttonsClosePopup = document.querySelectorAll(".popup__close-button");

export const popups = Array.from(document.querySelectorAll(".popup"));
export const editPopup = document.querySelector(".edit-popup");
export const addPopup = document.querySelector(".add-popup");
export const imagePopup = document.querySelector(".image-popup");

export const editForm = document.querySelector(".popup__form__type_edit");
export const addForm = document.querySelector(".popup__form__type_add");

export const cards = document.querySelector(".places");
export const cardTemplate = ".card-template";

export const profileTittle = document.querySelector(".profile__tittle");
export const profileSubtittle = document.querySelector(".profile__subtittle");
export const nameInput = editPopup.querySelector(".popup__form-item_type_name");
export const jobInput = editPopup.querySelector(".popup__form-item_type_about");
export const titleInput = addPopup.querySelector(".popup__form-item_type_title");
export const urlInput = addPopup.querySelector(".popup__form-item_type_img-url");

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];