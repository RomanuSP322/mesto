import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor(popup) {
    super(popup);
    this._submit = this._popup.querySelector(".popup__save-button");   
  }
  
  setEventListeners() {
    this._submit.addEventListener('click', () => {
    this._handleSubmit();
    this.close();      
    });
    super.setEventListeners();   
  }

  setSubmitAction(submitAction) {
    this._handleSubmit = submitAction;
}

}