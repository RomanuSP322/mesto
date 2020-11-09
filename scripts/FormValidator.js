export class FormValidator {
  constructor(config, form) {
    this._formSelctor = form;
    this._inputSelector = config.inputSelector;
    this._submitButtonClass = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
  }


_showError(input) {
  const errorElement = this._formSelctor.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
  input.classList.add(this._inputErrorClass);
};

_hideError(input) {
  const errorElement = this._formSelctor.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
  input.classList.remove(this._inputErrorClass);
};

_checkInputValidity(input) {
  if (input.checkValidity()) {
    this._hideError(input);
  } else {
    this._showError(input);
  }
};

_toggleButtonState(buttonElement) {
  if (this._formSelctor.checkValidity()) {
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.disabled = false;
  } else {
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.disabled = true;
  }
};

_setEventListeners = () => {
  const inputElements = Array.from(this._formSelctor.querySelectorAll(this._inputSelector));
  const buttonElement = this._formSelctor.querySelector(this._submitButtonClass);

  inputElements.forEach((input) => {
    input.addEventListener('input', () => {
      this._checkInputValidity(input);
      this._toggleButtonState(buttonElement);
    });
  });

  this._toggleButtonState(buttonElement);

};

enableValidation = () => {
  this._setEventListeners();
};
};


