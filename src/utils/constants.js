const validatorConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-item",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_invalid",
  inputErrorClass: "popup__form-item_state_invalid",
};

const buttonOpenAddPopup = document.querySelector(".profile__add-button");
const buttonOpenEditPopup = document.querySelector(".profile__edit-button");
const buttonOpenAvatar = document.querySelector(".profile__avatar-button");
const avatar = document.querySelector(".profile__avatar");


const editPopup = document.querySelector(".edit-popup");
const addPopup = document.querySelector(".add-popup");
const imagePopup = document.querySelector(".image-popup");
const avatarPopup = document.querySelector(".avatar-popup");
const submitDeletePopup = document.querySelector(".delete-popup");

const editForm = document.querySelector(".popup__form__type_edit");
const addForm = document.querySelector(".popup__form__type_add");
const avatarForm = document.querySelector(".popup__form__type_avatar");

const cards = document.querySelector(".places");
const cardTemplate = ".card-template";

const profileTittle = document.querySelector(".profile__tittle");
const profileSubtittle = document.querySelector(".profile__subtittle");
const nameInput = editPopup.querySelector(".popup__form-item_type_name");
const jobInput = editPopup.querySelector(".popup__form-item_type_about");
const titleInput = addPopup.querySelector(".popup__form-item_type_title");
const urlInput = addPopup.querySelector(".popup__form-item_type_img-url");

const apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-18/',
  headers: {
    authorization: 'a0d383a9-c142-4537-8a74-fa13ea684d91',
    'Content-Type': 'application/json'
  }
}


export {
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
  avatar,
  apiConfig,
  avatarPopup,
  buttonOpenAvatar,
  avatarForm,
  submitDeletePopup  
};
