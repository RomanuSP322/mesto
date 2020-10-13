const buttonOpenAddPopup = document.querySelector(".profile__add-button");
const buttonOpenEditPopup = document.querySelector(".profile__edit-button");
const buttonsClosePopup = document.querySelectorAll(".popup__close-button");

const editPopup = document.querySelector(".edit-popup");
const addPopup = document.querySelector(".add-popup");
const imagePopup = document.querySelector(".image-popup");

const editForm = document.querySelector(".popup__form__type_edit");
const addForm = document.querySelector(".popup__form__type_add");

const cards = document.querySelector(".places");
const template = document.querySelector(".card-template");

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
  const items = initialCards.map(element => getItems(element));
  cards.prepend(...items);
};

const getItems = (data) => {
  const card = template.content.cloneNode(true);
  card.querySelector('.place__title').innerText = data.name;
  card.querySelector('.place__image').src = data.link;
  
  const openImagePopup = () => {
    imagePopup.querySelector('.popup__image').src = data.link;
    imagePopup.querySelector('.popup__image-title').innerText = data.name;
    imagePopup.classList.add("popup_is-opened");
  };

  const buttonDelete = card.querySelector(".place__delete-button");

  buttonDelete.addEventListener('click', (evt) => evt.target.closest('.place').remove());
  card.querySelector('.place__like-button').addEventListener('click', (evt) => evt.target.classList.toggle('place__like-button_active'));
  card.querySelector('.place__image').addEventListener('click', openImagePopup);

  return card;
};

renderCards();

const openEditPopup = () => {
  editPopup.classList.add("popup_is-opened");
  nameInput.value = profileTittle.textContent;
  jobInput.value = profileSubtittle.textContent;
};

const openAddPopup = () => {
  addPopup.classList.add("popup_is-opened");
  titleInput.value = '';
  urlInput.value = '';
};

const closePopup = (evt) => {
  const openedPopup = evt.target.closest(".popup");
  openedPopup.classList.remove("popup_is-opened");
};

const editFormSubmit = (evt) => {
  evt.preventDefault();
  profileTittle.textContent = nameInput.value;
  profileSubtittle.textContent = jobInput.value;

  closePopup(evt);
};

const addFormSubmit = (evt) => {
  evt.preventDefault();
  const item = getItems({
    name: titleInput.value,
    link: urlInput.value
  });

  cards.prepend(item);

  closePopup(evt);
}

buttonsClosePopup.forEach((buttonClose) => buttonClose.addEventListener(`click`, closePopup));
buttonOpenEditPopup.addEventListener("click", openEditPopup);
buttonOpenAddPopup.addEventListener("click", openAddPopup);

editForm.addEventListener('submit', editFormSubmit);
addForm.addEventListener('submit', addFormSubmit);