//prevent submission if form invalid

const form = document.querySelector("form");
form.setAttribute("novalidate", true);

document.addEventListener(
  "blur",
  (event) => {
    const error = hasError(event.target);
    if (error) {
      showError(event.target, error);
      return;
    }

    removeError(event.target);
  },
  true
);

const hasError = (field) => {
  if (field.validity.valid) return;
  if (field.validity.valueMissing) {
    return `${field.placeholder} cannot be empty`;
  }
  if (field.validity.patternMismatch) {
    return `Looks like this is not an email`;
  }
};

const showError = (field, error) => {
  const parentFormField = field.parentElement;
  parentFormField.classList.add("error");

  const fieldId = field.id || field.name;
  const errorId = `error-for-${fieldId}`;

  let errorMessage = parentFormField.querySelector(`#${errorId}`);
  if (!errorMessage) {
    errorMessage = document.createElement("div");
    errorMessage.id = errorId;
    errorMessage.className = "error-text";
    parentFormField.appendChild(errorMessage);
  }
  errorMessage.innerHTML = error;

  field.setAttribute("aria-describedby", errorId);
};

const removeError = (field) => {
  const parentFormField = field.parentElement;
  parentFormField.classList.remove("error");

  field.removeAttribute("aria-describedby");

  const fieldId = field.id || field.name;
  const errorId = `error-for-${fieldId}`;

  const errorMessage = parentFormField.querySelector(`#${errorId}`);

  if (!errorMessage) return;

  errorMessage.innerHTML = "";
};
