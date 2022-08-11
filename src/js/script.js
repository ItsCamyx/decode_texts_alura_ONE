//#region criação das tags html e vinculação de tags
const container = document.getElementById("main-container");
const titleContainer = document.createElement("div");
titleContainer.classList.add("container-logo");
const logoImg = document.createElement("img");
logoImg.classList.add("logo");
logoImg.src = "./assets/logo.svg";
logoImg.alt = "Logo Alura";
titleContainer.appendChild(logoImg);
container.appendChild(titleContainer);
const middleContainer = document.createElement("div");
container.appendChild(middleContainer);
middleContainer.classList.add("middle-container");
const inputText = document.createElement("textarea");
inputText.classList.add("input-text-encrypt");
inputText.placeholder = "Digite seu texto aqui";
const containerImg = document.createElement("div");
containerImg.classList.add("container-img");
const attencionImg = document.createElement("img");
attencionImg.classList.add("attencion-img");
attencionImg.src = "./assets/attencion.svg";
const titleAttencion = document.createElement("div");
titleAttencion.classList.add("attencion-title");
titleAttencion.innerHTML = "Apenas letras minúsculas e sem acento.";
const containerBtn = document.createElement("div");
containerBtn.classList.add("container-btn");
const encryptBtn = document.createElement("button");
encryptBtn.setAttribute("id", "encrypt-btn");
encryptBtn.innerText = "Criptografar";
const decryptBtn = document.createElement("button");
decryptBtn.setAttribute("id", "decrypt-btn");
decryptBtn.innerText = "Descriptografar";
containerBtn.append(encryptBtn, decryptBtn);
containerImg.append(attencionImg, titleAttencion);
middleContainer.append(inputText, containerImg, containerBtn);
const containerTextResult = document.createElement("div");
containerTextResult.classList.add("container-text-result");
container.append(containerTextResult);
const boxText = document.createElement("div");
boxText.classList.add("text-result");
containerTextResult.append(boxText);
const imgText = document.createElement("img");
imgText.src = "./assets/find.svg";
imgText.classList.add("search-img");
const containerTexts = document.createElement("div");
containerTexts.classList.add("containerTexts");
const textResult = document.createElement("div");
textResult.classList.add("not-found-text");
textResult.innerText = "Nenhuma mensagem encontrada";
const messageRequired = document.createElement("div");
messageRequired.classList.add("message-required-text");
messageRequired.innerText =
  "Digite um texto que você deseja criptografar ou descriptografar.";
containerTexts.append(textResult, messageRequired);
boxText.append(imgText, containerTexts);
//#endregion

//#region Listener
