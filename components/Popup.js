export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._closeButton = this._popup.querySelector(".popup__close-button");
  }

  open() {
    this._popup.classList.add("popup_is-opened");
    this.setEventListeners();
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
    this._closeButton.addEventListener("click", this.close.bind(this));
    this._popup.addEventListener(
      "click",
      this._onClickPopupBackground.bind(this)
    );
    document.addEventListener("keydown", this._handleEscClose.bind(this));
  }

  _removeEventListeners() {
    this._closeButton.removeEventListener("click", this.close.bind(this));
    this._popup.removeEventListener(
      "click",
      this._onClickPopupBackground.bind(this)
    );
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
  }
}
