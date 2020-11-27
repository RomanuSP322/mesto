export default class FormValidator {
  constructor(config, form) {
    this._formElement = form;
    this._inputSelector = config.inputSelector;
    this._submitButtonClass = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
  }

  _showError(input) {
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  }

  _hideError(input) {
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    input.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity(input) {
    if (input.checkValidity()) {
      this._hideError(input);
    } else {
      this._showError(input);
    }
  }

  _toggleButtonState(buttonElement) {
    if (this._formElement.checkValidity()) {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    } else {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    }
  }

  _setEventListeners() {
    const inputElements = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._formElement.querySelector(
      this._submitButtonClass
    );

    inputElements.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState(buttonElement);
      });
    });

    this._toggleButtonState(buttonElement);
  };

  clearErrors() {
    const inputList = this._formElement.querySelectorAll(this._inputSelector);
    inputList.forEach((input) => {
      this._hideError(input);
    });
  }

  enableValidation() {
    this._setEventListeners();
  };
}
