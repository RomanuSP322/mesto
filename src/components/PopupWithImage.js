import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._image = this._popup.querySelector(".popup__image");
    this._imageTitle = this._popup.querySelector(".popup__image-title");
  }

  open(link, name) {
    super.open();    
    this._image.src = link;
    this._image.alt = name;
    this._imageTitle.innerText = name;
    this.setEventListeners();     
  }
}
