
const showError = (formElement, input, {inputErrorClass}) => {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
  input.classList.add(inputErrorClass);
};

const hideError = (formElement, input, {inputErrorClass}) => {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
  input.classList.remove(inputErrorClass);
};
const checkInputValidity = (formElement, input, {inputErrorClass}) => {
  if (input.checkValidity()) {
      hideError(formElement, input, {inputErrorClass});
  } else {
      showError(formElement, input, {inputErrorClass});
  }
};

const toggleButtonState = (formElement, buttonElement, {inactiveButtonClass}) => {
  if (formElement.checkValidity()) {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
  } else {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
  }
};

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass}) => {
  const inputElements = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputElements.forEach((input) => {
      input.addEventListener('input', (evt) => {
          checkInputValidity(formElement, evt.target, {inputErrorClass});
          toggleButtonState(formElement, buttonElement, {inactiveButtonClass});
      });
  });
  
  toggleButtonState(formElement, buttonElement, {inactiveButtonClass});
  
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass}) => {
  const formElements = Array.from(document.querySelectorAll(formSelector));

  formElements.forEach(form => {
      form.addEventListener('submit', (evt) => {
          evt.preventDefault();
      });

      setEventListeners(form, {formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass});
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__form-item_state_invalid'  
});
