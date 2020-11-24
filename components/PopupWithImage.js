import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = popupSelector;
    this._image = this._popup.querySelector(".popup__image");
    this._imageTitle = this._popup.querySelector(".popup__image-title");    
  }

  open(link, title) {
    super.open();
    this._image.src = link;
    this._image.alt = title;
    this._imageTitle = title;
  }
}