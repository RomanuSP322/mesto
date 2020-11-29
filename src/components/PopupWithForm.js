import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, { handleFormSubmit }) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._submit = this._submit.bind(this);
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll(".popup__form-item");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  _submit(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
  }  

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", this._submit);
  }
  
  _removeEventListeners() {
    super._removeEventListeners();
    this._popup.removeEventListener("submit", this._submit);
  }

  close() {
    super.close();
    this._popup.querySelector('.popup__form').reset();
  }
}
