// SELETORES
window.onload
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', (event) => {
    event.defaultPrevented()
})
INPUT_CHECKBOX.addEventListener('click', (event) => {
    event.defaultPrevented()
})
INPUT_TEXT.addEventListener('keypress', (event) => {
    event.key = 
})