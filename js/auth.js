function isLogged() {
  return sessionStorage.getItem("logged") === "true";
}

function _loginUrl() {
  return window.location.pathname.includes("/html/") ? "login.html" : "html/login.html";
}

function verificarLogin() {
  if (!isLogged()) {
    window.location.href = _loginUrl();
  }
}

function logout() {
  sessionStorage.clear();
  window.location.href = _loginUrl();
}

function setupNavbarForProtectedPages() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;

  if (!isLogged()) {
    nav.innerHTML = `
      <a href="../index.html">Home</a>
      <a href="cadastro.html">Cadastro</a>
      <a href="login.html">Login</a>
    `;
  } else {
    nav.innerHTML = `
      <a href="../index.html">Home</a>
      <a href="conteudo.html">Conteúdo educativo</a>
      <a href="humor.html">Medidor de humor</a>
      <a href="ajuda.html">Canais de ajuda</a>
      <a href="#" id="logoutBtn">Sair</a>
    `;

    document.getElementById("logoutBtn").addEventListener("click", (e) => {
      e.preventDefault();
      logout();
    });
  }
}

verificarLogin();