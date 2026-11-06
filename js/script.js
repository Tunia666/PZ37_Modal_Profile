"use strict";

const dialog = document.querySelector("#profile-dialog");
const openButton = document.querySelector("#open-dialog");
const closeButton = document.querySelector("#close-dialog");
const form = document.querySelector("#profile-form");
const input = document.querySelector("#name-input");
const profileName = document.querySelector("#profile-name");
const status = document.querySelector("#profile-status");
const dialogError = document.querySelector("#dialog-error");

openButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});
form.addEventListener('submit', (event) => {
    event.preventDefault();   
    const trimmedValue = input.value.trim();
    
    if (trimmedValue !== '') {
        profileName.textContent = trimmedValue;
        dialogError.textContent = '';
        dialog.close();
    } else {
        dialogError.textContent = 'Имя не может быть пустым';
    }
});
const cancelButton = document.querySelector('#cancel-dialog');
if (cancelButton) {
    cancelButton.addEventListener('click', () => {
        dialog.close();
    });
}
