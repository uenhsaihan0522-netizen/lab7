// script.js жишээ (Dark mode toggle)
const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = rootElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    rootElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    rootElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Хуудас ачаалахад өмнөх тохиргоог хадгалах
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  rootElement.setAttribute('data-theme', savedTheme);
}