
const newHeader = document.createElement("h1");


newHeader.id = "victory";


newHeader.textContent = "Bravin is the champion";


const mainElement = document.getElementById("main");


if (mainElement) {
  mainElement.remove();
}

const existingHeader = document.getElementById("main");

if (existingHeader) {
  existingHeader.replaceWith(newHeader);
}
