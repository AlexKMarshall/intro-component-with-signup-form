//remove message when error fixed
//accessibility
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

  let errorText = parentFormField.querySelector(".error-text");
  if (!errorText) {
    errorText = document.createElement("div");
    errorText.className = "error-text";
    parentFormField.appendChild(errorText);
  }
  errorText.innerHTML = error;
};

const removeError = (field) => {
  const parentFormField = field.parentElement;
  parentFormField.classList.remove("error");
};
