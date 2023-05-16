const themeToggleBtn = document.getElementById("theme-toggle-btn");
themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("theme-dark");
  document.body.classList.toggle("theme-white");
});
