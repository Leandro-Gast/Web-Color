(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("toggle-dark"); // <--- Corregido al ID del HTML
  var icon = document.getElementById("mode-icon");
  var label = document.getElementById("mode-label");
  var STORAGE_KEY = "ui-mode";

  function currentMode() {
    return root.classList.contains("dark") ? "dark" : "light";
  }

  function applyMode(mode) {
    var isDark = mode === "dark";

    if (isDark) {
      root.classList.add("dark");
      root.setAttribute("data-mode", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-mode", "light");
    }
    
    localStorage.setItem(STORAGE_KEY, mode);

    if (toggle) {
      toggle.setAttribute("aria-pressed", String(isDark));
    }
    if (icon) {
      icon.textContent = isDark ? "light_mode" : "dark_mode";
    }
    if (label) {
      label.textContent = isDark ? "MODO CLARO" : "MODO OSCURO";
    }
  }

  // Inicializar modo guardado
  var saved = localStorage.getItem(STORAGE_KEY);
  applyMode(saved === "dark" || saved === "light" ? saved : "light");

  if (toggle) {
    toggle.addEventListener("click", function () {
      var newMode = currentMode() === "dark" ? "light" : "dark";
      applyMode(newMode);
      var toggle = document.getElementById("toggle-dark"); // <--- Aquí está el fallo
    });
  }
})();
