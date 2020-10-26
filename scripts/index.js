const buttonOpenAddPopup = document.querySelector(".profile__add-button");
const buttonOpenEditPopup = document.querySelector(".profile__edit-button");
const buttonsClosePopup = document.querySelectorAll(".popup__close-button");


const Popups = Array.from(document.querySelectorAll(".popup"));
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
  const items = initialCards.map(element => getItem(element));
  cards.prepend(...items);
};

const getItem = (data) => {
  const card = template.content.cloneNode(true);
  const cardImage = card.querySelector('.place__image');
  card.querySelector('.place__title').innerText = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  const buttonDelete = card.querySelector(".place__delete-button");

  buttonDelete.addEventListener('click', (evt) => evt.target.closest('.place').remove());
  card.querySelector('.place__like-button').addEventListener('click', (evt) => evt.target.classList.toggle('place__like-button_active'));
  cardImage.addEventListener('click', () => {
    const imagePopupPicture = imagePopup.querySelector('.popup__image');
    imagePopupPicture.src = data.link;
    imagePopupPicture.alt = data.name;
    imagePopup.querySelector('.popup__image-title').innerText = data.name;
    openPopup(imagePopup);
  });

  return card;
};

renderCards();

const openPopup = (closedPopup) => {
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
  const item = getItem({
    name: titleInput.value,
    link: urlInput.value
  });

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

Popups.forEach((popup) => {popup.addEventListener('click', onClickPopupBackground)})



