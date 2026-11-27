const openDialogBtn = document.querySelector("#open-dialog");
const closeDialogBtn = document.querySelector("#close-dialog");
const profileDialog = document.querySelector("#profile-dialog");
const profileForm = document.querySelector("#profile-form");
const nameInput = document.querySelector("#name-input");
const profileName = document.querySelector("#profile-name");
const profileStatus = document.querySelector("#profile-status");
const dialogError = document.querySelector("#dialog-error");

openDialogBtn.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  dialogError.textContent = "";
  profileDialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  profileDialog.close();
  profileStatus.textContent = "Изменение имени отменено.";
});

profileDialog.addEventListener("cancel", () => {
  profileStatus.textContent = "Изменение имени отменено.";
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newName = nameInput.value.trim();
  if (newName === "") {
    dialogError.textContent = "Введите имя.";
    return;
  }

  profileName.textContent = newName;
  dialogError.textContent = "";
  profileDialog.close();
  profileStatus.textContent = "Имя профиля обновлено.";
});
