"use strict";

const dialog = document.querySelector("#profile-dialog");
const openButton = document.querySelector("#open-dialog");
const closeButton = document.querySelector("#close-dialog");
const form = document.querySelector("#profile-form");
const input = document.querySelector("#name-input");
const profileName = document.querySelector("#profile-name");
const status = document.querySelector("#profile-status");
const dialogError = document.querySelector("#dialog-error");

// Задание 1. На click кнопки openButton откройте dialog через showModal().

openButton.addEventListener("click", () => {
    input.value = profileName.textContent;
    dialogError.textContent = "";
    dialog.showModal();
});

// Задание 2. На click кнопки closeButton закройте dialog через close().

closeButton.addEventListener("click", () => {
    dialog.close();
});

// Задание 3. На submit формы отмените перезагрузку страницы.
// Если input.value.trim() не пустой, обновите profileName.textContent,
// измените status и закройте dialog. Иначе покажите подсказку в dialogError.

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = input.value.trim();
    if (name === "") {
        dialogError.textContent = "Введите имя, пустое не подойдет";
        return;
    }
    profileName.textContent = name;
    status.textContent = "Имя изменено";
    dialog.close();
});

// Задание 4. Проверьте Escape: для <dialog> браузер уже умеет закрывать окно.
// Дополнительный обработчик Escape писать не нужно.
