const themeButton = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', theme);
  });
}
