const URL =
  " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";

const qrCodeInput = document.querySelector("#qr-code");
const QrCodeBtn = document.querySelector("#qr-code-btn");

const qrCodeImg = document.querySelector("#qr-code-img");

const container = document.querySelector("#container-img");

console.log(qrCodeInput);

const generatorQrCode = () => {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  QrCodeBtn.value = "Gerando código...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    container.style.display = "flex";
    QrCodeBtn.value = "Código gerado!";
  });
};

QrCodeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  generatorQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generatorQrCode();
  }
});

qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.style.display = "none";
    QrCodeBtn.value = "Gerar código";
  }
});
