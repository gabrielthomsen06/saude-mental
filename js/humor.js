const form = document.getElementById("formHumor"); 
const msgResultado = document.getElementById("msgResultado");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const humor = form.querySelector("input[name='humor']:checked");

  if (!humor) {
    msgResultado.textContent = "Por favor, selecione como você está se sentindo.";
    msgResultado.className = "msg erro";
    return;
  }

  const nivel = parseInt(humor.value);
  const mensagens = {
    1: "😔 Sinto muito que esteja se sentindo assim. Considere conversar com alguém de confiança.",
    2: "😕 Dia difícil? Tudo bem pedir ajuda. Que tal uma pausa?",
    3: "😐 Ok é um começo. Pequenas ações podem melhorar seu dia!",
    4: "🙂 Que bom! Continue cuidando de você.",
    5: "😄 Ótimo! Aproveite esse momento positivo!"
  };

  msgResultado.textContent = mensagens[nivel];
  msgResultado.className = "msg sucesso";
  msgResultado.scrollIntoView({ behavior: "smooth" });
});