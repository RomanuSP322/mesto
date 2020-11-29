export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._closeButton = this._popup.querySelector(".popup__close-button");
    this._handleEscClose = this._handleEscClose.bind(this);
    this._onClickPopupBackground = this._onClickPopupBackground.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this._popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose)
  }

  close() {
    this._popup.classList.remove("popup_is-opened");
    this._removeEventListeners();
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  _onClickPopupBackground(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }
  setEventListeners() {
    this._closeButton.addEventListener("click", this.close);
    this._popup.addEventListener(
      "click",
      this._onClickPopupBackground);    
  }

  _removeEventListeners() {
    this._closeButton.removeEventListener("click", this.close);
    this._popup.removeEventListener(
      "click",
      this._onClickPopupBackground);
    document.removeEventListener("keydown", this._handleEscClose);
  }
}
