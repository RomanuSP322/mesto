export default class Card {
  constructor({ handleCardClick, handleDeleteCard, handlePutLike, handleDeleteLike }, item, id, selector) {
    this._name = item.name;
    this._link = item.link;
    this._id = item._id;
    this._selfId = id;
    this._likes = item.likes;
    this._owner = item.owner;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handlePutLike = handlePutLike;
    this._handleDeleteLike = handleDeleteLike;
  }

  _getTemplate() {
    const template = document
      .querySelector(this._selector)
      .content.querySelector(".place")
      .cloneNode(true);
    return template;

  };

  getCard() {
    this._card = this._getTemplate();
    const cardImage = this._card.querySelector(".place__image");
    const deleteCardButton = this._card.querySelector('.place__delete-button');
    this._card.querySelector(".place__title").innerText = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;
    const likesLength = this._likes.length;
    this.likeCounter(likesLength);

    if (this._owner._id === this._selfId) {
      deleteCardButton.classList.add('place__delete-button_active');
    }
    if (this._likes.some(elem => elem._id === this._selfId)) {
      this.like()
    };
    this._setEventListeners();
    return this._card;

  }

  likeCounter(likesLength) {
    const likeCounter = this._card.querySelector('.place__like-counter');
    likeCounter.textContent = likesLength;
  }

  delete() {
    this._card.remove();
    this._card = null;

  }

  like() {
    this._card.querySelector(".place__like-button")
      .classList.toggle("place__like-button_active");
  }

  _setEventListeners() {
    this._card
      .querySelector(".place__delete-button")
      .addEventListener("click", () => this._handleDeleteCard());
    this._card
      .querySelector(".place__like-button")
      .addEventListener("click", () => {
        const like = this._card.querySelector(".place__like-button");
        if (like.classList.contains('place__like-button_active')) {
          this._handleDeleteLike(this._card)
        } else {
          this._handlePutLike(this._card);
        }
      });
    this._card
      .querySelector(".place__image")
      .addEventListener("click", () => this._handleCardClick());
  };
}
