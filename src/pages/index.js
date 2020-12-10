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
  avatarPopup,
  avatar,
  buttonOpenAvatar,
  avatarForm,
  submitDeletePopup
} from "../utils/constants.js";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
//import "./index.css";
import Api from "../components/Api.js"
import PopupWithSubmit from "../components/PopupWithSubmit.js";


const profileInfo = new UserInfo({
  name: profileTittle,
  about: profileSubtittle,
  avatar: avatar
});

const popupDeleteCard = new PopupWithSubmit(submitDeletePopup);

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

function createCard(item) {
  const card = new Card({
    handleCardClick: () => popupWithImage.open(item.link, item.name),
    handleDeleteCard: () => {
      popupDeleteCard.open();
      popupDeleteCard.setEventListeners();
      popupDeleteCard.setSubmitAction(() => {
        api.deleteCard(card._id)
          .then(() => {
            card.delete()
          })
          .catch((err) => {
            console.log(err);
          })
      })
    },
    handlePutLike: () => {
      api.putLike(item._id)
        .then((item) => {
          card.likeCounter(item.likes.length);
          card.like();
        })
        .catch((err) => {
          console.log(err);
        })
    },
    handleDeleteLike: () => {
      api.deleteLike(item._id)
        .then((item) => {
          card.likeCounter(item.likes.length);
          card.like();          
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
    item,
    profileInfo._selfId,
    cardTemplate
  );
  const cardElement = card.getCard();
  cardsList.addItem(cardElement);
}


const cardsList = new Section(
  { renderer: (item) => createCard(item) },
  cards
);

const avatarEditPopup = new PopupWithForm(avatarPopup, {
  handleFormSubmit: (item) => {
    avatarEditPopup.renderLoading(true);
    api.editAvatar(item)
      .then((res) => {
        profileInfo.setUserInfo(res)
        avatarEditPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => avatarEditPopup.renderLoading(false))
  }
});

const profilePopup = new PopupWithForm(editPopup, {
  handleFormSubmit: (item) => {
    profilePopup.renderLoading(true);
    api.editProfile(item)
      .then((res) => {
        profileInfo.setUserInfo(res)
        profilePopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => profilePopup.renderLoading(false))
  }
});

const placePopup = new PopupWithForm(addPopup, {
  handleFormSubmit: (item) => {
    placePopup.renderLoading(true);
    api.editCard(item)
      .then((res) => {
        createCard(res);
        placePopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => placePopup.renderLoading(false))
  },
});


buttonOpenAvatar.addEventListener("click", () => {
  avatarValidator.clearErrors();
  avatarEditPopup.setEventListeners();
  avatarEditPopup.open();
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

const avatarValidator = new FormValidator(validatorConfig, avatarForm);
avatarValidator.enableValidation();

const editValidator = new FormValidator(validatorConfig, editForm);
editValidator.enableValidation();

const addValidator = new FormValidator(validatorConfig, addForm);
addValidator.enableValidation();
