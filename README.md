# 🧠 Saúde Mental e Bem-Estar

## 📖 Descrição do Projeto

Site educativo sobre saúde mental e bem-estar desenvolvido com fins acadêmicos. O objetivo é fornecer recursos, informações e ferramentas práticas para auxiliar no cuidado com a saúde mental no dia a dia.

**Público-alvo:** estudantes e qualquer pessoa que queira aprender mais sobre saúde mental, autocuidado e prevenção de ansiedade e depressão.

> ⚠️ **Aviso:** Este site é educativo e **não** substitui acompanhamento profissional. Em caso de necessidade, procure apoio de um psicólogo, psiquiatra ou serviço de saúde.

---

## 🛠 Tecnologias Utilizadas

- **HTML5** — estrutura das páginas
- **CSS3** — estilização e layout responsivo
- **JavaScript (Vanilla)** — lógica de cadastro, login e autenticação via `sessionStorage`

Nenhuma biblioteca ou framework externo é necessário.

---

## ▶️ Como Executar o Projeto

Por ser um site estático (apenas HTML, CSS e JavaScript), não há necessidade de instalar dependências ou configurar um servidor especial.

### Opção 1 — Abrir diretamente no navegador

1. Clone ou baixe o repositório:
   ```bash
   git clone https://github.com/gabrielthomsen06/saude-mental.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd saude-mental
   ```
3. Abra o arquivo `index.html` diretamente no seu navegador.

### Opção 2 — Usar o Live Server (VS Code)

1. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code.
2. Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

---

## 📂 Estrutura de Pastas

```
saude-mental/
├── index.html          # Página inicial do site
├── css/
│   └── style.css       # Estilos globais
├── html/
│   ├── conteudo.html   # Conteúdo educativo (ansiedade, autocuidado, mitos x fatos)
│   ├── humor.html      # Medidor de humor diário
│   ├── ajuda.html      # Canais de ajuda e recursos no Brasil (CVV, SAMU, etc.)
│   ├── cadastro.html   # Formulário de cadastro de usuário
│   └── login.html      # Formulário de login
└── js/
    ├── auth.js         # Lógica de autenticação (verificação de sessão, logout)
    ├── cadastro.js     # Validação e processamento do formulário de cadastro
    └── login.js        # Validação e processamento do formulário de login
```

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos.
