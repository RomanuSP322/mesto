import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const validatorConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-item",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_invalid",
  inputErrorClass: "popup__form-item_state_invalid",
};

const buttonOpenAddPopup = document.querySelector(".profile__add-button");
const buttonOpenEditPopup = document.querySelector(".profile__edit-button");


const editPopup = document.querySelector(".edit-popup");
const addPopup = document.querySelector(".add-popup");
const imagePopup = document.querySelector(".image-popup");

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
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const profileInfo = new UserInfo({
  name: profileTittle,
  job: profileSubtittle,
});

const popupWithImage = new PopupWithImage(imagePopup);

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        { handleCardClick: () => popupWithImage.open(item.link, item.name) },
        item.name,
        item.link,
        cardTemplate
      );
      const cardElement = card.getCard();
      cardsList.addItem(cardElement);
    },
  },
  cards
);

cardsList.renderItems();

const profilePopup = new PopupWithForm(editPopup, {
  handleFormSubmit: (item) => {
    profileInfo.setUserInfo(item);
    profilePopup.close();
  },
});

const placePopup = new PopupWithForm(addPopup, {
  handleFormSubmit: (item) => {
    const card = new Card(
      { handleCardClick: () => popupWithImage.open(item.link, item.title) },
      item.title,
      item.link,
      cardTemplate
    );
    const cardElement = card.getCard();
    cards.prepend(cardElement);
    placePopup.close();
  },
});

buttonOpenEditPopup.addEventListener("click", () => {
  const info = profileInfo.getUserInfo();
  nameInput.value = info.name;
  jobInput.value = info.job;
  editValidator.clearErrors();
  profilePopup.open();
});

buttonOpenAddPopup.addEventListener("click", () => {
  titleInput.value = "";
  urlInput.value = "";
  addValidator.clearErrors();
  placePopup.open();
});

const editValidator = new FormValidator(validatorConfig, editForm);
editValidator.enableValidation();

const addValidator = new FormValidator(validatorConfig, addForm);
addValidator.enableValidation();