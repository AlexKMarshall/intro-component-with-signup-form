//show border on blur
//show icon on blur
//show message on blur
//show correct message
//remove message when error fixed
//prevent submission if form invalid

const form = document.querySelector("form");
form.setAttribute("novalidate", true);

const hasError = (field) => {
  if (field.validity.valid) return;
  if (field.validity.valueMissing) {
    return `${field.placeholder} cannot be empty`;
  }
};

const showError = (field, error) => {
  const parentFormField = field.parentElement;
  parentFormField.classList.add("error");
};

document.addEventListener(
  "blur",
  (event) => {
    const error = hasError(event.target);
    if (error) showError(event.target, error);
  },
  true
);
