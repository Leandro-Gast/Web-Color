(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("mode-toggle");
  var icon = document.getElementById("mode-icon");
  var label = document.getElementById("mode-label");
  var STORAGE_KEY = "ui-mode";

  function currentMode() {
    return root.getAttribute("data-mode") === "dark" ? "dark" : "light";
  }

  function applyMode(mode) {
    var next = mode === "dark" ? "dark" : "light";
    var isDark = next === "dark";

    root.setAttribute("data-mode", next);
    localStorage.setItem(STORAGE_KEY, next);

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

  var saved = localStorage.getItem(STORAGE_KEY);
  applyMode(saved === "dark" || saved === "light" ? saved : currentMode());

  if (toggle) {
    toggle.addEventListener("click", function () {
      applyMode(currentMode() === "dark" ? "light" : "dark");
    });
  }
})();
