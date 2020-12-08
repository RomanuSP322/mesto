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
  apiConfig,  
  avatar
} from "../utils/constants.js";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
//import "./index.css";
import Api from "../components/Api.js"


const profileInfo = new UserInfo({
  name: profileTittle,
  about: profileSubtittle,
  avatar: avatar 
});


const popupWithImage = new PopupWithImage(imagePopup);

const api = new Api(apiConfig);

api.getUserInfo()
  .then((res) => {
    profileInfo.setUserInfo(res);
  })

  api.getCards()
  .then((res) => {
    cardsList.renderItems(res);
  })

const cardsList = new Section(
  {    
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



const profilePopup = new PopupWithForm(editPopup, {
  handleFormSubmit: (item) => {
    api.editProfile(item)
    .then((res) => {
      profileInfo.setUserInfo(res)
      profilePopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
  }
});

const placePopup = new PopupWithForm(addPopup, {
  handleFormSubmit: (item) => {
    api.editCard(item)
    .then((res) => {
      const card = new Card(
        { handleCardClick: () => popupWithImage.open(res.link, res.name) },
        res.name,
        res.link,
        cardTemplate
      );
      const cardElement = card.getCard();    
      cards.prepend(cardElement);
      placePopup.close();    
    })
    

  },
});





buttonOpenEditPopup.addEventListener("click", () => {
  const info = profileInfo.getUserInfo();
  nameInput.value = info.name;
  jobInput.value = info.about;
  editValidator.clearErrors();
  profilePopup.setEventListeners();
  profilePopup.open();
});

buttonOpenAddPopup.addEventListener("click", () => {
  addValidator.clearErrors();
  placePopup.setEventListeners();  
  placePopup.open();
});

const editValidator = new FormValidator(validatorConfig, editForm);
editValidator.enableValidation();

const addValidator = new FormValidator(validatorConfig, addForm);
addValidator.enableValidation();
