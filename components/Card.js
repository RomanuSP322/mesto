import {imagePopup, openPopup} from './index.js';

export class Card {
  constructor(name, link, selector) {
    this._name = name;
    this._link = link;
    this._selector = selector
  }

  _getTemplate = () => {
    const template = document.querySelector(this._selector).content.querySelector('.place').cloneNode(true);
    return template;
  };

  getCard() {
    this._card = this._getTemplate();
    const cardImage = this._card.querySelector('.place__image');
    this._card.querySelector('.place__title').innerText = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._setEventListeners();
    return this._card;
  }
  
  _delete() {
    this._card.remove();
    this._card = null;   
  };

  _like() {
    this._card.querySelector('.place__like-button').classList.toggle('place__like-button_active');
  };

  _open = () => {
    const imagePopupPicture = imagePopup.querySelector('.popup__image');
    imagePopupPicture.src = this._link;
    imagePopupPicture.alt = this._name;
    imagePopup.querySelector('.popup__image-title').innerText = this._name;
    openPopup(imagePopup);
  };

  _setEventListeners = () => {
    this._card.querySelector('.place__delete-button').addEventListener('click', () => this._delete());
    this._card.querySelector('.place__like-button').addEventListener('click', () => this._like());
    this._card.querySelector('.place__image').addEventListener('click', () => this._open());
  };

}