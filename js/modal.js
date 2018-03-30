var modalLink = document.querySelector(".button--map");
var modalWrapper =  document.querySelector(".modal");
var modal =  document.querySelector(".modal__container");
var modalClose = document.querySelector(".modal__form-close");
var form = modalWrapper.querySelector("form");
var login = modalWrapper.querySelector(".modal__form-name input");
var mail = modalWrapper.querySelector(".modal__form-mail input");
var storage = localStorage.getItem("login");

modalLink.addEventListener("click", function(event) {
  event.preventDefault();
  modalWrapper.classList.add("modal--show");
  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
    login.focus();
  }
});

modalClose.addEventListener("click", function(event) {
  event.preventDefault();
  modalWrapper.classList.remove("modal--show");
  modal.classList.remove("modal__container--error");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !mail.value) {
    event.preventDefault();
    modal.classList.remove("modal__container--error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal__container--error");
  }
  else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modalWrapper.classList.contains("modal--show")) {
      modalWrapper.classList.remove("modal--show");
      modal.classList.remove("modal__container--error");
    }
  }
});
