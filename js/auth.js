function isLogged() {
  return sessionStorage.getItem("logged") === "true";
}

function requireLogin() {
  if (!isLogged()) {
    window.location.href = "../login.html"; 
  }
}

function setupNavbarForProtectedPages() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;

  if (!isLogged()) {
    nav.innerHTML = `
      <a href="../index.html">Home</a>
      <a href="../html/cadastro.html">Cadastro</a>
      <a href="../html/login.html">Login</a>
    `;
  } else {
    nav.innerHTML = `
      <a href="../index.html">Home</a>
      <a href="../html/conteudo.html">Conteúdo educativo</a>
      <a href="../html/humor.html">Medidor de humor</a>
      <a href="../html/ajuda.html">Canais de ajuda</a>
      <a href="../html/cadastro.html">Cadastro</a>
      <a href="../index.html" id="logoutBtn">Sair</a>
    `;

    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.clear();
      window.location.href = "../login.html";
    });
  }
}