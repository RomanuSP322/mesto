import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._submit = this._popup.querySelector(".popup__delete-button");   
  }


  
}