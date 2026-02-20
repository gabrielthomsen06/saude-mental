const form = document.getElementById("formLogin");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

const msgEmail = document.getElementById("msgEmail");
const msgSenha = document.getElementById("msgSenha");
const mensagem = document.getElementById("mensagem");

function limpar() {
  msgEmail.textContent = "";
  msgSenha.textContent = "";
  mensagem.textContent = "";
  msgEmail.className = "msg";
  msgSenha.className = "msg";
  mensagem.className = "msg";
}

function emailValido(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  limpar();

  const email = emailInput.value.trim();
  const senha = passInput.value;

  let ok = true;

  if (!emailValido(email)) {
    msgEmail.textContent = "Informe um e-mail válido.";
    msgEmail.className = "msg erro";
    ok = false;
  }

  if (senha.length < 8) {
    msgSenha.textContent = "A senha precisa ter no mínimo 8 caracteres.";
    msgSenha.className = "msg erro";
    ok = false;
  }

  if (!ok) return;

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (!usuario) {
    mensagem.textContent = "E-mail ou senha incorretos.";
    mensagem.className = "msg erro";
    return;
  }

  sessionStorage.setItem("logged", "true");
  sessionStorage.setItem("userEmail", email);

  mensagem.textContent = "Login OK! Redirecionando...";
  mensagem.className = "msg sucesso";

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 600);
});