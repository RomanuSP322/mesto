import {
  validatorConfig,
  buttonOpenAddPopup,
  buttonOpenEditPopup,
  editPopup,
  addPopup,
  imagePopup,
  editForm,
  addForm,
  cards,  
  cardTemplate,
  profileTittle,
  profileSubtittle,
  nameInput,
  jobInput,
  titleInput,
  urlInput,
  initialCards,
} from "../utils/constants.js";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import "./index.css";


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
