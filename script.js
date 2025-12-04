const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Vérifier si un thème est déjà sauvegardé ou si l'utilisateur préfère le sombre
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  body.classList.add('dark-mode');
  toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleButton.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    toggleButton.textContent = '🌙';
  }
});
