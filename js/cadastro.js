const form = document.getElementById("formCadastro");

const msgNome = document.getElementById("msgNome");
const msgEmail = document.getElementById("msgEmail");
const msgSenha = document.getElementById("msgSenha");
const msgConfirmar = document.getElementById("msgConfirmar");
const msgTermos = document.getElementById("msgTermos");
const msgGeral = document.getElementById("msgGeral");

function limpar() {
  [msgNome, msgEmail, msgSenha, msgConfirmar, msgTermos, msgGeral].forEach(el => {
    el.textContent = "";
    el.className = "msg";
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  limpar();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;
  const termos = document.getElementById("termos").checked;

  let ok = true;

  if (!nome) {
    msgNome.textContent = "Informe seu nome.";
    msgNome.className = "msg erro";
    ok = false;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  if (usuarios.some(u => u.email === email)) {
    msgEmail.textContent = "Este e-mail já está cadastrado.";
    msgEmail.className = "msg erro";
    ok = false;
  }

  if (senha.length < 8) {
    msgSenha.textContent = "A senha precisa ter no mínimo 8 caracteres.";
    msgSenha.className = "msg erro";
    ok = false;
  }

  if (senha !== confirmar) {
    msgConfirmar.textContent = "As senhas não coincidem.";
    msgConfirmar.className = "msg erro";
    ok = false;
  }

  if (!termos) {
    msgTermos.textContent = "Você precisa aceitar os termos para continuar.";
    msgTermos.className = "msg erro";
    ok = false;
  }

  if (!ok) return;

  usuarios.push({ nome, email, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  msgGeral.textContent = "Cadastro realizado! Redirecionando para login...";
  msgGeral.className = "msg sucesso";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 800);
});
