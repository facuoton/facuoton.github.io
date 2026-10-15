
const initAuthSystem = () => {
  const panelPrelogin = document.getElementById("auth-panel-prelogin");
  const formLogin = document.getElementById("login-form-panel");
  const formRegister = document.getElementById("register-form-panel");

  const btnPreloginEnter = document.getElementById("btn-prelogin-enter");
  const btnLoginGuest = document.getElementById("btn-login-guest");
  const switchToRegister = document.getElementById("switch-to-register");
  const switchToLogin = document.getElementById("switch-to-login");
  const btnLogout = document.getElementById("btn-sidebar-logout");

  const switchPanel = (panelName) => {
    if (panelPrelogin) panelPrelogin.classList.remove("active");
    if (formLogin) formLogin.classList.remove("active");
    if (formRegister) formRegister.classList.remove("active");

    if (panelName === "prelogin" && panelPrelogin) {
      panelPrelogin.classList.add("active");
    } else if (panelName === "login" && formLogin) {
      formLogin.classList.add("active");
      const emailInput = document.getElementById("login-email");
      if (emailInput) emailInput.focus();
    } else if (panelName === "register" && formRegister) {
      formRegister.classList.add("active");
      const regEmailInput = document.getElementById("reg-email");
      if (regEmailInput) regEmailInput.focus();
    }
  };

  if (btnPreloginEnter) {
    btnPreloginEnter.addEventListener("click", (e) => {
      e.preventDefault();
      switchPanel("login");
    });
  }

  if (switchToRegister) {
    switchToRegister.addEventListener("click", (e) => {
      e.preventDefault();
      switchPanel("register");
    });
  }

  if (switchToLogin) {
    switchToLogin.addEventListener("click", (e) => {
      e.preventDefault();
      switchPanel("login");
    });
  }

  if (btnLoginGuest) {
    btnLoginGuest.addEventListener("click", (e) => {
      e.preventDefault();
      loginUser("Invitado", "Explorador Público");
    });
  }

  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailVal = document.getElementById("login-email")?.value.trim() || "facundo@missioncontrol.app";
      const userName = emailVal.split("@")[0] || "Operador";
      loginUser(userName, "Operador de Misión");
    });
  }

  if (formRegister) {
    formRegister.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailVal = document.getElementById("reg-email")?.value.trim() || "cadete@missioncontrol.app";
      const userName = emailVal.split("@")[0] || "Nuevo Operador";
      loginUser(userName, "Cadete Espacial");
    });
  }

  if (btnLogout) {
    btnLogout.addEventListener("click", (e) => {
      e.preventDefault();
      logoutUser();
    });
  }
};

const loginUser = (name, role) => {
  localStorage.setItem("mission_user", JSON.stringify({ name, role, loggedInAt: Date.now() }));
  
  const viewPrelogin = document.getElementById("view-prelogin");
  const appShell = document.getElementById("app-shell");

  if (viewPrelogin) viewPrelogin.classList.remove("active");
  if (appShell) appShell.classList.add("active");
  
  showToast(`¡Bienvenido a Mission Control, ${name}!`);
  
  if (window.navigateToSection) {
    window.navigateToSection("home");
  }
};

const logoutUser = () => {
  localStorage.removeItem("mission_user");
  const appShell = document.getElementById("app-shell");
  const viewPrelogin = document.getElementById("view-prelogin");
  const panelPrelogin = document.getElementById("auth-panel-prelogin");
  const formLogin = document.getElementById("login-form-panel");
  const formRegister = document.getElementById("register-form-panel");

  if (appShell) appShell.classList.remove("active");
  if (viewPrelogin) viewPrelogin.classList.add("active");

  if (panelPrelogin) panelPrelogin.classList.add("active");
  if (formLogin) formLogin.classList.remove("active");
  if (formRegister) formRegister.classList.remove("active");

  showToast("Sesión cerrada correctamente.");
};

const showToast = (message) => {
  const toast = document.getElementById("toast-box");
  const msgEl = document.getElementById("toast-message");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 3500);
};

document.addEventListener("DOMContentLoaded", initAuthSystem);

