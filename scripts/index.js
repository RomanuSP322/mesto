import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';

const validatorConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__form-item_state_invalid'
};

const buttonOpenAddPopup = document.querySelector(".profile__add-button");
const buttonOpenEditPopup = document.querySelector(".profile__edit-button");
const buttonsClosePopup = document.querySelectorAll(".popup__close-button");

const popups = Array.from(document.querySelectorAll(".popup"));
const editPopup = document.querySelector(".edit-popup");
const addPopup = document.querySelector(".add-popup");
export const imagePopup = document.querySelector(".image-popup");

const editForm = document.querySelector(".popup__form__type_edit");
const addForm = document.querySelector(".popup__form__type_add");

const cards = document.querySelector(".places");
const cardTemplate = ".card-template";

const profileTittle = document.querySelector(".profile__tittle");
const profileSubtittle = document.querySelector(".profile__subtittle");
const nameInput = editPopup.querySelector(".popup__form-item_type_name");
const jobInput = editPopup.querySelector(".popup__form-item_type_about");
const titleInput = addPopup.querySelector(".popup__form-item_type_title");
const urlInput = addPopup.querySelector(".popup__form-item_type_img-url");

const initialCards = [
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

const renderCards = () => {
  initialCards.forEach((element) => { 
    const card = new Card(element.name, element.link, cardTemplate);
    cards.prepend(card.getCard())
  });
};

renderCards();

export const openPopup = (closedPopup) => {
  closedPopup.classList.add("popup_is-opened");
  document.addEventListener('keydown', escHandler);  
};

const closePopup = (openedPopup) => {
  openedPopup.classList.remove("popup_is-opened");
  document.removeEventListener('keydown', escHandler); 
};

const escHandler = (evt) => {
    if (evt.key === 'Escape')  {
    const openedPopup = document.querySelector(".popup_is-opened");     
    closePopup(openedPopup);
  }};

const editFormSubmit = (evt) => {
  evt.preventDefault();
  profileTittle.textContent = nameInput.value;
  profileSubtittle.textContent = jobInput.value;
  closePopup(editPopup);
};

const addFormSubmit = (evt) => {
  evt.preventDefault();
  const newCard = new Card(titleInput.value, urlInput.value, cardTemplate);
  const item = newCard.getCard();

  cards.prepend(item);
  closePopup(addPopup);
  
};

const onClickPopupBackground = (evt) => {
  const openedPopup = evt.target.closest(".popup");
  if (evt.target === evt.currentTarget) {  
    closePopup(openedPopup);
}};

buttonsClosePopup.forEach((buttonClose) =>
  buttonClose.addEventListener(`click`, (evt) => {
    const openedPopup = evt.target.closest(".popup");
    closePopup(openedPopup)
  }));


buttonOpenEditPopup.addEventListener("click", () => {
  nameInput.value = profileTittle.textContent;
  jobInput.value = profileSubtittle.textContent;
  openPopup(editPopup);
});

buttonOpenAddPopup.addEventListener("click", () => {
  titleInput.value = '';
  urlInput.value = '';
  openPopup(addPopup);
});

editForm.addEventListener('submit', editFormSubmit);
addForm.addEventListener('submit', addFormSubmit);

popups.forEach((popup) => {popup.addEventListener('click', onClickPopupBackground)})

const editValidator = new FormValidator(validatorConfig, editForm);
editValidator.enableValidation();

const addValidator = new FormValidator(validatorConfig, addForm);
addValidator.enableValidation();



