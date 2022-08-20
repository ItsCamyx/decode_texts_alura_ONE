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
const textResult = document.createElement("textarea");
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

encryptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  handleClickEncrypt();
});
decryptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  handleClickDecrypt();
});

//#region functions

const handleClickEncrypt = () => {
  let textValue = inputText.value;
  if (textValue.length > 0) {
    let encryptMessage = encrypt(textValue);
    textResult.innerText = encryptMessage;
    textResult.classList.remove("not-found-text");
    textResult.classList.add("found-text");
    imgText.src = "";
    messageRequired.innerText = "";
  }
};
/* 1 - separar a string recebida e transformar em array - ok
   2 - contar com o for substituir a palavra recebida pelo ruleKeys - em andamento
   3 - depois de substituido juntar o array e transformar em string


*/

const encrypt = (valueEncrypt) => {
  let rulesKeys = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  let palavraRecebida = valueEncrypt.toLowerCase();
  let palavraEspalhada = palavraRecebida.split("");
  console.log(palavraEspalhada);
  for (let i = 0; i < palavraEspalhada.length; i++) {
    for (let j = 0; j < rulesKeys.length; j++) {}
  }

  // return valueEncrypt;
};
encrypt("camila");

const handleClickDecrypt = () => {
  let textValue = inputText.value;
  if (textValue.length > 0) {
    let decryptMessage = decrypt(textValue);
    textResult.innerText = decryptMessage;
    imgText.src = "";
    messageRequired.innerText = "";
  }
};
const decrypt = (valueDecrypt) => {
  let rulesKeys = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  valueDecrypt = valueDecrypt.toLowerCase();
  for (let i = 0; i < rulesKeys.length; i++) {
    if (valueDecrypt.includes(rulesKeys[i][1])) {
      valueDecrypt = valueDecrypt.replaceAll(rulesKeys[i][1], rulesKeys[i][0]);
    }
  }
  return valueDecrypt;
};
//#endregion
